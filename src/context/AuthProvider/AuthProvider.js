import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   // create user 
   const createUser = (photoURL, email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, photoURL, email, password);
   }

   // sign in with email and password
   const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

   // signIn with google
   const signInWithGoogle = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
   } 

   // log Out 
   const logOut = () => {
    setLoading(true)
    return signOut(auth)
   }
    // user state onAuthState
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return (() => {
            return unsubscribe();
        })
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInWithGoogle,
        signIn,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;