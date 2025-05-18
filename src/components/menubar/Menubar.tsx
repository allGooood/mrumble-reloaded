'use client';

import useMenuStore from "@/store/useMenuStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LuCircleX } from "react-icons/lu";

function Menubar() {
    const router = useRouter();
    const {isMenuOpen, openMenu, closeMenu} = useMenuStore();

    const goHome = () => {
        closeMenu();
        router.push("/");
    }

    useEffect(() => {
        if(isMenuOpen){
            document.body.style.overflow = "hidden";
        }else {
            document.body.style.overflow = "";
        }
    }, [isMenuOpen]);

    if(!isMenuOpen) return null;
    
    return (
        <>
            {/** Over Lay */}
            <div className="fixed inset-0 h-screen bg-gray-500 opacity-50 z-10"
                onClick={closeMenu} 
            />

            {/** Menu Bar */}
            <div className="bg-white
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
                            translate-x-0
            ">
            {/* <div className={`bg-white
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
            `}> */}
                <div className="flex
                                flex-row
                                justify-between
                                items-center
                                text-3xl
                                font-bold
                ">
                    <div>Sign in</div>
                    <LuCircleX onClick={closeMenu} className="cursor-pointer" />
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
        </>
    );
}

export default Menubar;