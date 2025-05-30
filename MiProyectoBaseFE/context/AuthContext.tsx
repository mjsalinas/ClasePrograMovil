import { createContext, useContext, useState } from "react";

type User = {
    email: string,
} | null;

const AuthContext = createContext<{
    user: User,
    isAllowed: boolean,
    login: (email: string) => void,
    logout: () => void,
} | null>(null)

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider")
    return context;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>(null);
    const [isAllowed, setIsAllowed] = useState<boolean>(false);

    const login = (email: string) => {
        const isValidEmail = email.endsWith('.com');

        if (isValidEmail) {
            setUser({ email });
            setIsAllowed(true);
        } else {
            setUser(null);
            setIsAllowed(false);
            alert('Solo correos .com son validos')
        }
    }

    const logout = () => {
        setUser(null);
        setIsAllowed(false);
    }

    return (
        <AuthContext.Provider value={{user, isAllowed, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
