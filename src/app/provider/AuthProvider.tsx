'use client';

import { useEffect } from "react";
import useUserStore from "../stores/useUserStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, convertFbUser } from "../../../firebase";
import axios from "axios";

const AuthProvider = ({
    children
}: {children: React.ReactNode}) => {
    const { setUser } = useUserStore();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async(fbUser) => {

            if(fbUser){
                console.log("onAuthStateChanged: fbUser exists");
                console.log(fbUser);

                const userCheckApi = await axios.get(`http://localhost:4000/users/${fbUser.email}`);
                const userId = userCheckApi.data.user.id;

                const user = await convertFbUser(fbUser, userId);
                setUser(user);
                
            }else{
                console.log("onAuthStateChanged: no fbUser");
                setUser(null);
            }
        });
        
        return () => unsubscribe();
    }, [setUser]);

  return (
    <>
        {children}
    </>
  )
}

export default AuthProvider