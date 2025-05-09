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
  id: number;
  title?: string;
  name?: string;
  price?: string;
  lectures?: string;
  num_lessons?: string;
  level?: string;
  students?: string;
  num_syllabi?: number;
  hoursName?: string;
  reviews_count?: string;
  rating: number;
  discount_price?: number;
  currency?: string;
  image?: string;
  instructor?: string;
  duration?: string;
  description?: string;
  lecturesName?: number;
  hours?: number;
  numOfStu?: number;
  purchased?: number;
  reviews_average?: number;
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
  instructor_id: number;
  name: string;
  title: string;
  students: string;
  total_reviews: number;
  image?: string;
  total_students: string;
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

// User info to save in local storage & redux
export interface IUserSave {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  role: string;
  updated_at: string;
  created_at: string;
  id: number;
  token: string;
  bio?: string;
  title?: string;
  profile_picture?: string;
}
