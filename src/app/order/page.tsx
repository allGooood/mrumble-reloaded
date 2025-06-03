'use client';

import Wrapper from "@/components/wrapper/Wrapper";
import { useEffect, useState } from "react";
import axios from 'axios';
import ProductListView from "@/components/order/view/ProductListView";

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
    sku: string,
    hasOption: boolean,
}


function Page() {
    const [products, setProducts] = useState<ProductGroupProps[]>([]);
    
    const categoryOrder = [
        "Large Desserts",
        "Mini Desserts",
        "Extras",
        "Gift Cards",
        "Family Desserts"
    ];

    // const searchParams = useSearchParams();
    // const productId = searchParams.get('productId');

    useEffect(() => {
        axios.get('http://localhost:4000/products')
        .then((res) => {
            const data = res.data;

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
                    hasOption: item.has_option
                }))
            }));

            setProducts(sorted);
            console.log(sorted);
        })
        .catch((err) => console.error(err))
    }, []);

    return (
        <>
            <Wrapper>
                <div className="flex flex-col">
                    {categoryOrder.map((category) => {
                        const row = products.find(p => p.category===category);
                        if(!row || !row.items?.length) return null;

                        return <ProductListView
                                key={category}
                                category={category}
                                products={row.items} 
                        />
                    })}
                </div>
            </Wrapper>
        </>
    );
}

export default Page;