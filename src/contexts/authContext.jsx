import { createContext, useState } from "react";
import decoderToken from "../utils/decoderToken";

const AuthContext = createContext();

const AuthProvider = ({ children}) => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const storageToken = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }

    const removeToken = () => {
        setToken('');
        localStorage.removeItem('token');
    }

    const getInfoToken = () => {
        try {
            const { id, email } = decoderToken(token);
            return { id, email };
        } catch (error) {
            return {}
        }
    }

    return(
        <AuthContext.Provider value={{ token, storageToken, removeToken, getInfoToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }