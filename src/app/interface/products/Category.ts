import { SubCategory } from './SubCategory';

export interface Category {
  name: string; // Tên của danh mục chính (ví dụ: "Điện thoại", "Tablet")
  icon?: string;
  subCategories?: SubCategory[];
}
