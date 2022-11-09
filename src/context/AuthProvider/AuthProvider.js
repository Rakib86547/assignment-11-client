import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password, photoURL) => {
        return createUserWithEmailAndPassword(auth, email, password, photoURL);
    }

    // sign in with email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign in with google 
    const signInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // sign in with github
    const signInWithGithub = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // user state onAuthState
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return (() => {
            return unsubscribe();
        })
    }, [])

    const authInfo = {
        createUser,
        user,
        loading,
        signIn,
        signInWithGoogle,
        signInWithGithub
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;