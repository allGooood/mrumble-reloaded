'use client';

import useMenuStore from "@/app/stores/useMenuStore";
import { useEffect } from "react";
import { LuCircleX } from "react-icons/lu";
import MenubarItem from "./MenubarItem";
import { useMenuNavigation } from "@/app/hooks/UseMenuNavigation";
import useUserStore from "@/app/stores/useUserStore";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import toast from "react-hot-toast";

function Menubar() {
    const menu = useMenuStore();
    const menuNavi = useMenuNavigation();
    const { user, setUser } = useUserStore();

    useEffect(() => {
        document.body.style.overflow = menu.isOpen ? "hidden" : ""
    }, [menu.isOpen]);

    if(!menu.isOpen) return null;

    const logOut = async() => {
        await signOut(auth)
        // .then(() => {
        //     setUser(null);
        // });
    }

    const handleClick = () => toast("Coming soon :)");
    
    return (
        <div>
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
                                cursor-pointer"
                        onClick={user ? logOut : menuNavi.goLogin}
                    >
                        {user ? "Sign Out" : "Sign in"}
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
                        <MenubarItem onClick={menuNavi.goHome}>Home</MenubarItem>
                        <MenubarItem onClick={menuNavi.goProducts}>Order</MenubarItem>
                        <MenubarItem onClick={handleClick}>Locations</MenubarItem>
                        <MenubarItem onClick={handleClick}>Gift Cards</MenubarItem>
                        <MenubarItem onClick={handleClick}>Merch</MenubarItem>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Menubar;