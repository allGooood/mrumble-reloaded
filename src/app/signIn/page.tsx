'use client';

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
import Link from 'next/link';
import AuthWrapper from '@/components/wrapper/AuthWrapper';


const formSchema = yup.object({
    name: yup.string()
        .required("* This field is required."),

    email: yup.string()
        .email("* Invalid email format")
        .required("* This field is required."),

    password: yup.string()
        .required("* This field is required.")
        .min(6, "* Password must be at least 6 characters"),

    confirmPassword: yup.string()
        .required("* Please confirm your password.")
        .oneOf([yup.ref("password")], 
            "* Passwords do not match"),
  }).required();

type FormData = yup.InferType<typeof formSchema>;


function Page() {
    const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm<FormData>({
        resolver: yupResolver(formSchema)
    });

    const onSubmit = async(data: FormData) => {
        const {email, password} = data;

        try{
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(data);
            console.log(credentials);

            // TODO - navigate 추가

        }catch(error){
            if(error instanceof FirebaseError){
                alert(error.message);
            }
        }
    }

    return (
        <AuthWrapper onSubmit={handleSubmit(onSubmit)}
                    title="Sign In">
            <Input type="text" placeholder="First & Last Name" register={register('name')} error={errors.name}/>
            <Input type="text" placeholder="Email" register={register('email')} error={errors.email}/>
            <Input type="password" placeholder="Password" register={register('password')} error={errors.password}/>
            <Input type="password" placeholder="Confirm Password" register={register('confirmPassword')} error={errors.confirmPassword}/>
            <Button type="submit" className="text-lg py-[10px] mt-[20px] w-full">{isSubmitting ? "Loading..." : "Create Account"}</Button>
            <span className="pt-[15px]">Already have an account? <Link 
                                                                className="underline text-blue-600 hover:text-blue-800" 
                                                                href="/login">Log In
                                                                </Link>
            </span>
        </AuthWrapper>
    );
}

export default Page;
