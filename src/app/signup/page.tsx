'use client';

import Button from '@/components/Button';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, convertFbUser } from "../../../firebase"
import { FirebaseError } from 'firebase/app';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Input from '@/components/auth/Input';
import React from 'react';
import Link from 'next/link';
import AuthWrapper from '@/components/wrapper/AuthWrapper';
import { useMenuNavigation } from '../hooks/UseMenuNavigation';
import axios from 'axios';
import useUserStore from '../stores/useUserStore';

function Page() {
    const menuNavi = useMenuNavigation();
    const {setUser} = useUserStore();

    const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm<FormData>({
        resolver: yupResolver(formSchema)
    });

    const signUp = async(data: FormData) => {
        const {name, email, password} = data;

        try{
            const userCheckApi = await axios.get(`http://localhost:4000/users/${email}`);
            
            if(userCheckApi.data.user){
                alert("Email already exists"); 
                return;
            }

            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            const fbUser = credentials.user;
            await updateProfile(fbUser, {
                displayName: name,
            });

            //TODO : userId추가하기
            const signUpApi = await axios.post("http://localhost:4000/users"
                                                , await convertFbUser(fbUser));
            const userId = signUpApi.data.user.id;

            const user = await convertFbUser(fbUser, userId);
            setUser(user);
            console.log(userId);

            alert("회원 가입이 완료 되었습니다!");
            menuNavi.goHome();

        }catch(error){
            if(error instanceof FirebaseError){
                alert(error.message);
            }
        }
    }

    return (
        <AuthWrapper onSubmit={handleSubmit(signUp)}
                    title="Sign Up"
                    isLoading={isSubmitting}>
            <Input type="text" placeholder="First & Last Name" register={register('name')} error={errors.name}/>
            <Input type="text" placeholder="Email" register={register('email')} error={errors.email}/>
            <Input type="password" placeholder="Password" register={register('password')} error={errors.password}/>
            <Input type="password" placeholder="Confirm Password" register={register('confirmPassword')} error={errors.confirmPassword}/>
            <Button type="submit" className="text-lg py-[10px] mt-[20px] w-full">Create Account</Button>
            <span className="pt-[15px]">Already have an account? <Link 
                                                                    className="underline text-blue-600 hover:text-blue-800" 
                                                                    href="/login">Log In
                                                                </Link>
            </span>
        </AuthWrapper>
    );
}

export default Page;


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