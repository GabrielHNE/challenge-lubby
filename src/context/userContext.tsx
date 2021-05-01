import React, { createContext, useState, useEffect, useContext, ReactPropTypes} from 'react';
import { User } from '../../types';
const UserContext = createContext({} as Values);

type Values = {
    logged: boolean;
    user: User | null,
    updateUser: any;
    signOut: any;
    setLoading: any;
    isLoading: boolean;
}

export function UserProvider({ children }: any){
    const [ user, setUser ] = useState<User | null>(null);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    function signOut(){
        setUser(null);
    }

    return(
        <UserContext.Provider
            value={{
                logged:!!user,
                user,
                updateUser: setUser,
                signOut,
                setLoading: setIsLoading,
                isLoading
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
	return useContext(UserContext);
}