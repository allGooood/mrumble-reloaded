import React, { useEffect, useState } from 'react';
import CookieSelect from './CookieSelectCard';
import Button from '../Button';
import axios from 'axios';
import { CookieProps } from '@/app/types/Cookie';

function CookieSelectTable() {
    const [cookies, setCookies] = useState<CookieProps[]>([]);

    useEffect(() => {
        axios.get('http://localhost:4000/cookies')
                .then((res) => {
                    const cookies = res.data;
                    setCookies(cookies);
                    console.log(cookies);
                });
    }, []);

    return (
        <>
            <div className="flex flex-col">
                {cookies.map(cookie => (
                    <CookieSelect key={cookie.id}
                                    {...cookie}
                    />
                ))}
            </div>
            <div className="flex flex-row justify-end pt-[50px]">
                {/* <SwitchToggle /> */}
                <div className="h-[50px]">
                    <Button variant="primary"
                            className="text-[18px]
                                        font-normal
                                        py-[15px]
                                        h-full
                                        w-[300px]
                                        px-[30px]
                                        flex
                                        flex-row
                                        justify-between
                                        items-center"
                    >
                        <p>Add 1 more</p>
                        <p>$ 4.69</p>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default CookieSelectTable;