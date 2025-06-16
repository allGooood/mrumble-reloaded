'use client';

import { useMenuNavigation } from '@/app/hooks/UseMenuNavigation';
import React from 'react';
import Button from '../Button';

function Order() {
    const menuNavi = useMenuNavigation();

    return (
        <>
            <Button className="py-2.5 px-7"
                variant="primary"
                onClick={menuNavi.goProducts}>
                    Order Now
            </Button>
        </>
    );
}

export default Order;