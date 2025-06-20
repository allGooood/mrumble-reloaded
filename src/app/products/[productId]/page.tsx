'use client';

import Wrapper from '@/components/wrapper/Wrapper';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IMAGE_PATH } from '@/app/utils/constants';
import SoldOutImage from '@/components/SoldOutImage';
import Image from 'next/image';
import CookieSelectTable from '@/components/order/CookieSelectTable';
import ProductDetailView from '@/components/order/view/ProductDetailView';
import ProductSelectView from '@/components/order/view/ProductSelectView';
import { QuantitySelectorProvider } from '@/app/context/QuantitySelectorContext';
import { Product } from '@/app/types/Product';

function Page() {
    const [product, setProduct] = useState<Product>();

    const useParms = useParams();
    const productId = useParms?.productId;

    const isSoldOut = product?.stock === 0;

    useEffect(() => {
        axios.get(`http://localhost:4000/products/${productId}`)
        .then((res) => {
            const product = res.data[0];
            setProduct(product);
        });
    }, [productId]);

    return (
        <>
            <Wrapper>
                <div className="flex flex-col xl:flex-row xl:justify-center pt-[20px] xl:px-[100px]">
                    
                    <div className="2xl:mr-[100px] xl:mr-[50px] h-[400px] xl:h-full">
                        <div className="bg-[#FFB9CD] h-full xl:w-[720px] xl:h-[720px] rounded-2xl relative overflow-hidden">   
                    
                            <Image className="object-contain"
                                src={IMAGE_PATH + product?.image_url} alt="" fill/>
                            {isSoldOut && <SoldOutImage />}

                        </div>
                    </div>

                    {product?.has_option ? 
                        <ProductSelectView requiredOptionCount={product.required_option_count}>
                            <QuantitySelectorProvider>
                                <CookieSelectTable 
                                    requiredOptionCount={product.required_option_count}
                                    price={product.price}
                                    product={product}/>
                            </QuantitySelectorProvider>
                        </ProductSelectView>
                        : <ProductDetailView product={product} isSoldOut={isSoldOut} />
                    }
                </div>
            </Wrapper>
        </>
    );
}

export default Page;