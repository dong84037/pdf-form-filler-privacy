// 결제 라이브 전환 전 확인 필요:
// 사업자등록 + 통신판매업 신고 + 토스페이먼츠 PG 가맹심사가 끝나기 전까지
// TOSS_PAYMENT_MODE는 반드시 "test"로 유지한다.
export const TOSS_PAYMENT_MODE: "test" | "live" =
  process.env.NEXT_PUBLIC_TOSS_PAYMENT_MODE === "live" ? "live" : "test";

// 토스페이먼츠 결제위젯(주문서형) 공식 문서 공개 테스트 클라이언트 키.
// 실 연동 시 상점관리자에서 발급받은 키로 교체.
const TEST_CLIENT_KEY = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";

export const TOSS_CLIENT_KEY =
  TOSS_PAYMENT_MODE === "live"
    ? process.env.NEXT_PUBLIC_TOSS_LIVE_CLIENT_KEY!
    : TEST_CLIENT_KEY;
