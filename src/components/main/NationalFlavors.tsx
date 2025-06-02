'use client';

import React from 'react';
import CookieCard from './CookieCard';

function NationalFlavors() {
    return (
            <div className="flex
                            flex-col
                            gap-20
                            w-[70vw]
                            ">

                {[...Array(5)].map((idx) => (
                    <CookieCard key={idx} />
                ))}
            </div>
    );
}

export default NationalFlavors;