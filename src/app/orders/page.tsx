'use client';

import Wrapper from '@/components/wrapper/Wrapper'
import React, { useEffect, useState } from 'react'
import useCartStore from '../stores/useCartStore'
import CartBarItem from '@/components/cart/CartBarItem';
import axios from 'axios';
import ToasterProvider from '../libs/ToasterProvider';
import toast from 'react-hot-toast';
import { TOAST_ERROR } from '../utils/constants';

const Page = () => {
  const {carts} = useCartStore();
  const [isLoading, setLoading] = useState(false);
  const [orders, setOrders] = useState({});

  useEffect(() => {
    setLoading(true);

    axios.get("http://localhost:4000/orders")
    .then((res) => {
      const rows = res.data;
      setOrders(rows);
    })
    .catch((err) => {
      toast.error(TOAST_ERROR);
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);

  return (
    <Wrapper>
      <ToasterProvider />
      <div className="px-[100px] justify-center flex flex-col">
        <div className="border border-gray-300 rounded-2xl p-[30px] mt-[50px]">
          <p className="text-3xl font-semibold">Order History</p>
          <hr className="my-[20px]"/>
          <nav className="w-full mt-[20px] overflow-y-auto">
              <ul className="flex flex-col gap-y-3">
                  {carts.map(cart => (
                      <div className="cursor-pointer" 
                          onClick={() => {}}
                          key={cart.id}>
                        <div className="flex flex-row items-center">
                          <p className="text-lg font-medium">Carried Out</p>
                          <p className="pl-[10px]">(2025-12-07 15:22:32)</p>
                        </div>
                        <CartBarItem key={cart.id} item={cart} />
                        <div>

                        </div>
                        <hr className="border border-gray-300" />
                      </div>
                  ))}
              </ul>
          </nav>
        </div>
      </div>
    </Wrapper>
  )
}

export default Page