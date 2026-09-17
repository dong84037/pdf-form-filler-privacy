export interface ShippingFormValue {
  recipientName: string;
  recipientPhone: string;
  address: string;
  requestMessage: string;
}

interface ShippingFormProps {
  value: ShippingFormValue;
  onChange: (patch: Partial<ShippingFormValue>) => void;
}

const FIELD_CLASSES =
  "mt-1 w-full border border-ink/15 bg-transparent px-3 py-2 text-sm text-paper placeholder:text-muted focus:border-copper focus:outline-none";

export function ShippingForm({ value, onChange }: ShippingFormProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="recipientName" className="text-sm text-paper">
          수령인
        </label>
        <input
          id="recipientName"
          value={value.recipientName}
          onChange={(e) => onChange({ recipientName: e.target.value })}
          placeholder="홍길동"
          className={FIELD_CLASSES}
        />
      </div>
      <div>
        <label htmlFor="recipientPhone" className="text-sm text-paper">
          연락처
        </label>
        <input
          id="recipientPhone"
          value={value.recipientPhone}
          onChange={(e) => onChange({ recipientPhone: e.target.value })}
          placeholder="010-0000-0000"
          className={FIELD_CLASSES}
        />
      </div>
      <div>
        <label htmlFor="address" className="text-sm text-paper">
          배송지 주소
        </label>
        <input
          id="address"
          value={value.address}
          onChange={(e) => onChange({ address: e.target.value })}
          placeholder="배송받을 주소를 입력해주세요"
          className={FIELD_CLASSES}
        />
      </div>
      <div>
        <label htmlFor="requestMessage" className="text-sm text-paper">
          배송 요청사항 (선택)
        </label>
        <input
          id="requestMessage"
          value={value.requestMessage}
          onChange={(e) => onChange({ requestMessage: e.target.value })}
          placeholder="예: 부재 시 경비실에 맡겨주세요"
          className={FIELD_CLASSES}
        />
      </div>
    </div>
  );
}
