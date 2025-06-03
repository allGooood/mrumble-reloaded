import React, { Children } from 'react';
import CookieSelectTable from '../CookieSelectTable';

interface ProductSelectViewProps {
    requiredOptionCount: number;
    children: React.ReactNode;
}


function ProductSelectView({requiredOptionCount, children}: ProductSelectViewProps) {
    const isPlural = requiredOptionCount === 1;

    return (
        <div className="pt-[20px] w-full">
            <p className="md:font-extrabold md:text-5xl font-medium text-2xl">
                {`Select ${requiredOptionCount} Flavor${isPlural ? 's' : ''}`}
            </p>
            <div className="mt-[5px] mb-[20px] inline-flex"/>
                {children}
        </div>
    );
}

export default ProductSelectView;