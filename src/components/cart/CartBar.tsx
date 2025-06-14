'use client';

import React, { useEffect } from 'react'
import Button from '../Button'
import useCartStore from '@/app/stores/useCartStore';
import { LuCircleX } from 'react-icons/lu';
import QuantitySelector from '../QuantitySelector';

const CartBar = () => {
    const cart = useCartStore();

    useEffect(() => {
        document.body.style.overflow = cart.isOpen ? "hidden" : "";
    }, [cart.isOpen]);

    if(!cart.isOpen) return null;

  return (
    <div>
        {/** Over Lay */}
        <div className="fixed inset-0 h-screen bg-gray-500 opacity-50 z-10"
            onClick={cart.close} 
        />

        {/** Menu Bar */}
        <div className="bg-white
                        w-[25vw]
                        z-15
                        fixed
                        top-0 
                        right-0
                        h-screen
                        rounded-tl-3xl
                        rounded-bl-3xl
                        p-8
                        transition-all
                        duration-300
                        transform
                        translate-x-0
        ">
            <div className="flex
                            flex-row
                            justify-between
                            items-center
            ">
                <div className="transition-colors
                            duration-100
                            hover:text-[#FFB9CD]
                            cursor-pointer
                            text-5xl
                            font-extrabold"
                >
                    My Bag
                </div>
                <LuCircleX onClick={cart.close} size={40} className="cursor-pointer" />
            </div>
            <nav className="h-[80vh]
                            mt-[30px]
            ">
                <ul className="flex
                                flex-col
                                gap-y-3
                ">
                    <li className="flex flex-row border-b border-gray-400 pb-[10px]">
                        <div className="bg-[#FFB9CD] w-[90px] h-[90px] rounded-lg"></div>
                        <div className="pl-[10px]">
                            <div className="flex flex-row justify-between h-[60px] mb-[10px]">
                                <div>
                                    <p className="font-medium">12-Pack</p>
                                    <p className="text-sm font-normal">$12.99</p>
                                </div>
                                <QuantitySelector value={0} />
                            </div>
                            <div className="text-gray-400 text-sm font-normal">
                                <p>Milk Chocolate Chip Cookie</p>
                                <p>1 Peanut Butter Cup Brownie ft. REESE’S (+$1.49 ea.)</p>
                                <p>Milk Chocolate Chip Cookie</p>
                                <p>Milk Chocolate Chip Cookie</p>
                                <p>Milk Chocolate Chip Cookie</p>
                            </div>
                        </div>
                    </li>

                </ul>
            </nav>

            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>$59.65</p>
            </div>
            <Button className="w-full py-[15px] mt-[10px]">Check Out</Button>
        </div>
    </div>
  )
}

export default CartBar