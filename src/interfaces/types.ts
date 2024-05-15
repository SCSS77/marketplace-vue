export interface Subcategory {
  id: number;
  name: string;
  icon: string;
}

export interface Category {
  id: number;
  name: string;
  subcategories: Subcategory[];
}

