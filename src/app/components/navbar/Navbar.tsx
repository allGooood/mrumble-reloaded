import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import Order from './Order';
import { Nunito } from "next/font/google";

const font = Nunito({
  subsets: ["cyrillic-ext"],
});

function Navbar() {
    return (
        <div className={`${font.className} bg-[#FFB9CD]
                        flex 
                        flex-row
                        items-center
                        font-extrabold
                        p-4
                        justify-between
                        text-xl
                        z-10
                        sticky
                        top-0
                        w-full
        `}>
            
            <Menu />
            <Logo />
            <Order />
        </div>
    );
}

export default Navbar;