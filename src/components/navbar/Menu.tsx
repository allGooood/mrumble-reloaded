'use client';

import { CgMenuRight } from "react-icons/cg";

import Menubar from '../menubar/Menubar';
import useMenuStore from '@/stores/useMenuStore';

function Menu() {
    const menu = useMenuStore();

    return (
        <div className='flex 
                        flex-row
                        items-center
                        gap-2
                        '>
            <CgMenuRight className="cursor-pointer scale-x-[-1]" onClick={menu.open} size={30}/>
            <div className="cursor-pointer" onClick={menu.open}>Menu</div>
            <Menubar />
        </div>
    );
}

export default Menu;