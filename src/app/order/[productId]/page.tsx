'use client';

import Wrapper from '@/components/wrapper/Wrapper';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import QuantitySelector from '@/components/QuantitySelector';
import axios from 'axios';
import { IMAGE_PATH } from '@/util/constants';
import SoldOutImage from '@/components/SoldOutImage';

interface ProductProps{
    id: number,
    category: string,
    product_name: string,
    stock: number,
    price: string,
    discount_percentage?: string,
    image_url?: string,
    description?: string,
    sku: string
}

function Page() {
    const [product, setProduct] = useState<ProductProps>();

    const useParms = useParams();
    const productId = useParms?.productId;

    const isSoldOut = product?.stock === 0;

    useEffect(() => {
        axios.get(`http://localhost:4000/products/${productId}`)
        .then((res) => {
            const data = res.data[0];
            setProduct(data);
            console.log(data);
        });
    }, [productId]);

    return (
        <>
            <Wrapper>
                <div className="flex
                                flex-col
                                xl:flex-row
                                xl:justify-center   
                                pt-[20px]
                                xl:px-[100px]
                ">
                    <div className="2xl:mr-[100px] 
                                    xl:mr-[50px]
                                    h-[400px]
                                    xl:h-full
                                    
                    ">
                        <div className="bg-[#FFB9CD]
                                        h-full
                                        xl:w-[720px]
                                        xl:h-[720px]
                                        rounded-2xl
                                        relative
                                        overflow-hidden
                        ">   
                            <Image className="object-contain"
                                src={IMAGE_PATH + product?.image_url} alt="" fill/>
                            {isSoldOut && <SoldOutImage />}
                        </div>
                    </div>
                    <div className="
                                    pt-[20px]
                    ">
                        <p className="md:font-extrabold
                                    md:text-6xl
                                    font-medium
                                    text-2xl
                        ">
                            {product?.product_name}
                        </p>
                        <div className="mt-[5px]
                                        mb-[20px]
                                        inline-flex
                        ">
                            <p className={`${isSoldOut? "line-through" : "normal-case"} 
                                            flex 
                                            items-center
                            `}>
                                ${product?.price}
                            </p>
            
                            {isSoldOut && (
                                <p className="text-xl pl-[10px]">Sold Out</p>
                            )}

                        </div>
                        <p>{product?.description}</p>
                        <div className="mt-[20px]
                                        justify-between
                                        flex
                                        gap-5
                                        h-[45px]
                        ">
                            {!isSoldOut && (
                                <>
                                    <QuantitySelector />
                                    <button className="bg-black
                                                        cursor-pointer
                                                        text-white
                                                        text-[18px]
                                                        font-medium
                                                        py-[15px]
                                                        px-[70px]
                                                        2xl:px-[90px]
                                                        rounded-full
                                                        h-full
                                                        whitespace-nowrap
                                                        flex
                                                        items-center
                                    "
                                        onClick={() => {}}>
                                            Add to Bag
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
}

export default Page;