import React from 'react'
import Button from '../Button'
import useCartStore from '@/app/stores/useCartStore'
import { PiHandbagSimpleFill } from "react-icons/pi";

const ViewCart = () => {
    const {open} = useCartStore();

  return (
    <>
    <Button className="relative font-normal text-lg py-2.5 px-7 cursor-pointer flex flex-row items-center gap-3"
            onClick={open}>
        <p className="bg-red-600 text-xs w-[16px] h-[16px] rounded-full absolute top-[8px] left-[20px]">0</p>
        <PiHandbagSimpleFill size={25} color="white"/>
      <span>View Bag</span>
    </Button>
    </>
  )
}

export default ViewCart