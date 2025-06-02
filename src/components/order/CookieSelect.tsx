'use client';

import React from 'react';
import QuantitySelector from '../QuantitySelector';
import Image from 'next/image';

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


function CookieSelect({id,
                    cookie_name,
                    sku,
                    stock,
                    extra_charge,
                    calories,
                    image_url,
                    category}:CookieProps) {
    return (
        <div className="flex
                        justify-between
                        border-b-1
                        border-gray-200
                        py-[10px]
                        ">
            <div className="flex flex-row">
                <div className="w-[50px]
                                h-[50px]
                                relative">
                    <Image className="object-cover"
                        src={"/cookies/" + image_url} alt="" fill />
                </div>
                <div className="ml-[10px] flex flex-col justify-center">
                    <p className="font-semibold leading-[20px]">{cookie_name}</p>
                    <p className="leading-[16px] text-gray-500 text-sm">{calories} cal</p>
                </div>
            </div>
            {/** TODO Component 컨테이너 사이즈 유연하게 수정필요? */}
            <div className="h-[40px]">
                <QuantitySelector minimum={0} />
            </div>
        </div>
    );
}

export default CookieSelect;