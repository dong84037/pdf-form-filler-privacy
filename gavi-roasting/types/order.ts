export type OrderStatus = "pending" | "paid" | "failed" | "cancelled";

export interface OrderItem {
  productId: string;
  productName: string;
  optionId: string;
  optionLabel: string;
  unitPrice: number;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string | null;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  tossPaymentKey: string | null;
  tossOrderId: string;
  recipientName: string;
  recipientPhone: string;
  shippingAddress: string;
  createdAt: string;
}
