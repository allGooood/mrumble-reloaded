'use client';
import CartBarItem from '@/components/cart/CartBarItem'
import React, { useEffect } from 'react'
import useCartStore from '../stores/useCartStore'
import Button from '@/components/Button';
import Wrapper from '@/components/wrapper/Wrapper';
import useCartModal from '../stores/useCartModal';

const Page = () => {
    const {carts} = useCartStore();
    const cartModal = useCartModal();

    const baseDiv = "border border-gray-400 rounded-2xl p-[30px]";
    const baseTitle = "text-4xl font-semibold";
    const baseHr = "my-[20px] border-gray-300";
    const baseInput = "border border-gray-400 rounded-xl w-full";

    useEffect(() => {
        if(cartModal.isOpen){
            cartModal.close();
        }
    }, [cartModal])

  return (
    <Wrapper>
        <div className="flex flex-row gap-10">
            <div className={`${baseDiv}
                            w-[90vw]
            `}>
                <span className={baseTitle}>My Bag</span>
                <hr className={baseHr}/>
                <div>
                    <p className="text-xl">Ordering for someone special? Add a personal note to go on the box.</p>
                    <div className="mt-[15px] relative">
                        <textarea className={`${baseInput}
                                            focus:border-black 
                                            focus:border-2 
                                            focus:outline-none
                                            text-xl
                                            h-[50px]
                                            p-[10px]
                                            overflow-hidden
                        `} placeholder="Add a note (optional)"
                        maxLength={150} />
                        <p className="absolute bottom-3 right-2 text-sm">150</p>
                    </div>
                </div>
                <nav className="w-full mt-[20px] overflow-y-auto">
                    <ul className="flex flex-col gap-y-3">
                        {carts.map(cart => (
                            <CartBarItem key={cart.id} item={cart} />
                        ))}
                    </ul>
                </nav>
            </div>

            <div className={`${baseDiv} h-fit`}>
                <div className="flex flex-col gap-5 text-lg">
                    <span className={baseTitle}>Order Details</span>
                    <div>
                        <div className="flex flex-row justify-between">
                            <span>Subtotal</span>
                            <span>$97.51</span>
                        </div>
                        <div className="flex flex-row justify-between text-gray-400">
                            <span>Sales Tax (11.99%)</span>
                            <span>$9.90</span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between font-semibold text-xl">
                        <span>Total</span>
                        <span>$122.04</span>
                    </div>
                </div>
                <hr className={baseHr}/>
                <div className="flex flex-col gap-5">
                    <span className={baseTitle}>Payment</span>
                    <div className="flex flex-row items-center relative text-xl text-gray-300">
                        <div className={`${baseInput} p-[20px]`}>
                            <p></p>
                            <p>카드 번호</p>
                        </div>
                        <span className="absolute right-7">MM/YY</span>
                    </div>
                    <span className="text-gray-500 italic">
                        By proceeding you agree to our <span className="underline cursor-pointer">Terms and Conditions</span> and confirm you have read and understand our <span className="underline cursor-pointer"> Privacy policy</span>
                    </span>
                    <Button className="text-xl font-medium py-[15px] mt-[20px]">Place order</Button>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Page
