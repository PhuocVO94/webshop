import { Product } from '../products/product';

export interface SubCategory {
  title: string;
  routerlink?: string;
  product: Product[];
}
