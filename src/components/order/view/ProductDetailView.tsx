import React, { useState } from 'react';
import Button from '../../Button';
import ToasterProvider from '@/app/libs/ToasterProvider';
import { TOAST_ERROR } from '@/app/utils/constants';
import toast from 'react-hot-toast';
import axios from 'axios';
import QuantitySelector from '@/components/QuantitySelector';
import { Product } from '@/app/types/Product';
import LoadingOverlay from '@/components/auth/LoadingOverlay';
import useCartStore from '@/app/stores/useCartStore';
import useUserStore from '@/app/stores/useUserStore';

interface ProductDetailViewProps{
    product?: Product;
    isSoldOut : boolean;
}

function ProductDetailView({product
    , isSoldOut
}:ProductDetailViewProps) {
    const [isLoading, setLoading] = useState(false);
    const [value, setValue] = useState(1);
    const { refreshCart } = useCartStore();
    const {user} = useUserStore();

    const onPlus = () => {
        setValue(prev => prev + 1);
    };

    const onMinus = () => {
        setValue(prev => prev - 1);
    };


    const addCart = async() => {
        if(!product){
            toast.error("Product is Null");
            return;
        }

        if(!user?.id) return;

        const productId = JSON.stringify(product.id);
        const cartItem = {
            "user_id" : user?.id, 
            "product_id": productId, 
            "total_price": value * product.price, 
            "quantity": value, 
        }

        setLoading(true);
        try {
            await axios.post('http://localhost:4000/carts', cartItem);
            toast.success("Successfully added to Cart !");
            await refreshCart(user.id);
        } catch (error) {
            toast.error(TOAST_ERROR);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-[20px]">
            {isLoading && <LoadingOverlay />}
            <ToasterProvider />
            <p className="md:font-extrabold md:text-6xl font-medium text-2xl">
                {product?.product_name}
            </p>

            <div className="mt-[5px] mb-[20px] inline-flex">
                <p className={`${isSoldOut? "line-through" : ""} 
                                flex 
                                items-center
                `}>
                    ${product?.price}
                </p>
                {isSoldOut && <p className="text-xl pl-[10px]">Sold Out</p>}
            </div>

            <p>{product?.description}</p>

            {!isSoldOut && (
                <div className="mt-[20px] justify-between flex gap-5 h-[45px]">
                    {/* <QuantitySelectorOld /> */}
                    <QuantitySelector value={value} onPlus={onPlus} onMinus={onMinus}/>
                        <Button className="text-[18px]
                                            font-medium
                                            py-[15px]
                                            px-[70px]
                                            2xl:px-[90px]
                                            h-full
                                            whitespace-nowrap
                                            flex
                                            items-center"
                                onClick={addCart}>
                            Add to Bag
                        </Button>
                </div>
            )}
        </div>
    );
}

export default ProductDetailView;