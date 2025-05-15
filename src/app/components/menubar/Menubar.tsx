import { LuCircleX } from "react-icons/lu";

interface MenubarProps{
    onClose: () => void,
    isOpen: boolean
}

function Menubar({isOpen, onClose} : MenubarProps) {
    
    return (
        <div className={`bg-white
                        w-[20vw]
                        z-15
                        fixed
                        top-0 
                        left-0
                        h-screen
                        rounded-tr-3xl
                        rounded-br-3xl
                        p-8
                        transition-all
                        duration-300
                        transform
                        ${isOpen ? 'translate-x-0' : '-translate-x-full invisible'}
        `}>
            <div className="flex
                            flex-row
                            justify-between
                            items-center
                            text-3xl
                            font-bold
            ">
                <div>Sign in</div>
                <LuCircleX onClick={onClose} className="cursor-pointer" />
            </div>
            <div className="border border-gray-200 my-7"></div>
            <div className="font-extrabold
                            text-5xl 
                            flex 
                            flex-col
                            gap-y-15
            ">
                <p>Home</p>
                <p>Order</p>
                <p>Locations</p>
                <p>Catering</p>
                <p>Gift Cards</p>
                <p>Merch</p>
            </div>
        </div>
    );
}

export default Menubar;