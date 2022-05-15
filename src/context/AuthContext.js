import { createContext, useContext, useEffect, useState} from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../auth/Firebase";

const UserContext = createContext();


export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})


    const createUser = (email, password, displayName) => {
        updateProfile(auth.currentUser, {displayName})
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logout = ()=> {
        return signOut(auth)
    }
    const login = (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            console.log(currentUser)
            setUser(currentUser)
        })
        return unsubscribe();
    }, [])

    return (
        <UserContext.Provider value={{createUser, user, logout, login}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};
