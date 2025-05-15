'use client';

import React, { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";

import Menubar from '../menubar/Menubar';


function Menu() {
    const [isOpen, setOpen] = useState(false);


    return (
        <div className='flex 
                        flex-row
                        items-center
                        gap-2
                        '>
            <CgMenuRight className="cursor-pointer scale-x-[-1]" onClick={() => setOpen(true)} size={30}/>
            <div className="cursor-pointer" onClick={() => setOpen(true)}>Menu</div>

            <Menubar isOpen={isOpen} onClose={() => setOpen(false)}/>
            {/* {isOpen &&
            } */}
        </div>
    );
}

export default Menu;