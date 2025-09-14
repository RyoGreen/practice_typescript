import { createContext } from "react";
import React from "react";

type User = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

export const UserContext = createContext<User | null>(null);

type Props = {
    children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
    return (
        <UserContext.Provider
            value={{
                id: 1,
                firstName: "John",
                lastName: "Smith",
                age: 30,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
