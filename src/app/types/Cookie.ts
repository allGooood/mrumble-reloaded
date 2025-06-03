export interface CookieProps{
    id: number,
    cookie_name: string,
    sku: string,
    stock: number,
    extra_charge: string,
    calories: string,
    image_url: string,
    category: string,
}

export interface Cookie{
    cookie?: CookieProps;
}