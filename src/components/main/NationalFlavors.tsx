'use client';

import React, { useEffect, useState } from 'react';
import CookieCard from './CookieCard';
import axios from 'axios';
import { CookieOption } from '@/app/types/CookieOption';
import toast from 'react-hot-toast';

function NationalFlavors() {
    const [cookies, setCookies] = useState<CookieOption[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        axios.get("http://localhost:4000/cookies")
        .then((res) => {
            const cookies = res.data;
            setCookies(cookies);
            console.log(cookies);
        })
        .catch((error) => {
            toast.error("Something went wrong :(");
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);

    return (
            
            <div className="flex
                            flex-col
                            gap-30
                            w-[75vw]
                            pt-[100px]
                            ">
                {cookies.map((cookie, idx) => (
                    <CookieCard 
                        key={cookie.id} 
                        cookie={cookie}
                        isReversed={idx % 2 === 1}
                    />
                ))}
            </div>
    );
}

export default NationalFlavors;