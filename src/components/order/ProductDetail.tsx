'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

function ProductDetail() {
    const searchParams = useSearchParams();
    const search = searchParams.get('productid');

    return (
        <div>
            Product Detail : {search}
        </div>
    );
}

export default ProductDetail;