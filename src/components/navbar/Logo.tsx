'use client';

import React from 'react';
import { Nunito } from "next/font/google";
import Link from 'next/link';
import useMenuStore from '@/store/useMenuStore';

const font = Nunito({
    subsets: ["cyrillic-ext"],
  });

function Logo() {
    const {isMenuOpen, openMenu, closeMenu} = useMenuStore();

    return (
        <div className={`${font.className} 
                        text-5xl
                        font-extrabold
                        `}>
            <Link href="/" onClick={closeMenu}>Crumbl</Link>
        </div>
    );
}

export default Logo;