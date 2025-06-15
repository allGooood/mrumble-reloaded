import { User } from "firebase/auth";

export const convertUser = async(result: User, id?:number) => {
    const user =  {
        id: id,
        uid: result.uid,
        email: result.email,
        username: result.displayName,
        image: result.photoURL,
        provider: result.providerId,
    };
  
    // cookies().set("user", result.uid);
  
    return user;
  };