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
  price?: string; // Optional
  lectures?: string; // Optional
  lecturesName?: number; // Optional
  hours?: number; // Optional
  level?: string; // Optional
  students?: string; // Optional
  numOfStu?: number;
  hoursName?: string; // Optional
  purchased?: number;
  small_desc: string;
  sku: string;
  reviews_count: string;
  reviews_average: number;
  reviews: unknown[];
  has_discount: boolean;
  discount: string;
  category: { id: number; name: string };
  images: { image: string }[];
}

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

export interface Iinstructor {
  id2: number;
  name: string;
  description: string;
  students: string;
  numOfStu: number;
  sku: string;
  reviews_count: number;
  reviews_average: number;
  reviews: Review[];
  has_discount?: boolean;
  discount: string;
  category: Category;
  images: Image[];

  //  Instructor info
  instructorName: string;
  instructorImage?: string;
}

// Cart and checkout
export interface CartRating {
  count: number;
  rating: number;
}

export interface CartPrice {
  current: number;
  initial: number;
  discount: string;
}

export interface Cartinfo {
  count_courses: number;
  price: string;
  discount: string;
  tax: string;
  total: string;
}

export interface CartCourse {
  id: number;
  course_name: string;
  instructor_name: string;
  rating: CartRating;
  duration: string;
  image: string;
  lecture_count: number;
  level: string;
  price: CartPrice;
}

export interface CartData {
  cartinfo: Cartinfo;
  courses: CartCourse[];
}

export interface Testimonial {
  id: number;
  paragraph: string;
  name: string;
  image: string;
  title: string;
}
