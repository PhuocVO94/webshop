import { Category } from '../interface/products/Category';

export const sidenav: Category[] = [
  {
    name: 'Điện thoại, Tablet',
    icon: '',
    subCategories: [
      {
        title: 'Hãng điện thoại',
        product: [
          {
            name: 'iPhone',
            brand: 'Apple',
            price: 'Từ 13 - 20 triệu',
            isHot: false,
            isNew: false,
            url: '/iphone',
          },
          {
            name: 'Samsung',
            brand: 'Samsung',
            price: 'Từ 2 - 4 triệu',
            isHot: false,
            isNew: false,
            url: '/samsung',
          },
          {
            name: 'Xiaomi',
            brand: 'Xiaomi',
            price: 'Từ 4 - 7 triệu',
            isHot: false,
            isNew: false,
            url: '/xiaomi',
          },
        ],
      },
      {
        title: 'Mức giá điện thoại',
        product: [
          {
            name: 'Dưới 2 triệu',
            brand: '',
            price: 'Dưới 2 triệu',
            isHot: false,
            isNew: false,
            url: '/under-2m',
          },
          {
            name: 'Từ 2 - 4 triệu',
            brand: '',
            price: 'Từ 2 - 4 triệu',
            isHot: false,
            isNew: false,
            url: '/2-4m',
          },
        ],
      },
      {
        title: 'Điện thoại HOT',
        product: [
          {
            name: 'iPhone 16 Series',
            brand: 'Apple',
            price: 'Trên 20 triệu',
            isHot: true,
            isNew: true,
            url: '/iphone-16',
          },
          {
            name: 'Galaxy S25 Ultra',
            brand: 'Samsung',
            price: 'Trên 20 triệu',
            isHot: true,
            isNew: true,
            url: '/samsung-s25',
          },
        ],
      },
      {
        title: 'Hãng máy tính bảng',
        product: [
          {
            name: 'iPad',
            brand: 'Apple',
            price: 'Từ 7 - 13 triệu',
            isHot: false,
            isNew: false,
            url: '/ipad',
          },
          {
            name: 'Samsung',
            brand: 'Samsung',
            price: 'Từ 13 - 20 triệu',
            isHot: false,
            isNew: false,
            url: '/samsung-tablet',
          },
        ],
      },
      {
        title: 'Máy tính bảng HOT',
        product: [
          {
            name: 'iPad Air M3',
            brand: 'Apple',
            price: 'Trên 20 triệu',
            isHot: true,
            isNew: true,
            url: '/ipad-air',
          },
          {
            name: 'Galaxy Tab S9',
            brand: 'Samsung',
            price: 'Từ 7 - 13 triệu',
            isHot: true,
            isNew: true,
            url: '/galaxy-tab',
          },
        ],
      },
    ],
  },
  {
    name: 'Laptop',
  },
  {
    name: 'Âm thanh, míc thu âm',
  },
  {
    name: 'Đồng hồ, camara',
  },
  {
    name: 'Đồ gia dụng',
  },
  {
    name: 'Linh Kiện',
  },
  {
    name: 'PC, Máy in',
  },

  {
    name: 'Hàng cũ',
  },
  {
    name: 'Khuyến mãi',
  },
  {
    name: 'Tin công nghệ',
  },
];
