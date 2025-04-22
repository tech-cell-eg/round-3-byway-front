export interface Review {
  user: string;
  rating: number;
  comment: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Image {
  image: string;
}

export interface ICourse {
  id2: number;
  name: string;
  description: string;
  price: string;
  lectures: string;
  lecturesName: number;
  hours: number;
  hoursName: string;
  purchased: number;
  small_desc: string;
  sku: string;
  reviews_count: string;
  reviews_average: number;
  reviews: Review[];
  has_discount?: boolean;
  discount: string;
  category: Category;
  images: Image[];
}
