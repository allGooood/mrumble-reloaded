'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { IMAGE_PATH } from '@/app/utils/constants';
import SoldOutImage from '../SoldOutImage';

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

function ProductCard({
        id, 
        category, 
        productName, 
        stock, 
        price, 
        discountPercentage, 
        imageUrl, 
        description, 
        sku,
        hasOption}: ProductProps) {

    const router = useRouter();

    const isSoldOut = stock === 0;

    const goDetail = (id : number) => {
        // router.push(`/order?productId=${id}`);
        router.push(`/products/${id}`);
    };

    return (
        <div className="cursor-pointer"
            onClick={() => goDetail(id)}>
            <div className="relative 
                            rounded
                            w-[100px]
                            h-[100px]
                            md:h-[273px]
                            md:w-full
                            md:rounded-xl
                            md:mb-[15px]
                            overflow-hidden
            ">
                {imageUrl && (
                    <Image className="object-cover" 
                        src={IMAGE_PATH + imageUrl} alt="" fill/>
                )}
                {isSoldOut && (<SoldOutImage />)}
            </div>
            <div>
                {discountPercentage && (
                    <span className="inline-flex italic h-[21px] items-center">
                        <span className="bg-[#FFE6E5] 
                                        py-1.5 
                                        px-[5px] 
                                        h-[21px] 
                                        flex 
                                        items-center">
                            <p className="text-[13px] leading-[15px] 2xl:text-[13px] 2xl:leading-[16px]">Save {discountPercentage}%</p>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="21" fill="none" viewBox="0 0 9 21" className="text-primary-light -ml-[1px]"><path fill="#FFE6E5" d="M7.826 0H0v21h7.953a1 1 0 0 0 .789-1.615L1.429 10l7.156-8.35A1 1 0 0 0 7.825 0"></path></svg>
                    </span>
                )}
                <p className="text-[24px]
                            font-medium
                            leading-[30px]
                            2xl:text-[28px]
                            2xl:leading-[32px]
                ">
                    {productName}
                </p>
                <div className="font-light
                                flex
                                gap-2
                                text-[16px]
                                leading-[20px]
                                2xl:text-[18px]
                                2xl:leading-[22px]
                ">
                    <p className={`${isSoldOut? "line-through" : ""} `}>
                        ${price}
                    </p>

                    {isSoldOut && (
                        <p>Sold Out</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;