'use client';

import useMenuStore from "@/store/useMenuStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LuCircleX } from "react-icons/lu";
import MenubarItem from "./MenubarItem";
import { useNavigation } from "@/hooks/UseNavigation";

function Menubar() {
    const router = useRouter();
    const menu = useMenuStore();
    const { goOrder } = useNavigation();

    const goHome = () => {
        menu.close();
        router.push("/");
    };

    useEffect(() => {
        if(menu.isOpen){
            document.body.style.overflow = "hidden";
        }else {
            document.body.style.overflow = "";
        }
    }, [menu.isOpen]);

    if(!menu.isOpen) return null;
    
    return (
        <>
            {/** Over Lay */}
            <div className="fixed inset-0 h-screen bg-gray-500 opacity-50 z-10"
                onClick={menu.close} 
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
                <div className="flex
                                flex-row
                                justify-between
                                items-center
                                text-3xl
                                font-bold
                ">
                    <div className="transition-colors
                                duration-100
                                hover:text-[#FFB9CD]
                                cursor-pointer">
                                    Sign in
                    </div>
                    <LuCircleX onClick={menu.close} className="cursor-pointer" />
                </div>
                <div className="border border-gray-200 my-7"></div>
                <nav className="font-extrabold
                                text-5xl 
                ">
                    <ul className="flex
                                    flex-col
                                    gap-y-15
                    ">
                        <MenubarItem onClick={goHome}>Home</MenubarItem>
                        <MenubarItem onClick={goOrder}>Order</MenubarItem>
                        <MenubarItem onClick={goHome}>Locations</MenubarItem>
                        <MenubarItem onClick={goHome}>Gift Cards</MenubarItem>
                        <MenubarItem onClick={goHome}>Merch</MenubarItem>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Menubar;