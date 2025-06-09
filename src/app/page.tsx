'use client';
import NationalFlavors from "../components/main/NationalFlavors";
import { useEffect } from "react";
import useUserStore from "./stores/useUserStore";
import { auth } from "../../firebase";

export default function Home() {
  const { user, setUser } = useUserStore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user){
        // setUser(user);
        console.log(user);
      }else{
        setUser(null);
      }
      return () => unsubscribe();
    });
    console.log(user);
  }, []);

  return (
    <div className="flex
                    justify-center
    ">
      <NationalFlavors />
      {/* <Footer /> */}
    </div>
  );
}
