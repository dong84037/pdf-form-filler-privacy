"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { ANONYMOUS, loadTossPayments } from "@tosspayments/tosspayments-sdk";
import type { TossPaymentsWidgets } from "@tosspayments/tosspayments-sdk";
import { TOSS_CLIENT_KEY } from "@/lib/toss/config";

interface TossPaymentWidgetProps {
  amount: number;
  onReadyChange?: (ready: boolean) => void;
  onError?: (message: string) => void;
}

export interface TossPaymentWidgetHandle {
  requestPayment: (params: {
    orderId: string;
    orderName: string;
    customerName?: string;
    customerEmail?: string;
  }) => Promise<void>;
}

export const TossPaymentWidget = forwardRef<TossPaymentWidgetHandle, TossPaymentWidgetProps>(
  function TossPaymentWidget({ amount, onReadyChange, onError }, ref) {
    const widgetsRef = useRef<TossPaymentsWidgets | null>(null);
    const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

    useEffect(() => {
      let cancelled = false;

      async function setup() {
        try {
          const tossPayments = await loadTossPayments(TOSS_CLIENT_KEY);
          const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });
          if (cancelled) return;
          widgetsRef.current = widgets;

          await widgets.setAmount({ currency: "KRW", value: amount });
          await widgets.renderPaymentMethods({
            selector: "#toss-payment-method",
            variantKey: "DEFAULT",
          });
          await widgets.renderAgreement({ selector: "#toss-agreement", variantKey: "AGREEMENT" });

          if (!cancelled) {
            setStatus("ready");
            onReadyChange?.(true);
          }
        } catch (error) {
          console.error("토스페이먼츠 결제위젯 초기화 실패", error);
          if (!cancelled) {
            setStatus("error");
            onError?.("결제 UI를 불러오지 못했습니다. 네트워크 상태를 확인하고 다시 시도해주세요.");
          }
        }
      }

      setup();
      return () => {
        cancelled = true;
      };
      // 마운트 시 한 번만 초기화한다. 금액 변경은 아래 별도 effect에서 setAmount로 반영한다.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (status !== "ready" || !widgetsRef.current) return;
      widgetsRef.current.setAmount({ currency: "KRW", value: amount }).catch((error) => {
        console.error("결제 금액 갱신 실패", error);
      });
    }, [amount, status]);

    useImperativeHandle(ref, () => ({
      async requestPayment(params) {
        if (!widgetsRef.current) {
          throw new Error("결제 UI가 아직 준비되지 않았습니다.");
        }
        await widgetsRef.current.requestPayment({
          ...params,
          successUrl: `${window.location.origin}/checkout/success`,
          failUrl: `${window.location.origin}/checkout/fail`,
        });
      },
    }));

    return (
      <div>
        <div id="toss-payment-method" />
        <div id="toss-agreement" className="mt-4" />
        {status === "loading" && (
          <p className="mt-4 text-sm text-muted">결제 수단을 불러오는 중입니다...</p>
        )}
      </div>
    );
  }
);
