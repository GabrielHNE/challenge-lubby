import React, { createContext, useState, useEffect, useContext, ReactPropTypes} from 'react';

const UserContext = createContext({} as User);

type User = {
    logged: boolean;
    updateUser: any;
}

export function UserProvider({ children }: any){
    const [user, setUser] = useState<User | null>(null);

    return(
        <UserContext.Provider
            value={{
                logged:!!user,
                updateUser: setUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
	return useContext(UserContext);
}