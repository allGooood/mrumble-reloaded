import React, { JSX, useState } from 'react'
import QuantitySelector from '../QuantitySelector'
import { Cart } from '@/app/types/Cart'
import Image from 'next/image';
import axios from 'axios';
import toast from 'react-hot-toast';
import { TOAST_ERROR } from '@/app/utils/constants';
import useCartStore from '@/app/stores/useCartStore';
import useUserStore from '@/app/stores/useUserStore';

interface CartBarItemProps {
    item: Cart;
    useQuantitySelector?: boolean;
}

const CartBarItem = ({
    item, 
    useQuantitySelector = false
}:CartBarItemProps) => {
    const {refreshCart} = useCartStore();
    const {user} = useUserStore();

    const printOptions = (options: string | null): JSX.Element[] | null => {
        if (!options) return null;
      
        try {
          const parsed = JSON.parse(options) as { [key: string]: number };
          return Object.entries(parsed).map(([name, count], idx) => (
            <p key={idx}>{count} {name}</p>
          ));
        } catch (error) {
          console.error("Invalid JSON options:", options);
          return null;
        }
      };


    const handleQuantityChange = async(newQty: number) => {
        if(newQty < 1) return;
        if(!user?.id) return;

        setEachQuantity(newQty);
        try{
            await axios.put("http://localhost:4000/carts", {
                user_id : item.user_id,
                product_id: item.product.id,
                quantity: newQty,
                new_total_price: (item.product.price * newQty).toFixed(2),
                options: item.product.options,
            });

            await refreshCart(user.id);

        }catch (error) {
            console.error(error);
            toast.error(TOAST_ERROR);
        }
    };

    // const eachQuantity = item.quantity;
    const [eachQuantity, setEachQuantity] = useState(item.quantity);

  return (
    <>
        <li className="flex flex-row pb-[15px] last:border-b-0">
            <div className="relative bg-[#FFB9CD] overflow-hidden w-[90px] h-[90px] rounded-lg shrink-0">
                <Image className="object-cover" alt="cartItem" src={`/order/${item.product.image_url}`} fill />
            </div>
            <div className="pl-[10px] w-full">
                <div className="flex flex-row justify-between h-[50px] mb-[15px]">
                    <div>
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm font-normal">${item.total_price}</p>
                    </div>

                    {!useQuantitySelector ? 
                        (<div className="text-lg font-medium pr-[10px]">
                            <span>Qty: {eachQuantity}</span>
                        </div>) : 
                        
                        (<QuantitySelector 
                            onPlus={() => handleQuantityChange(eachQuantity+1)} 
                            onMinus={() => handleQuantityChange(eachQuantity-1)}
                            value={eachQuantity} />)
                    }

                </div>
                <div className="text-gray-400 text-sm font-normal">
                    {printOptions(item.product.options)}
                </div>
            </div>
        </li>
    </>
  )
}

export default CartBarItem