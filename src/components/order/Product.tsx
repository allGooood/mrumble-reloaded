import React from 'react';
import Image from 'next/image';

function Product() {
    return (
        <div>
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
                <Image className="object-cover" 
                    src="/order/1pack.jpg" alt="" fill/>
            </div>
            <div>
                <span className="inline-flex italic h-[21px] items-center">
                    <span className="bg-[#FFE6E5] py-1.5 px-[5px] h-[21px]">
                        <p className="text-[13px] leading-[15px] 2xl:text-[14px] 2xl:leading-[16px]">Save 6%</p>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="21" fill="none" viewBox="0 0 9 21" className="text-primary-light -ml-[1px]"><path fill="currentColor" d="M7.826 0H0v21h7.953a1 1 0 0 0 .789-1.615L1.429 10l7.156-8.35A1 1 0 0 0 7.825 0"></path></svg>
                </span>
                <p className="text-[24px]
                            font-bold
                            leading-[30px]
                            2xl:text-[28px]
                            2xl:leading-[32px]
                ">
                    Single
                </p>
                <p className="text-[16px]
                            leading-[20px]
                            2xl:text-[18px]
                            2xl:leading-[22px]
                ">
                    $3.99
                </p>
            </div>
        </div>
    );
}

export default Product;