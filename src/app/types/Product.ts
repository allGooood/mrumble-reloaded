export interface ProductProps {
    id: number;
    category: string;
    product_name: string;
    stock: number;
    price: string;
    discount_percentage?: string;
    image_url?: string;
    description?: string;
    sku: string;
    has_option: boolean;
    required_option_count: number;
  }
  
  export interface ProductGroup {
    category: string;
    items: ProductProps[];
  }

  export interface Product{
    product: ProductProps;
  }