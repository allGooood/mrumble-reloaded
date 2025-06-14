'use client';

import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const ToasterProvider = () => {
    // const {toasts} = useToasterStore();
    // const [toastLimit, setToastLimit] = useState(5);

    const showToast = () => toast("Toast");

    // useEffect(() => {
    //     toasts
    //       .filter((t) => t.visible)
    //       .filter((_, i) => i >= toastLimit)
    //       .forEach((t) => toast.dismiss(t.id));
    //   }, [toasts, toastLimit]);
    
  return (
    <Toaster />
  )
}

export default ToasterProvider