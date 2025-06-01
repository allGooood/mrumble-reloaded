'use client';

import { useMenuNavigation } from '@/hooks/UseMenuNavigation';
import React from 'react';

function Order() {
    const {goOrder} = useMenuNavigation();

    return (
        <div className='bg-black 
                        text-white
                        rounded-full
                        py-2.5
                        px-7
                        cursor-pointer'>
            <p onClick={goOrder}>Order Now</p>
        </div>
    );
}

export default Order;