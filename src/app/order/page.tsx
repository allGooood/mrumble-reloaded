'use client';

import Products from "@/components/order/Products";
import Wrapper from "@/components/wrapper/Wrapper";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import ProductDetail from "@/components/order/ProductDetail";

interface ProductGroupProps{
    category: string,
    items: ProductProps[]
}

interface ProductProps{
    id: number,
    category: string,
    productName: string,
    stock: number,
    price: string,
    discountPercentage?: string,
    imageUrl?: string,
    description?: string,
    sku: string
}

function Page() {
    const [products, setProducts] = useState<ProductGroupProps[]>([]);

    // const searchParams = useSearchParams();
    // const productId = searchParams.get('productId');

    useEffect(() => {
        axios.get('http://localhost:4000/products')
        .then((res) => {
            const data = res.data;
            // console.log(data);
            const categoryKeys = Object.keys(data).filter(key => 
                Array.isArray(data[key])
            );
            const sorted: ProductGroupProps[] = categoryKeys.map(category => ({
                category,
                items: data[category].map((item: any): ProductProps => ({
                    id: item.id,
                    category: item.category,
                    productName: item.product_name,
                    stock: item.stock,
                    price: item.price,
                    discountPercentage: item.discount_perentage ?? undefined,
                    imageUrl: item.image_url ?? undefined,
                    description: item.description ?? undefined,
                    sku: item.sku,
                }))
            }));

            // console.log(sorted);
            setProducts(sorted);
        })
        .catch((err) => console.error(err))
    }, []);

    return (
        <>
            <Wrapper>
                <div className="flex flex-col">
                    {products.map((products => 
                        <Products 
                            key={products.category} 
                            category={products.category}
                            products={products.items}
                        />
                    ))}

                    {/* {productId && (
                        <ProductDetail />
                    )} */}
                </div>
            </Wrapper>
        </>
    );
}

export default Page;