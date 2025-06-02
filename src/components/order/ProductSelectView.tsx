import React from 'react';
import CookieSelectTable from './CookieSelectTable';

function ProductSelectView() {
    return (
        <div className="pt-[20px] w-full">
            <p className="md:font-extrabold md:text-5xl font-medium text-2xl">
                Select 4 Flavors
            </p>
            <div className="mt-[5px] mb-[20px] inline-flex"/>
                <CookieSelectTable />
        </div>
    );
}

export default ProductSelectView;