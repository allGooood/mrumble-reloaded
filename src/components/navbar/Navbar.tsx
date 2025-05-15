import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import Order from './Order';

function Navbar() {
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
            <Order />
        </div>
    );
}

export default Navbar;