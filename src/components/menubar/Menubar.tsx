import Link from "next/link";
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
            <nav className="font-extrabold
                            text-5xl 
            ">
                <ul className="flex
                                flex-col
                                gap-y-15
                ">
                    <li><Link href="/testpage">Home</Link></li>
                    <li><Link href="/testpage">Order</Link></li>
                    <li><Link href="/testpage">Locations</Link></li>
                    <li><Link href="/testpage">Catering</Link></li>
                    <li><Link href="/testpage">Gift Cards</Link></li>
                    <li><Link href="/testpage">Merch</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menubar;