import React from 'react';
import Image from 'next/image';
import Product from './Product';

function Products() {
    return (
        <div className="w-full
                        mb-8
                        md:mb-16
        ">
            {/** Title */}
            <div className="text-4xl font-extrabold py-4">
                Large Desserts
            </div>
            
            <div className="grid 
                            grid-cols-1 
                            divide-y 
                            2xl:grid-cols-4
                            lg:grid-cols-3
                            md:grid-cols-2
                            md:divide-y-0
                            md:gap-9
            ">
                {/** Product */}
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}

export default Products;