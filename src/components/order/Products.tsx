import React from 'react';
import Image from 'next/image';
import Product from './Product';

interface ProductGroup{
    category: string,
    products: ProductProps[]
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

function Products({category, products}: ProductGroup) {
    return (
        <div className="w-full
                        mb-8
                        md:mb-16
        ">
            {/** Title */}
            <div className="text-[34px]
                            leading-[40px]
                            lg:text-[46px]
                            lg:leading-[46px]
                            2xl:text-[50px]
                            2xl:leading-[65px]
                            font-extrabold py-4
            ">
                {category}
            </div>
            
            <div className="grid 
                            grid-cols-1 
                            divide-y 
                            2xl:grid-cols-4
                            lg:grid-cols-3
                            md:grid-cols-2
                            md:divide-y-0
                            md:gap-9
            ">
                {products.map((product => 
                    <Product 
                        key={product.id}
                        id={product.id}
                        category={product.category}
                        productName={product.productName}
                        stock={product.stock}
                        price={product.price}
                        discountPercentage={product.discountPercentage}
                        imageUrl={product.imageUrl}
                        description={product.description}
                        sku={product.sku}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;