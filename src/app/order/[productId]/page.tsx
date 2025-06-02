'use client';

import Wrapper from '@/components/wrapper/Wrapper';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import QuantitySelector from '@/components/QuantitySelector';
import axios from 'axios';
import { IMAGE_PATH } from '@/app/utils/constants';
import SoldOutImage from '@/components/SoldOutImage';
import ProductDetail from '@/components/order/ProductDetail';
import CookieSelect from '@/components/order/CookieSelect';
import CookieSelectTable from '@/components/order/CookieSelectTable';
import Button from '@/components/Button';
import SwitchToggle from '@/components/SwitchToggle';

interface ProductProps{
    id: number,
    category: string,
    product_name: string,
    stock: number,
    price: string,
    discount_percentage?: string,
    image_url?: string,
    description?: string,
    sku: string,
    has_option: boolean,
}

interface CookieProps{
    id: number,
    cookie_name: string,
    sku: string,
    stock: number,
    extra_charge: string,
    calories: string,
    image_url?: string,
    category: string,
}


function Page() {
    const [product, setProduct] = useState<ProductProps>();
    const [cookies, setCookies] = useState<CookieProps[]>([]);

    const useParms = useParams();
    const productId = useParms?.productId;

    const isSoldOut = product?.stock === 0;

    useEffect(() => {
        axios.get(`http://localhost:4000/products/${productId}`)
        .then((res) => {
            const product = res.data[0];
            setProduct(product);

            // console.log(product);
            console.log(product.has_option);

            if(product?.has_option){
                axios.get('http://localhost:4000/cookies')
                .then((res) => {
                    const cookies = res.data;
                    setCookies(cookies);
                    console.log(cookies);
                });
            }
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
                    <div className="pt-[20px] 
                                    w-full
                    ">
                        <p className="md:font-extrabold
                                    md:text-5xl
                                    font-medium
                                    text-2xl
                        ">
                            Select 4 Flavors
                        </p>
                        <div className="mt-[5px]
                                        mb-[20px]
                                        inline-flex
                        " />
                        
                        {/** 바뀌는 부분 */}
                        {/* <CookieSelectTable cookies={cookies} /> */}
                        <div className="flex flex-col">
                            {cookies.map(cookie => (
                                <CookieSelect key={cookie.id}
                                                {...cookie}
                                />
                            ))}
                        </div>
                        <div className="flex flex-row justify-end pt-[50px]">
                            {/** Switch Toggle 미완성 */}
                            {/* <SwitchToggle /> */}
                            <div className="h-[50px]">
                                <Button variant="primary"
                                        className="text-[18px]
                                                    font-normal
                                                    py-[15px]
                                                    h-full
                                                    w-[300px]
                                                    px-[30px]
                                                    flex
                                                    flex-row
                                                    justify-between
                                                    items-center"
                                >
                                    <p>Add 1 more</p>
                                    <p>$ 4.69</p>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );

    // return (
    //     <>
    //         <Wrapper>
    //             <div className="flex
    //                             flex-col
    //                             xl:flex-row
    //                             xl:justify-center   
    //                             pt-[20px]
    //                             xl:px-[100px]
    //             ">
    //                 <div className="2xl:mr-[100px] 
    //                                 xl:mr-[50px]
    //                                 h-[400px]
    //                                 xl:h-full
                                    
    //                 ">
    //                     <div className="bg-[#FFB9CD]
    //                                     h-full
    //                                     xl:w-[720px]
    //                                     xl:h-[720px]
    //                                     rounded-2xl
    //                                     relative
    //                                     overflow-hidden
    //                     ">   
    //                         <Image className="object-contain"
    //                             src={IMAGE_PATH + product?.image_url} alt="" fill/>
    //                         {isSoldOut && <SoldOutImage />}
    //                     </div>
    //                 </div>
    //                 <div className="pt-[20px]
    //                 ">
    //                     <p className="md:font-extrabold
    //                                 md:text-6xl
    //                                 font-medium
    //                                 text-2xl
    //                     ">
    //                         {product?.product_name}
    //                     </p>
    //                     <div className="mt-[5px]
    //                                     mb-[20px]
    //                                     inline-flex
    //                     ">
    //                         <p className={`${isSoldOut? "line-through" : "normal-case"} 
    //                                         flex 
    //                                         items-center
    //                         `}>
    //                             ${product?.price}
    //                         </p>
            
    //                         {isSoldOut && (
    //                             <p className="text-xl pl-[10px]">Sold Out</p>
    //                         )}

    //                     </div>
    //                     <p>{product?.description}</p>
    //                     <div className="mt-[20px]
    //                                     justify-between
    //                                     flex
    //                                     gap-5
    //                                     h-[45px]
    //                     ">
    //                         {!isSoldOut && (
    //                             <>
    //                                 <QuantitySelector />
    //                                 <button className="bg-black
    //                                                     cursor-pointer
    //                                                     text-white
    //                                                     text-[18px]
    //                                                     font-medium
    //                                                     py-[15px]
    //                                                     px-[70px]
    //                                                     2xl:px-[90px]
    //                                                     rounded-full
    //                                                     h-full
    //                                                     whitespace-nowrap
    //                                                     flex
    //                                                     items-center
    //                                 "
    //                                     onClick={() => {}}>
    //                                         Add to Bag
    //                                 </button>
    //                             </>
    //                         )}
    //                     </div>
    //                 </div>
    //             </div>
    //         </Wrapper>
    //     </>
    // );
}

export default Page;