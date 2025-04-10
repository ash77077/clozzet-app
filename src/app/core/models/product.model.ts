export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface ProductCategory {
  [category: string]: Product[];
}

export interface CreateProductDto {
  name: string;
  imageUrl: string;
  description: string;
  category: string;
}
