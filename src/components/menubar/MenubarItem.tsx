import React from 'react';

interface MenubarItemProps{
    children: React.ReactNode,
    onClick: () => void
}

function MenubarItem({children, onClick} : MenubarItemProps) {
    return (
        <li className="cursor-pointer 
                    hover:text-[#FFB9CD]
                    transition-colors
                    duration-100
                    " 
            onClick={onClick}>
            {children}
        </li>
    );
}

export default MenubarItem;