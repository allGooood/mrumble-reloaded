'use client';

import Wrapper from '@/components/wrapper/Wrapper';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import QuantitySelector from '@/components/QuantitySelector';

function Page() {
    const searchParams = useSearchParams();
    const search = searchParams.get('productid');

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
                                src="/order/cookie_cutter.jpg" alt="" fill/>
                        </div>
                    </div>
                    <div className="
                                    pt-[20px]
                    ">
                        <p className="md:font-extrabold
                                    md:text-6xl
                                    font-medium
                                    text-2xl
                        ">Cookie Cutter</p>
                        <div className="mt-[5px]
                                        mb-[20px]
                        ">
                            <p>$4.99</p>
                            {/** Sold out 표시 */}
                        </div>
                        <p>The perfect tool for cutting your cookies. Effortlessly watch as the Cookie Cutter divides your treat into four to share with your friends and family.</p>
                        <div className="mt-[20px]
                                        justify-between
                                        flex
                                        gap-5
                                        h-[45px]
                        ">
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
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
}

export default Page;