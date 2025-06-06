import React from 'react';
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps{
    type: string;
    placeholder: string;
    register: UseFormRegisterReturn;
    error?: FieldError;
};

function Input({type,
    placeholder,
    register,
    error
}: InputProps) {
    return (
        <div className="w-full flex flex-col">
            <input className="border
                            border-gray-200
                            text-md
                            py-[10px]
                            px-[10px]
                            rounded-xl
            " 
                type={type} placeholder={placeholder} {...register} />
            <span className="text-sm pb-[5px] h-[25px]">{error ? error.message : ""}</span>
        </div>                    
    );
}

export default Input;