'use client';

import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import Order from './Order';
import { usePathname } from 'next/navigation';
import ViewCart from './ViewCart';

function Navbar() {
    const pathname = usePathname();
    const isOrderPage = pathname.startsWith("/order");

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
            {isOrderPage ? <ViewCart /> : <Order />}
        </div>
    );
}

export default Navbar;