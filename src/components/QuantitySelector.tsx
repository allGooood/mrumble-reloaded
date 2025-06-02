import React, { useState } from 'react';

interface QuantitySelectorProps {
    minimum?: number;
  }

function QuantitySelector({ minimum }: QuantitySelectorProps) {
    // const MAX_COUNT = 10;

    const MIN_COUNT = minimum ?? 1; 
    const [count, setCount] = useState(MIN_COUNT);

    {/** TODO 수량 제한 정책? */}
    const countUp = () => {
        setCount(prev => prev + 1);
    }

    const countDown = () => {
        setCount(prev => Math.max(MIN_COUNT, prev-1));
    }

    return (
        <div className="inline-flex
                        items-center
                        justify-between
                        rounded-full
                        border-[1px]
                        border-gray-200
                        min-w-[110px]
                        min-h-[50px]
                        w-[150px]
                        2xl:w-[178px]
                        h-full
                        p-5
        ">
            <button className={`${count === MIN_COUNT? "text-gray-400" : "text-black"} 
                                cursor-pointer
                                text-2xl
                            `}
                onClick={countDown}>-</button>
            <p>{count}</p>
            <button className="cursor-pointer
                                text-2xl
                            " 
                onClick={countUp}>+</button>
        </div>
    );
}

export default QuantitySelector;
