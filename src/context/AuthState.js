import React, { createContext, useEffect, useState } from 'react';
import Loading from '../screens/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();
export default function AuthState({ children }) {

    const [auth, setAuth] = useState(false);
    const [loader, setLoader] = useState(false);

    const login = () => {
        setAuth(true);
    }

    useEffect(() => {
        (async () => {
            setLoader(true);
            let data = await AsyncStorage.getItem("x-auth-token");
            if (data) {
                setAuth(true);
            } else {
                setAuth(false);
            }
            setLoader(false);
        })();
    }, []);

    if (loader) {
        return <Loading />;
    }
    
    return (
        <AuthContext.Provider value={{ login, auth }}>
            {children}
        </AuthContext.Provider>
    )
}
