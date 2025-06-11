import React, { useEffect, useState } from 'react';

interface QuantitySelectorProps {
    minimum?: number;
    maximum?: number;
    onChange?: (count: number) => void;
    isDisabled?: boolean;
    disableIncrement?: boolean;
  }

function QuantitySelectorOld({ 
    minimum = 1
    , onChange
    , isDisabled = false 
    , maximum = 10
    , disableIncrement = false
}: QuantitySelectorProps) {
    const [count, setCount] = useState(minimum);

    // useEffect(() => {
    //     onChange?.(count)
    // }, [count]);

    const increase = () => {
        if(isDisabled) return;
        setCount(prev => {
            const newCount = Math.min(prev + 1, maximum);
            onChange?.(newCount);
            return newCount;
        });
    };

    const decrease = () => {
        if(isDisabled) return;
        setCount(prev => {
            const newCount = Math.max(minimum, prev-1);
            onChange?.(newCount);
            return newCount;
        });
    };

    const isAtMin = count <= minimum;
    const isAtMax = count >= maximum || disableIncrement;

    return (
        <div className={`inline-flex items-center justify-between rounded-full border-[1px] border-gray-200 
                        min-w-[110px] min-h-[50px] w-[150px] 2xl:w-[178px] h-full p-5
                    ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}>
            
            <button className={`text-2xl cursor-pointer
                        ${isAtMin || isDisabled? "text-gray-400" : "text-black"}`}
                    onClick={decrease}
                    disabled={isAtMin}>
                -
            </button>

            <p>{count}</p>
            
            <button className={`text-2xl cursor-pointer ${isAtMax || isDisabled ? "text-gray-400" : "text-black"}`}
                    onClick={increase}
                    disabled={isAtMax}
                    >
                +
            </button>
        </div>
    );
}

export default QuantitySelectorOld;
