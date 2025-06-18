'use client';

import Button from '@/components/Button';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, convertFbUser } from "../../../firebase"
import React, { useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useMenuNavigation } from '@/app/hooks/UseMenuNavigation';
import useUserStore from '@/app/stores/useUserStore';
import LoadingOverlay from '../auth/LoadingOverlay';
import Image from 'next/image';
import axios from 'axios';
import { signIn } from 'next-auth/react'



interface AuthWrapperProps{
    onSubmit: (e: React.BaseSyntheticEvent) => Promise<void>;
    children: React.ReactNode;
    title: string,
    isLoading?: boolean,
};

function AuthWrapper({
    onSubmit,
    children,
    title,
    isLoading = false
}: AuthWrapperProps) {
    const menuNavi = useMenuNavigation();
    const {setUser} = useUserStore();

    const handleOAuth = async() => {
        try{
            const provider = new GoogleAuthProvider();
            const credentials = await signInWithPopup(auth, provider);
            const fbUser = credentials.user;

            const userCheckApi = await axios.get(`http://localhost:4000/users/${fbUser.email}`);

            let userId;
            if(!userCheckApi.data.user){
                const signUpApi = await axios.post("http://localhost:4000/users"
                                                    , await convertFbUser(fbUser));
                userId = signUpApi.data.user.id;
            }else{
                userId = userCheckApi.data.user.id;
            }
            
            console.log(userId);
            
            const user = await convertFbUser(fbUser, userId);
            setUser(user);


            menuNavi.goHome();
            
        }catch(error){
            console.error(error);
        }
    }

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
            {isLoading && <LoadingOverlay />}
            <div className="w-[70vw] flex">
                
                <div className="bg-white w-[25vw] h-[65vh] rounded-2xl px-[30px] py-[40px] z-30">
                    <div className="flex flex-col items-center justify-center pb-[30px]">
                        <p className="text-5xl font-bold">{title}</p>
                        {/* <p>We&apos;ll send you a confirmation code to get started</p> */}
                    </div>

                    <div className="border-y
                                    border-gray-300
                                    flex flex-col
                                    py-[30px]
                    ">
                        <form className="flex flex-col items-center" onSubmit={onSubmit}>
                            {children}
                        </form>

                        <Button className="flex items-center justify-center relative text-lg py-[5px] mt-[25px]" 
                                variant="outline"
                                onClick={handleOAuth}>
                                {/* onClick={() => signIn('google')}> */}
                            <FcGoogle className="absolute top-2 left-4 size-6" />
                            Continue with Google
                        </Button>
                    </div>

                    <p className="pt-[15px] text-sm italic text-gray-500 font-normal text-center">By proceeding you agree to our Terms and Conditions and confirm you have read and understand our Privacy policy</p>
                </div>

                <div className="absolute top-1/2 transform -translate-y-1/2 z-5">
                    <Image className="object-contain max-h-[503px]" src="/illustrationSkateboardCookie.60f85d23.png" alt="" width={4096} height={2648}/>
                </div>
            </div>
        </div>
    );
}

export default AuthWrapper;