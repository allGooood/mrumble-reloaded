'use client';

import useMenuStore from "@/store/useMenuStore";
import { useRouter } from "next/navigation";
import { LuCircleX } from "react-icons/lu";

// interface MenubarProps{
//     onClose: () => void,
//     isOpen: boolean
// }

function Menubar() {
    const router = useRouter();
    const {isMenuOpen, openMenu, closeMenu} = useMenuStore();

    const goHome = () => {
        close();
        router.push("/");
    }
    
    return (
        <div className={`bg-white
                        w-[20vw]
                        z-15
                        fixed
                        top-0 
                        left-0
                        h-screen
                        rounded-tr-3xl
                        rounded-br-3xl
                        p-8
                        transition-all
                        duration-300
                        transform
                        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full invisible'}
        `}>
            <div className="flex
                            flex-row
                            justify-between
                            items-center
                            text-3xl
                            font-bold
            ">
                <div>Sign in</div>
                <LuCircleX onClick={close} className="cursor-pointer" />
            </div>
            <div className="border border-gray-200 my-7"></div>
            <nav className="font-extrabold
                            text-5xl 
            ">
                <ul className="flex
                                flex-col
                                gap-y-15
                ">
                    <li className="cursor-pointer" onClick={goHome}>Home</li>
                    <li className="cursor-pointer" onClick={() => {}}>Order</li>
                    <li className="cursor-pointer" onClick={() => {}}>Locations</li>
                    <li className="cursor-pointer" onClick={() => {}}>Catering</li>
                    <li className="cursor-pointer" onClick={() => {}}>Gift Card</li>
                    <li className="cursor-pointer" onClick={() => {}}>Merch</li>
                </ul>
            </nav>
        </div>
    );
}

// function Menubar({isOpen, onClose} : MenubarProps) {
//     const router = useRouter();
//     const {isOpen, open, close} = useMenuStore();

//     const goHome = () => {
//         onClose();
//         router.push("/");
//     }
    
//     return (
//         <div className={`bg-white
//                         w-[20vw]
//                         z-15
//                         fixed
//                         top-0 
//                         left-0
//                         h-screen
//                         rounded-tr-3xl
//                         rounded-br-3xl
//                         p-8
//                         transition-all
//                         duration-300
//                         transform
//                         ${isOpen ? 'translate-x-0' : '-translate-x-full invisible'}
//         `}>
//             <div className="flex
//                             flex-row
//                             justify-between
//                             items-center
//                             text-3xl
//                             font-bold
//             ">
//                 <div>Sign in</div>
//                 <LuCircleX onClick={onClose} className="cursor-pointer" />
//             </div>
//             <div className="border border-gray-200 my-7"></div>
//             <nav className="font-extrabold
//                             text-5xl 
//             ">
//                 <ul className="flex
//                                 flex-col
//                                 gap-y-15
//                 ">
//                     <li className="cursor-pointer" onClick={goHome}>Home</li>
//                     <li className="cursor-pointer" onClick={() => {}}>Order</li>
//                     <li className="cursor-pointer" onClick={() => {}}>Locations</li>
//                     <li className="cursor-pointer" onClick={() => {}}>Catering</li>
//                     <li className="cursor-pointer" onClick={() => {}}>Gift Card</li>
//                     <li className="cursor-pointer" onClick={() => {}}>Merch</li>
//                 </ul>
//             </nav>
//         </div>
//     );
// }

export default Menubar;