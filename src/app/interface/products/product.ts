export interface Product {
  name: string; // Tên sản phẩm
  brand: string; // Thương hiệu
  price: string; // Mức giá (Có thể là một chuỗi thể hiện mức giá hoặc phạm vi)
  isHot: boolean; // Đánh dấu sản phẩm hot
  isNew: boolean; // Đánh dấu sản phẩm mới
  url: string; // URL
}
