import React, { useEffect, useState } from 'react';
import CookieSelectCard from './CookieSelectCard';
import Button from '../Button';
import axios from 'axios';
import { CookieProps } from '@/app/interface/Cookie';
import { useQuantitySelectorContext } from '@/app/context/QuantitySelectorContext';
import { Product } from '@/app/types/Product';
import useUserStore from '@/app/stores/useUserStore';

interface CookieSelectTableProps{
    requiredOptionCount: number,
    price: string
    product: Product
}

function CookieSelectTable({
    requiredOptionCount,
    price,
    product
}: CookieSelectTableProps
) {
    const [cookies, setCookies] = useState<CookieProps[]>([]);

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
    const addToCart = async() => {
        console.log("addToCart");

        const userId = user?.id;

    if (!userId) {
        alert("로그인된 사용자 정보가 없습니다.");
        return;
    }
        console.log(user);
        const cartItem = {
            "user_id" : user?.id, 
            "product_id": product.id, 
            "total_price": "122", 
            "quantity": 2, 
            "options": null
        }

        const result = await axios.post('http://localhost:4000/carts', cartItem);
        //TODO: GET cart -> 카트 숫자 올리기(+버튼 애니메이션)
        if(result.data.rowCount === 1){
            alert("Added to cardt");
        }
    };
    
    return (
        <>
            <div className="flex flex-col">
                {cookies.map(cookie => (
                    // <CookieSelectCard key={cookie.id} {...cookie} />
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
                    <Button className="text-[18px]
                                        font-normal
                                        py-[15px]
                                        h-full
                                        w-[300px]
                                        px-[30px]
                                        flex
                                        flex-row
                                        justify-between
                                        items-center"
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
