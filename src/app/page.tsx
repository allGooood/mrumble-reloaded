'use client';
import NationalFlavors from "../components/main/NationalFlavors";
import { useEffect } from "react";
import useUserStore from "./stores/useUserStore";
import { auth, convertUser } from "../../firebase";

export default function Home() {
  const { setUser } = useUserStore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      const processUser = async () => {
        if (user) {
          setUser(await convertUser(user));
          console.log(user);
        } else {
          setUser(null);
        }
      };
      
      processUser();
    });
    
    return () => unsubscribe();
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
