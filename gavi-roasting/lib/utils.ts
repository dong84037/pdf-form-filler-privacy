export function formatPriceKRW(amount: number): string {
  return `${amount.toLocaleString("ko-KR")}원`;
}

export function isOutOfStock(stock: number): boolean {
  return stock <= 0;
}

// 토스페이먼츠 orderName 형식(예: "생수 외 1건")에 맞춰 장바구니 라인들을 요약한다.
export function buildOrderName(lines: { productName: string }[]): string {
  if (lines.length === 0) return "";
  const [first, ...rest] = lines;
  return rest.length > 0 ? `${first.productName} 외 ${rest.length}건` : first.productName;
}
