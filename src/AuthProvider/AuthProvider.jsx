import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

     const creatUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }

     const loginUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }

     const updateUser = (name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: `${name}`, photoURL:`${photo}`
        })
     }

     const googleProvider = new GoogleAuthProvider()

     const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
     }

     const logOut = () => {
        setLoading(true)
        return signOut(auth)
     }
    
     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
        })
        return () => {
            return unSubscribe()
        }
     },[])
    const authInfo = {
        user,
        loading,
        creatUser,
        loginUser,
        loginWithGoogle,
        logOut,
        updateUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;