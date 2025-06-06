import Button from '@/components/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../../firebase"
import { FirebaseError } from 'firebase/app';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Image from 'next/image';
import Input from '@/components/auth/Input';
import React from 'react';

interface AuthWrapperProps{
    onSubmit: (e: React.BaseSyntheticEvent) => Promise<void>;
    children: React.ReactNode;
    title: string,
};

function AuthWrapper({
    onSubmit,
    children,
    title,
}: AuthWrapperProps) {

    return (
        <div className="bg-[#FFB9CD]
                        fixed
                        h-screen
                        w-full
                        z-30
                        flex 
                        items-center
                        justify-center
        ">
            <div className="w-[70vw]">
                
                <div className="bg-white w-[25vw] h-[60vh] rounded-2xl px-[30px] py-[40px] z-30">
                    <div className="flex flex-col items-center justify-center pb-[30px]">
                        <p className="text-5xl font-bold">{title}</p>
                        {/* <p>We&apos;ll text you a confirmation code to get started</p> */}
                    </div>

                    <div className="border-y
                                    border-gray-300
                                    flex flex-col
                                    py-[30px]
                    ">
                        <form className="flex flex-col items-center" onSubmit={onSubmit}>
                            {children}
                        </form>

                        {/* <Button>Continue with Google</Button> */}
                    </div>

                    <p className="pt-[15px] text-sm italic text-gray-500 font-normal text-center">By proceeding you agree to our Terms and Conditions and confirm you have read and understand our Privacy policy</p>
                </div>

                {/* <div className="top-1/2 transform -translate-y-1/2 z-5">
                    <Image className="object-contain max-h-[503px]" src="/illustrationSkateboardCookie.60f85d23.png" alt="" width={4096} height={2648}/>
                </div> */}
            </div>
        </div>
    );
}

export default AuthWrapper;