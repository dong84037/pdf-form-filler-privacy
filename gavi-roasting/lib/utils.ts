export function formatPriceKRW(amount: number): string {
  return `${amount.toLocaleString("ko-KR")}원`;
}

export function isOutOfStock(stock: number): boolean {
  return stock <= 0;
}
