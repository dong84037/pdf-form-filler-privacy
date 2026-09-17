import { Product } from "@/types/product";

// Phase 3는 mock 데이터로 우선 진행합니다.
// 실 연동 시 이 파일의 내부 구현만 Supabase products/product_options 테이블 조회로
// 교체하면 되도록, 호출부는 이미 비동기 함수로 작성되어 있습니다. (schema: supabase/schema.sql)
const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "ethiopia-yirgacheffe",
    name: "에티오피아 예가체프 G1",
    origin: "에티오피아 예가체프",
    roastLevel: "light",
    flavorNotes: ["자스민", "베르가못", "복숭아"],
    description: "워시드 프로세스로 가공한 예가체프 G1. 산미가 또렷하고 향이 깨끗합니다.",
    imageUrl: null,
    options: [
      { id: "p1-200g", label: "200g", weightGrams: 200, price: 18000, stock: 24 },
      { id: "p1-1kg", label: "1kg", weightGrams: 1000, price: 76000, stock: 6 },
    ],
    isSubscriptionAvailable: true,
  },
  {
    id: "p2",
    slug: "colombia-huila",
    name: "콜롬비아 우일라 수프리모",
    origin: "콜롬비아 우일라",
    roastLevel: "medium",
    flavorNotes: ["초콜릿", "오렌지", "캐러멜"],
    description: "균형 잡힌 바디와 단맛이 특징인 우일라 지역 수프리모 등급 원두입니다.",
    imageUrl: null,
    options: [
      { id: "p2-200g", label: "200g", weightGrams: 200, price: 17000, stock: 30 },
      { id: "p2-1kg", label: "1kg", weightGrams: 1000, price: 71000, stock: 10 },
    ],
    isSubscriptionAvailable: true,
  },
  {
    id: "p3",
    slug: "guatemala-antigua",
    name: "과테말라 안티구아",
    origin: "과테말라 안티구아",
    roastLevel: "medium-dark",
    flavorNotes: ["스모키", "다크초콜릿", "건자두"],
    description: "화산 토양에서 자란 원두 특유의 묵직한 바디감과 스모키한 여운이 있습니다.",
    imageUrl: null,
    options: [
      { id: "p3-200g", label: "200g", weightGrams: 200, price: 19000, stock: 15 },
      { id: "p3-1kg", label: "1kg", weightGrams: 1000, price: 79000, stock: 0 },
    ],
    isSubscriptionAvailable: false,
  },
];

export async function getProducts(): Promise<Product[]> {
  return MOCK_PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return MOCK_PRODUCTS.find((product) => product.slug === slug);
}
