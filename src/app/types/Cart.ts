export type Cart = {
    product: {
        id: string,
        name: string,
        is_soldout: boolean,
        price: number,
        image_url: string,
        options: string | null,
    },
    total_price: number,
    quantity: number,
    user_id: number,
    id: number,
}
