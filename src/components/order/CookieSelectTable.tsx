import React, { useEffect, useState } from 'react';
import CookieSelectCard from './CookieSelectCard';
import Button from '../Button';
import axios from 'axios';
import { CookieProps } from '@/app/types/Cookie';
import { useQuantitySelectorContext } from '@/app/context/RequiredOptionContext';

{/** TODO 일단 Context 써보고 QunatitySelector 쓰이는 형태좀 본 뒤에 Component합성하던지 정하기 */}
function CookieSelectTable({requiredOptionCount}:{requiredOptionCount: number}) {
    const [cookies, setCookies] = useState<CookieProps[]>([]);

    const context = useQuantitySelectorContext();
    const totalSelected = context?.total ?? 0;
    const remainRequiredOptionCount = Math.max(0, requiredOptionCount - totalSelected);

    
    useEffect(() => {
        axios.get('http://localhost:4000/cookies')
        .then((res) => {
            const cookies = res.data;
            setCookies(cookies);
        });
    }, []);

    return (
        <>
            <div className="flex flex-col">
                {cookies.map(cookie => (
                    <CookieSelectCard key={cookie.id}
                                    {...cookie}
                                    requiredOptionCount={requiredOptionCount}
                                    totalSelected={totalSelected}
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
                        <p>Add {remainRequiredOptionCount} more</p>
                        <p>$ 4.69</p>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default CookieSelectTable;