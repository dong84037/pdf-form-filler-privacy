import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartLine {
  productId: string;
  productSlug: string;
  productName: string;
  optionId: string;
  optionLabel: string;
  unitPrice: number;
  quantity: number;
}

interface CartState {
  lines: CartLine[];
  addLine: (line: CartLine) => void;
  removeLine: (productId: string, optionId: string) => void;
  setQuantity: (productId: string, optionId: string, quantity: number) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      addLine: (line) =>
        set((state) => {
          const existing = state.lines.find(
            (l) => l.productId === line.productId && l.optionId === line.optionId
          );
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l === existing ? { ...l, quantity: l.quantity + line.quantity } : l
              ),
            };
          }
          return { lines: [...state.lines, line] };
        }),
      removeLine: (productId, optionId) =>
        set((state) => ({
          lines: state.lines.filter(
            (l) => !(l.productId === productId && l.optionId === optionId)
          ),
        })),
      setQuantity: (productId, optionId, quantity) =>
        set((state) => ({
          lines: state.lines.map((l) =>
            l.productId === productId && l.optionId === optionId
              ? { ...l, quantity }
              : l
          ),
        })),
      clear: () => set({ lines: [] }),
    }),
    { name: "gavi-roasting-cart" }
  )
);
