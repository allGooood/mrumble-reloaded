import React from 'react';
import QuantitySelectorOld from '../../QuantitySelectorOld';
import Button from '../../Button';

interface ProductProps{
    id: number,
    category: string,
    product_name: string,
    stock: number,
    price: string,
    discount_percentage?: string,
    image_url?: string,
    description?: string,
    sku: string,
    has_option: boolean,
}

interface ProductDetailViewProps{
    product?: ProductProps;
    isSoldOut : boolean;
}

function ProductDetailView({product
    , isSoldOut
}:ProductDetailViewProps) {
    return (
        <div className="pt-[20px]">
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
                    <QuantitySelectorOld />
                        <Button className="text-[18px]
                                            font-medium
                                            py-[15px]
                                            px-[70px]
                                            2xl:px-[90px]
                                            h-full
                                            whitespace-nowrap
                                            flex
                                            items-center">
                            Add to Bag
                        </Button>
                </div>
            )}
        </div>
    );
}

export default ProductDetailView;