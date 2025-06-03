import React, { useEffect, useState } from 'react';

interface QuantitySelectorProps {
    minimum?: number;
    maximum?: number;
    onChange?: (count: number) => void;
    isDisabled?: boolean;
  }

function QuantitySelector({ 
    minimum = 1
    , onChange
    , isDisabled = false 
    , maximum = 10
}: QuantitySelectorProps) {
    const [count, setCount] = useState(minimum);

    useEffect(() => {
        onChange?.(count)
    }, [count]);

    const countUp = () => {
        if(isDisabled) return;
        // setCount((prev) => Math.max(minimum, prev - 1));
        setCount(prev => {
            const newCount = Math.min(prev + 1, maximum);
            return newCount;
        });
    };

    const countDown = () => {
        if(isDisabled) return;
        // setCount((prev) => Math.min(maximum, prev + 1));
        setCount(prev => {
            const newCount = Math.max(minimum, prev-1);
            return newCount;
        });
    };

    const isAtMin = count <= minimum;
    const isAtMax = count >= maximum;

    return (
        <div className={`inline-flex items-center justify-between rounded-full border-[1px] border-gray-200 
                        min-w-[110px] min-h-[50px] w-[150px] 2xl:w-[178px] h-full p-5
                    ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}>
            
            <button className={`text-2xl 
                        ${isAtMin ? "text-gray-400" : "text-black"}`}
                    onClick={countDown}
                    disabled={isAtMin}>
                -
            </button>

            <p>{count}</p>
            
            <button className={`text-2xl ${isAtMax ? "text-gray-400" : "text-black"}`}
                    onClick={countUp}
                    disabled={isAtMax}>
                +
            </button>
        </div>
    );
}

export default QuantitySelector;
