import Image from 'next/image';
import React from 'react';
import { Roboto_Condensed } from "next/font/google";
import { Rubik } from "next/font/google";


const font = Rubik({
    subsets: ['latin']
})

function CookieCard() {
    return (
        <div className={`${font.className} 
                        flex
                        flex-col
                        items-center
                        justify-center
                        w-full
        `}>
            <div className="flex
                            flex-row
                            w-full
                            rounded-4xl
                            items-center
                            hover:bg-[#EBAC5A]
                            cursor-pointer
                            transition-colors
                            duration-500
                            h-3/5
                            group
            "> {/** 색깔표시 */}
                <Image className="scale-x-[-1]" src="/MilkChocolateChip.png" alt="" width={600} height={600}/> {/** 왼쪽 */}
                <div className="flex
                                flex-col
                                gap-7
                "> {/** 오른쪽 */}
                    <div>
                        <p className="text-7xl font-extrabold">Milk Chocolate Chip Cookie</p>
                        <p className="text-xl">The classic—you can&apos;t go wrong. Thick, soft, and packed with milk chocolate chips.</p>
                    </div>
                    <div className="flex
                                    flex-row
                                    text-m
                                    font-bold
                                    gap-5
                    ">
                        <div className="rounded-full border-1 px-8 py-2.5">Learn More</div>
                        <div className="rounded-full border-1 px-8 py-2.5 bg-black text-white group-hover:text-[#EBAC5A] transition duration-500">Order Now</div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default CookieCard;