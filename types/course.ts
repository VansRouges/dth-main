// types/course.ts
export interface Instructor {
    _id: string;
    name: string;
    photo?: {
      asset: {
        _ref: string;
      };
    };
  }
  
  export interface Category {
    name: string;
    slug: {
      current: string;
    };
  }
  
  export interface Course {
    _id: string;
    title: string;
    price: number;
    instructor: Instructor;
    category: Category;
    image?: {
      asset: {
        _ref: string;
      };
    };
    previewVideo?: string;
    topRated?: boolean;
    level?: string;
    certification?: boolean;
  }