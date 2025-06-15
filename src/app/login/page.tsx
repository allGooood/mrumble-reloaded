'use client';

import Button from '@/components/Button';
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, convertUser } from "../../../firebase"
import { FirebaseError } from 'firebase/app';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Image from 'next/image';
import Input from '@/components/auth/Input';
import Link from 'next/link';
import AuthWrapper from '@/components/wrapper/AuthWrapper';
import { useMenuNavigation } from '../hooks/UseMenuNavigation';
import useUserStore from '../stores/useUserStore';
import axios from 'axios';

function Page() {
    const menuNavi = useMenuNavigation();
    const {setUser} = useUserStore();

    const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm<FormData>({
        resolver: yupResolver(loginSchema)
        
    });

    const onSubmit = async(data: FormData) => {
        const {email, password} = data;

        try{
            const credentials = await signInWithEmailAndPassword(auth, email, password);

            const dbUser = (await axios.get(`http://localhost:4000/users/${email}`)).data.user;
            console.log(dbUser?.id);
            const converted = await convertUser(credentials.user, dbUser.id);
            
            setUser(converted);
            console.log(converted);

            menuNavi.goHome();

        }catch(error){
            if(error instanceof FirebaseError){
                alert(error.message);
            }
        }
    }

    return (
        <AuthWrapper onSubmit={handleSubmit(onSubmit)}
                    title="Sign In"
                    isLoading={isSubmitting}>
            <Input type="text" placeholder="Email" register={register('email')} error={errors.email}/>
            <Input type="password" placeholder="Password" register={register('password')} error={errors.password}/>
            <Button type="submit" className="text-lg py-[10px] mt-[20px] w-full">Sign In</Button>
            <span className="pt-[15px]">Don&apos;t have an account? <Link 
                                                                        className="underline text-blue-600 hover:text-blue-800" 
                                                                        href="/signup">Create one
                                                                    </Link>
            </span>
        </AuthWrapper>
    );
}

export default Page;


const loginSchema = yup.object({
    email: yup.string()
        .email("* Invalid email format")
        .required("* This field is required."),

    password: yup.string()
        .required("* This field is required.")
  }).required();

type FormData = yup.InferType<typeof loginSchema>;