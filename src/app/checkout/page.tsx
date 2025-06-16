'use client';
import CartBarItem from '@/components/cart/CartBarItem'
import React, { useEffect, useState } from 'react'
import useCartStore from '../stores/useCartStore'
import Button from '@/components/Button';
import Wrapper from '@/components/wrapper/Wrapper';
import useCartModal from '../stores/useCartModal';
import LoadingOverlay from '@/components/auth/LoadingOverlay';
import axios from 'axios';
import ToasterProvider from '../libs/ToasterProvider';
import toast from 'react-hot-toast';
import { TOAST_ERROR } from '../utils/constants';
import { useMenuNavigation } from '../hooks/UseMenuNavigation';

const Page = () => {
    const {carts, subtotal} = useCartStore();
    const cartModal = useCartModal();
    const [total, setTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [isLoading, setLoading] = useState(false);
    const {goHome} = useMenuNavigation();
    const [note, setNote] = useState("");

    const MAX_LENGTH = 150;
    const [textLength, setTextLength] = useState(MAX_LENGTH);

    const baseDiv = "border border-gray-400 rounded-2xl p-[30px]";
    const baseTitle = "text-4xl font-semibold";
    const baseHr = "my-[20px] border-gray-300";
    const baseInput = "border border-gray-400 rounded-xl w-full";

    useEffect(() => {
        if(cartModal.isOpen){
            cartModal.close();
        }
    }, [cartModal])

    useEffect(() => {
        const TAX_RATE = 0.12;
        const numericSubtotal = Number(subtotal);

        const tax = Number((numericSubtotal * TAX_RATE).toFixed(2));
        const total = Number((numericSubtotal + tax).toFixed(2));

        setTax(tax);
        setTotal(total);
    }, [subtotal]);

    const placeOrder = async() => {
        setLoading(true);

        const userId = 11;

        try{
            const items = carts.map(item => ({
                id: item.product.id,
                quantity: item.quantity,
                total_price: item.total_price,
                options: item.product.options,
            }));

            const order = {
                user_id: userId,
                tax: tax,
                subtotal: subtotal,
                total: total,
                pay_method: "CARD",
                note: note,
                contact: "01012341234",
                state: "ORDERED",
                order_type: "PICK_UP",
                items: items,
            };

            await axios.post("http://localhost:4000/orders", order);

            alert("Your order has successfully been sent!");
            goHome();

        }catch(err){
            console.log(err);
            toast.error(TOAST_ERROR);
        }finally{
            setLoading(false);
        }
    }

    const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setNote(value);
        setTextLength(MAX_LENGTH - value.length);
    }

  return (
    <Wrapper>
        {isLoading && <LoadingOverlay />}
        <ToasterProvider />
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
                        `} 
                        placeholder="Add a note (optional)"
                        onChange={ handleTextArea }
                        maxLength={MAX_LENGTH} />
                        <p className="absolute bottom-3 right-2 text-sm">{textLength}</p>
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
                            <span>${subtotal}</span>
                        </div>
                        <div className="flex flex-row justify-between text-gray-400">
                            <span>Sales Tax (12%)</span>
                            <span>${tax}</span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between font-semibold text-xl">
                        <span className="bg-[#FFB9CD] px-[5px]">Total</span>
                        <span>${total}</span>
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
                    <Button className="text-xl font-medium py-[15px] mt-[20px]"
                            onClick={placeOrder}>
                        Place order
                    </Button>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Page
