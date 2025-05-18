'use client';

import { CgMenuRight } from "react-icons/cg";

import Menubar from '../menubar/Menubar';
import useMenuStore from '@/store/useMenuStore';

function Menu() {
    const {isMenuOpen, openMenu, closeMenu} = useMenuStore();

    return (
        <div className='flex 
                        flex-row
                        items-center
                        gap-2
                        '>
            <CgMenuRight className="cursor-pointer scale-x-[-1]" onClick={openMenu} size={30}/>
            <div className="cursor-pointer" onClick={openMenu}>Menu</div>
            <Menubar />
        </div>
    );
}

export default Menu;