export interface ProductProps {
    id: number;
    category: string;
    productName: string;
    stock: number;
    price: string;
    discountPercentage?: string;
    imageUrl?: string;
    description?: string;
    sku: string;
  }
  
  export interface ProductGroup {
    category: string;
    items: ProductProps[];
  }