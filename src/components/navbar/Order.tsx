'use client';

import { useNavigation } from '@/hooks/UseNavigation';
import React from 'react';

function Order() {
    const {goOrder} = useNavigation();

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