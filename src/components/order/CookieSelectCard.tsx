'use client';

import React, { useCallback } from 'react';
import QuantitySelector from '../QuantitySelector';
import Image from 'next/image';
import { CookieProps } from '@/app/types/Cookie';
import { QuantitySelectorProvider, useQuantitySelectorContext } from '@/app/context/QuantitySelectorContext';


function CookieSelectCard({
    id,
    cookie_name,
    sku,
    stock,
    extra_charge,
    calories,
    image_url,
    category,
    requiredOptionCount,
    totalSelected
}: CookieProps & { requiredOptionCount: number; totalSelected: number }) {

    const context = useQuantitySelectorContext();
    const isSelected = (context?.getQuantity(JSON.stringify(id)) ?? 0) > 0;
    const isDisabled = totalSelected >= requiredOptionCount && !isSelected;
    const disableIncrement = totalSelected >= requiredOptionCount && isSelected;

    const handleChange = (count: number) => {
        context?.setQuantity(JSON.stringify(id), count);
    };

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

            <div className="h-[40px]">
                <QuantitySelector 
                    minimum={0}
                    onChange={handleChange}
                    isDisabled={isDisabled}
                    disableIncrement={disableIncrement} />
            </div>
        </div>
    );
}

export default CookieSelectCard;