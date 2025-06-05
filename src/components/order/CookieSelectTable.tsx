import React, { useEffect, useState } from 'react';
import CookieSelectCard from './CookieSelectCard';
import Button from '../Button';
import axios from 'axios';
import Image from 'next/image';
import { CookieProps } from '@/app/types/Cookie';
import { useQuantitySelectorContext } from '@/app/context/QuantitySelectorContext';
import QuantitySelector from '../QuantitySelector';

interface CookieSelectTableProps{
    requiredOptionCount: number,
    price: string
}

function CookieSelectTable({
    requiredOptionCount,
    price
}: CookieSelectTableProps
) {
    const [cookies, setCookies] = useState<CookieProps[]>([]);

    const context = useQuantitySelectorContext();
    const totalSelected = context?.total ?? 0;
    const remainRequiredOptionCount = Math.max(0, requiredOptionCount - totalSelected);
    const tatalPrice = price;

    
    useEffect(() => {
        axios.get('http://localhost:4000/cookies')
        .then((res) => {
            const cookies = res.data;
            setCookies(cookies);
        });
    }, []);
    
    const CookieSelectCard = ({
        id,
        image_url,
        cookie_name,
        calories
    }: CookieProps) => {
        const isSelected = (context?.getQuantity(JSON.stringify(id)) ?? 0) > 0;
        const isDisabled = totalSelected >= requiredOptionCount && !isSelected;

        const handleChange = (count: number) => {
            console.log("handleChange");
            context?.setQuantity(JSON.stringify(id), count);
        };

        return (
            <div className="flex justify-between border-b border-gray-200 py-[10px]">
                <div className="flex flex-row">
                    <div className="w-[50px] h-[50px] relative">
                        <Image className="object-cover"
                            src={`/cookies/${image_url}`} alt="" fill />
                    </div>
                    <div className="ml-[10px] flex flex-col justify-center">
                        <p className="font-semibold leading-[20px]">{cookie_name}</p>
                        <p className="leading-[16px] text-gray-500 text-sm">{calories} cal</p>
                    </div>
                </div>

                <div className="h-[40px]">
                    <QuantitySelector
                        minimum={0}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                    />
                </div>
            </div>
        );
    };
    
    return (
        <>
            <div className="flex flex-col">
                {cookies.map(cookie => (
                    <CookieSelectCard key={cookie.id} {...cookie} />
                    // <CookieSelectCard key={cookie.id}
                    //                 {...cookie}
                    //                 requiredOptionCount={requiredOptionCount}
                    //                 totalSelected={totalSelected}
                    // />
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
                        <p>$ {tatalPrice}</p>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default CookieSelectTable;


// import React, { useEffect, useState } from 'react';
// import CookieSelectCard from './CookieSelectCard';
// import Button from '../Button';
// import axios from 'axios';
// import Image from 'next/image';
// import { CookieProps } from '@/app/types/Cookie';
// import { useQuantitySelectorContext } from '@/app/context/QuantitySelectorContext';
// import QuantitySelector from '../QuantitySelector';

// interface CookieSelectTableProps{
//     requiredOptionCount: number,
//     price: string
// }

// function CookieSelectTable({
//     requiredOptionCount,
//     price
// }: CookieSelectTableProps
// ) {
//     const [cookies, setCookies] = useState<CookieProps[]>([]);

//     const context = useQuantitySelectorContext();
//     const totalSelected = context?.total ?? 0;
//     const remainRequiredOptionCount = Math.max(0, requiredOptionCount - totalSelected);
//     const tatalPrice = price;
    
//     useEffect(() => {
//         axios.get('http://localhost:4000/cookies')
//         .then((res) => {
//             const cookies = res.data;
//             setCookies(cookies);
//         });
//     }, []);
    
//     const CookieSelectCard = ({
//         id,
//         image_url,
//         cookie_name,
//         calories
//     }: CookieProps) => {
//         const isSelected = (context?.getQuantity(JSON.stringify(id)) ?? 0) > 0;
//         const isDisabled = totalSelected >= requiredOptionCount && !isSelected;

//         const handleChange = (count: number) => {
//             context?.setQuantity(JSON.stringify(id), count);
//         };
//         // const handleChange = () => {}    

//         return (
//             <div className="flex justify-between border-b border-gray-200 py-[10px]">
//                 <div className="flex flex-row">
//                     <div className="w-[50px] h-[50px] relative">
//                         <Image className="object-cover"
//                             src={`/cookies/${image_url}`} alt="" fill />
//                     </div>
//                     <div className="ml-[10px] flex flex-col justify-center">
//                         <p className="font-semibold leading-[20px]">{cookie_name}</p>
//                         <p className="leading-[16px] text-gray-500 text-sm">{calories} cal</p>
//                     </div>
//                 </div>

//                 <div className="h-[40px]">
//                     <QuantitySelector
//                         minimum={0}
//                         onChange={handleChange}
//                         isDisabled={isDisabled}
//                     />
//                 </div>
//             </div>
//         );
//     };
    
//     return (
//         <>
//             <div className="flex flex-col">
//                 {cookies.map(cookie => (
//                     <CookieSelectCard key={cookie.id} {...cookie} />
//                     // <CookieSelectCard key={cookie.id}
//                     //                 {...cookie}
//                     //                 requiredOptionCount={requiredOptionCount}
//                     //                 totalSelected={totalSelected}
//                     // />
//                 ))}
//             </div>
//             <div className="flex flex-row justify-end pt-[50px]">
//                 {/* <SwitchToggle /> */}
//                 <div className="h-[50px]">
//                     <Button variant="primary"
//                             className="text-[18px]
//                                         font-normal
//                                         py-[15px]
//                                         h-full
//                                         w-[300px]
//                                         px-[30px]
//                                         flex
//                                         flex-row
//                                         justify-between
//                                         items-center"
//                     >
//                         <p>Add {remainRequiredOptionCount} more</p>
//                         <p>$ {tatalPrice}</p>
//                     </Button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default CookieSelectTable;