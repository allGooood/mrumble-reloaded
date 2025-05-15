import React from 'react';
import { Nunito } from "next/font/google";

const font = Nunito({
    subsets: ["cyrillic-ext"],
  });

function Logo() {
    // const router = useRouter();

    return (
        <div className={`${font.className} 
                        text-5xl
                        font-extrabold
                        `}>
            crumbl
        </div>
    );
}

export default Logo;