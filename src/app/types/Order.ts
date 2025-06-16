import { Timestamp } from "next/dist/server/lib/cache-handlers/types"

export type Order = {
    id: number,
    user_id: number,
    tax: number,
    subtotal: number,
    total: number,
    pay_method: string,
    note: string,
    contact: string,
    state: string,
    order_type: string,
    items: Item[]
}

type Item = {
    id: string,
    quantity: number,
    total_price: number,
    options: string | null,
}

export type Order_Read = {
    id: number,
    user_id: number,
    tax: number,
    subtotal: number,
    total: number,
    pay_method: string,
    note: string,
    contact: string,
    state: string,
    order_type: string,
    created_at: Timestamp,
    items: OrderItem[],
}
 
export type OrderItem = {
    id: number,
    product: {
        name: string,
        is_soldout: boolean,
        price: number,
        image_url: string,
        options: string | null,
    },
    total_price: number,
    quantity: number,
}