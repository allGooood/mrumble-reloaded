import React, { useEffect, useState } from 'react';
import CookieSelectCard from './CookieSelectCard';
import Button from '../Button';
import axios from 'axios';
import { CookieProps } from '@/app/interface/Cookie';
import { useQuantitySelectorContext } from '@/app/context/QuantitySelectorContext';
import { Product } from '@/app/types/Product';
import useUserStore from '@/app/stores/useUserStore';
import toast from 'react-hot-toast';
import ToasterProvider from '@/app/libs/ToasterProvider';
import { TOAST_ERROR } from '@/app/utils/constants';
import { CookieOption } from '@/app/types/CookieOption';
import useCartStore from '@/app/stores/useCartStore';

interface CookieSelectTableProps{
    requiredOptionCount: number,
    price: number
    product: Product
}

function CookieSelectTable({
    requiredOptionCount,
    price,
    product
}: CookieSelectTableProps
) {
    const [cookies, setCookies] = useState<CookieOption[]>([]);
    const { refreshCart } = useCartStore();

    const context = useQuantitySelectorContext();
    const totalSelected = context?.total ?? 0;
    const remainRequiredOptionCount = Math.max(0, requiredOptionCount - totalSelected);
    const totalPrice = price;
    
    useEffect(() => {
        axios.get('http://localhost:4000/cookies')
        .then((res) => {
            const cookies = res.data;
            setCookies(cookies);
        });
    }, []);
    

    const {user} = useUserStore();
    const [isLoading, setLoading] = useState(false);

    const addToCart = async() => {
        // if(!user){
        //     toast.error(TOAST_ERROR);
        // }

        const productId = JSON.stringify(product.id);
        const cartItem = {
            "user_id" : 11, 
            "product_id": productId, 
            "total_price": product.price, 
            "quantity": 1, 
            "options": context?.quantities,
        }

        setLoading(true);
        try {
            await axios.post('http://localhost:4000/carts', cartItem);
            toast.success("Successfully added to Cart !");
            await refreshCart();
        } catch (error) {
            toast.error(TOAST_ERROR);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <>
            <ToasterProvider />
            <div className="flex flex-col">
                {cookies.map(cookie => (
                    <CookieSelectCard key={cookie.id}
                                    {...cookie}
                                    requiredOptionCount={requiredOptionCount}
                                    totalSelected={totalSelected}
                    />
                ))}
            </div>
            <div className="flex flex-row justify-end pt-[50px]">
                {/* <SwitchToggle /> */}
                <div className="h-[50px]">
                    <Button className={`text-[18px]
                                        font-normal
                                        py-[15px]
                                        h-full
                                        w-[300px]
                                        px-[30px]
                                        flex
                                        flex-row
                                        justify-between
                                        items-center`}
                            disabled={remainRequiredOptionCount === 0 ? false : true}
                            onClick={addToCart}
                    >
                        <p>Add {remainRequiredOptionCount} more</p>
                        <p>$ {totalPrice}</p>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default CookieSelectTable;
