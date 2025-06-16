'use client';

import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import Order from './Order';
import { usePathname } from 'next/navigation';
import ViewCart from './ViewCart';
import useCartStore from '@/app/stores/useCartStore';

function Navbar() {
    const pathname = usePathname();
    const isOrderPage = pathname.startsWith("/order");
    const isCheckoutPage = pathname.startsWith("/checkout");

    let dynamicButton = null;
    if(isOrderPage){
        dynamicButton = <ViewCart />
    }else if(isCheckoutPage){
        dynamicButton = <div className="w-[120px]"></div>;
    }else{
        dynamicButton = <Order />
    }

    return (
        <div className="bg-[#FFB9CD]
                        flex 
                        flex-row
                        items-center
                        font-semibold
                        py-4
                        px-30
                        justify-between
                        text-xl
                        z-10
                        sticky
                        top-0
                        w-full
        ">
            
            <Menu />
            <Logo />
            {dynamicButton}
        </div>
    );
}

export default Navbar;