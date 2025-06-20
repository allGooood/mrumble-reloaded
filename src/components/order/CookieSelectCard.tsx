'use client';

import React, {  } from 'react';
import Image from 'next/image';
import { CookieProps } from '@/app/interface/Cookie';
import { useQuantitySelectorContext } from '@/app/context/QuantitySelectorContext';
import QuantitySelector from '../QuantitySelector';
import { CookieOption } from '@/app/types/CookieOption';


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
    totalSelected,
    onSelected,
}: CookieOption & { 
    requiredOptionCount: number; 
    totalSelected: number; 
    onSelected: (name: string, count: number) => void 
}) {

    const context = useQuantitySelectorContext();

    const idStr = JSON.stringify(id);

    const minimum = 0;
    const maximum = 10;
    const value = context?.getQuantity(idStr) ?? 0;
    const isSelected = value > 0;
    const disablePlus = totalSelected >= requiredOptionCount;
    const disableMinus = totalSelected >= requiredOptionCount && !isSelected;

    const onPlus = () => {
        if (value <= maximum) {
            const newValue = value + 1;
            context?.setQuantity(idStr, newValue);
            onSelected(cookie_name, newValue);
        }
    }

    const onMinus = () => {
        if (value >= minimum) {
            const newValue = value - 1;
            context?.setQuantity(idStr, newValue);
            onSelected(cookie_name, newValue);
        }
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
                    minimun={minimum}
                    onPlus={onPlus}
                    onMinus={onMinus}
                    value={value}
                    disablePlus={disablePlus}
                    disableMinus={disableMinus}
                />
            </div>
        </div>
    );
}

export default CookieSelectCard;