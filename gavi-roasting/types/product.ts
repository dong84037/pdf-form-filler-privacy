export type RoastLevel = "light" | "medium" | "medium-dark" | "dark";

export interface ProductOption {
  id: string;
  label: string; // e.g. "200g", "1kg"
  weightGrams: number;
  price: number; // KRW
  stock: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  origin: string;
  roastLevel: RoastLevel;
  flavorNotes: string[];
  description: string;
  imageUrl: string | null; // null while brand photography is unavailable
  options: ProductOption[];
  isSubscriptionAvailable: boolean;
}
