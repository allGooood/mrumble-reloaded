import React, { useState } from 'react'

interface QuantitySelectorProps {
    minimun?: number;
    maximum?: number;
    disablePlus?: boolean;
    disableMinus?: boolean;
    onPlus?: () => void;
    onMinus?: () => void;
    value: number;
}

const QuantitySelector = ({
    minimun = 1,
    maximum = 10,
    // isDisabled = false,
    disablePlus: plusDisabled = false,
    disableMinus: minusDisabled = false,
    onPlus,
    onMinus,
    value,
}: QuantitySelectorProps) => {

    const isAtMin = value <= minimun;
    const isAtMax = value >= maximum;
    const isDisabled = plusDisabled && minusDisabled;

  return (
    <div className={`inline-flex items-center justify-between rounded-full border-[1px] border-gray-200 
                        min-w-[110px] min-h-[50px] w-[150px] 2xl:w-[178px] h-full p-5
                    ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}>
            
            <button className={`text-2xl cursor-pointer
                        ${isAtMin || minusDisabled? "text-gray-400" : "text-black"}`}
                    onClick={onMinus}
                    disabled={isAtMin || minusDisabled}>
                -
            </button>

            <p>{value}</p>
            
            <button className={`text-2xl cursor-pointer 
                        ${isAtMax || plusDisabled ? "text-gray-400" : "text-black"}`}
                    onClick={onPlus}
                    disabled={isAtMax || plusDisabled}
                    >
                +
            </button>
        </div>
  )
}

export default QuantitySelector