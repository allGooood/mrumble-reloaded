import React from 'react';

{/** Switch Toggle 미완성 */}
function SwitchToggle() {
    return (
        <div className="flex">
            <div className="relative">
                <button className="w-14 h-8 bg-[#FFB9CD] rounded-full peer peer-checked:bg-white">
                    <div className="absolute top-0.5 left-0.5 rounded-full bg-white w-7 h-7" />
                </button>
            </div>
            <div>
                <p className="font-semibold text-lg leading-[20px]">Make this a gift</p>
                <p className="absolute top-0.5 left-0.5 text-gray-400 text-sm">Gifting options available!</p>
            </div>
        </div>
    );
}

export default SwitchToggle;