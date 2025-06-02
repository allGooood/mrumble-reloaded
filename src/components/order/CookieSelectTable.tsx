import React from 'react';
import CookieSelect from './CookieSelect';

interface CookieProps{
    id: number,
    cookie_name: string,
    sku: string,
    stock: number,
    extra_charge: string,
    calories: string,
    image_url: string,
    category: string,
}

function CookieSelectTable({cookies} : CookieProps[]) {
    return (
        <div className="flex flex-col">
            <CookieSelect />
        </div>
    );
}

export default CookieSelectTable;