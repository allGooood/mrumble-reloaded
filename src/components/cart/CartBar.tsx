'use client';

import React, { useEffect, useState } from 'react'
import Button from '../Button'
import useCartModal from '@/app/stores/useCartModal';
import { LuCircleX } from 'react-icons/lu';
import useUserStore from '@/app/stores/useUserStore';
import CartBarItem from './CartBarItem';
import useCartStore from '@/app/stores/useCartStore';

const CartBar = () => {
    const cartModal = useCartModal();
    const {user} = useUserStore();
    const {carts, refreshCart, setQuantity, subtotal} = useCartStore();

    useEffect(() => {
        refreshCart();
    },[user?.id, setQuantity]);

    useEffect(() => {
        document.body.style.overflow = cartModal.isOpen ? "hidden" : "";
    }, [cartModal.isOpen]);

    if(!cartModal.isOpen) return null;

  return (
    <div>
        {/** Over Lay */}
        <div className="fixed inset-0 h-screen bg-gray-500 opacity-50 z-10"
            onClick={cartModal.close} 
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
                <div className="text-5xl font-extrabold">
                    My Bag
                </div>
                <LuCircleX onClick={cartModal.close} size={40} className="cursor-pointer" />
            </div>
            <nav className="h-[80vh]
                            mt-[30px]
                            overflow-y-auto
            ">
                <ul className="flex
                                flex-col
                                gap-y-3
                ">
                    {/* {carts.length === 0 ? "No Items" : carts.map(cart => (
                        <CartBarItem key={cart.id} item={cart} onQuantityChange={refreshCart} />
                    ))} */}
                    {carts.map(cart => (
                        <CartBarItem key={cart.id} item={cart} />
                    ))}
                </ul>
            </nav>

            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${subtotal}</p>
            </div>
            <Button className="w-full py-[15px] mt-[10px]">Check Out</Button>
        </div>
    </div>
  )
}

export default CartBar