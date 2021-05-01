import React, { createContext, useState, useEffect, useContext, ReactPropTypes} from 'react';

const UserContext = createContext({} as User);

type User = {
    logged: boolean;
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