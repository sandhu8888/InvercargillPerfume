export type ProductCategory = 'all' | 'men' | 'women' | 'home' | 'fragrances';

export type FragranceType = 'oil' | 'non-alcoholic' | 'home' | 'inspired';

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  city: string;
  verified: boolean;
  source: 'google' | 'direct';
}

export interface ProductSpecifications {
  formulation: string;
  concentration: string;
  volumeOptions: string[];
  longevity: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  scentFamily: string;
  origin: string;
  alcoholFree: boolean;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  inspiredBy?: string;
  category: 'men' | 'women' | 'home' | 'fragrances';
  type: FragranceType;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  isPopular?: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  image: string;
  description: string;
  specifications: ProductSpecifications;
  reviews: ProductReview[];
}

export interface CartItem {
  product: Product;
  selectedVolume: string;
  quantity: number;
  unitPrice: number;
}

export type PageRoute = 'home' | 'products' | 'about' | 'contact' | 'social';

export type SortOption = 'popular' | 'price-asc' | 'price-desc' | 'rating';
