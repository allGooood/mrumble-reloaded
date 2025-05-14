import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";


function Menu() {
    return (
        <div className='flex 
                        flex-row
                        items-center
                        gap-2'>
            <AiOutlineMenu size={25}/>
            <div>Menu</div>
        </div>
    );
}

export default Menu;