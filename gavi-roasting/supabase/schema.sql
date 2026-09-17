-- Gavi Roasting 커머스 스키마 (MVP)
-- 상품 등록/수정은 별도 관리자 UI 없이 이 테이블을 Supabase 대시보드에서 직접 관리합니다.

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  origin text not null,
  roast_level text not null check (roast_level in ('light', 'medium', 'medium-dark', 'dark')),
  flavor_notes text[] not null default '{}',
  description text not null default '',
  image_url text,
  is_subscription_available boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists product_options (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  label text not null,
  weight_grams integer not null,
  price integer not null,
  stock integer not null default 0
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  total_amount integer not null,
  status text not null default 'pending' check (status in ('pending', 'paid', 'failed', 'cancelled')),
  toss_payment_key text,
  toss_order_id text unique not null,
  recipient_name text not null,
  recipient_phone text not null,
  shipping_address text not null,
  created_at timestamptz not null default now()
);

create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  product_id uuid not null references products(id),
  product_option_id uuid not null references product_options(id),
  unit_price integer not null,
  quantity integer not null check (quantity > 0)
);

create table if not exists wholesale_inquiries (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  contact_name text not null,
  phone text not null,
  email text not null,
  expected_monthly_volume_kg integer,
  message text,
  created_at timestamptz not null default now()
);
