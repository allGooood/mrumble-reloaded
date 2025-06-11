// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFlNFiiOqNTjSD3deE8skA5CWkNhy2zDY",
  authDomain: "mrumble-reloaded.firebaseapp.com",
  projectId: "mrumble-reloaded",
  storageBucket: "mrumble-reloaded.firebasestorage.app",
  messagingSenderId: "109488575969",
  appId: "1:109488575969:web:ab3acd8b4a1d459e846ea0",
  measurementId: "G-XTHD10Q2BD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const convertUser = async(result: User) => {
  console.log(result);
  const user =  {
      uid: result.uid,
      email: result.email,
      username: result.displayName,
      image: result.photoURL,
      provider: result.providerId,
  };

  // cookies().set("user", result.uid);

  return user;
};
