import React from 'react';

interface WrapperProps{
    children: React.ReactNode
}

function Wrapper({children}: WrapperProps) {
    return (
        <div className="w-[90vw]
                        min-h-screen
                        items-center
                        md:py-[20px]
                        lg:py-[40px]
        ">
            {children}
        </div>
    );
}

export default Wrapper;