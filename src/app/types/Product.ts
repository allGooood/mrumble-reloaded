export type Product = {
    id: number;
    category: string;
    product_name: string;
    stock: number;
    price: number;
    discount_percentage?: number;
    image_url?: string;
    description?: string;
    sku: string;
    has_option: boolean;
    required_option_count: number;
}