'use client';

import React, { useCallback, useEffect, useState } from 'react';
import QuantitySelectorOld from '../QuantitySelectorOld';
import Image from 'next/image';
import { CookieProps } from '@/app/types/Cookie';
import { QuantitySelectorProvider, useQuantitySelectorContext } from '@/app/context/QuantitySelectorContext';
import QuantitySelector from '../QuantitySelector';


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

    const idStr = JSON.stringify(id);

    const minimum = 0;
    const maximum = 10;
    const value = context?.getQuantity(idStr) ?? 0;
    const isSelected = value > 0;
    const plusDisabled = totalSelected >= requiredOptionCount;
    const minusDisabled = totalSelected >= requiredOptionCount && !isSelected;

    const onPlus = () => {
        if (value <= maximum) {
            context?.setQuantity(idStr, value + 1);
        }
    }

    const onMinus = () => {
        if (value >= minimum) {
            context?.setQuantity(idStr, value - 1);
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
                    plusDisabled={plusDisabled}
                    minusDisabled={minusDisabled}
                />
            </div>
        </div>
    );
}

export default CookieSelectCard;