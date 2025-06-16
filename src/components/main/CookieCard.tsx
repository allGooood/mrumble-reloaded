'use client';

import Image from 'next/image';
import React from 'react';
import Button from '../Button';
import { CookieOption } from '@/app/types/CookieOption';
import { useMenuNavigation } from '@/app/hooks/UseMenuNavigation';
import toast from 'react-hot-toast';

interface CookieCardProps {
    cookie: CookieOption;
    isReversed: boolean;
}

function CookieCard({
    cookie,
    isReversed
}:CookieCardProps) {
    const {goProducts} = useMenuNavigation();

    return (
        <div className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        w-full
                        h-[500px]
        ">
            <div className={`
                flex
                ${isReversed ? 'flex-row-reverse' : 'flex-row'}
                w-full
                rounded-4xl
                items-center
                hover:bg-[#EBAC5A]
                cursor-pointer
                transition-colors
                duration-500
                h-[350px]
                group
            `}>{/** 색깔표시 */}
                <div className="relative w-[500px] h-[500px] shrink-0">
                    <Image className="absolute inset-0 object-fit scale-x-[-1]" src={"/cookies/" + cookie.image_url} alt="" fill /> {/** 왼쪽 */}
                </div>
                <div className="flex
                                flex-col
                                gap-7
                                relative
                                mx-[50px]
                "> {/** 오른쪽 */}
                    <div>
                        <p className="text-6xl font-extrabold">{cookie.cookie_name}</p>
                        <p className="text-lg pt-4">{cookie.description}</p>
                    </div>
                    <div className="flex
                                    flex-row
                                    text-m
                                    font-bold
                                    gap-5
                    ">                        
                        <Button className="px-8 py-2.5" 
                            onClick={() => toast("Coming Soon :)")} 
                            variant="outline">
                                Learn More
                        </Button>
                        <Button className="px-8 py-2.5 group-hover:text-[#EBAC5A] transition duration-500" 
                            onClick={goProducts}>
                                Order Now
                        </Button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default CookieCard;