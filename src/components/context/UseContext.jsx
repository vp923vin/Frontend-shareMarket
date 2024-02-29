import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const ContextApi = createContext();

const UseContext = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const navigate = useNavigate();

    const handleLogout = async () => {

        const token = sessionStorage.getItem("token");

        try {
            if (!token) {
                console.log('Token not found in sessionStorage');
                return;
            }

            const headers = {
                "Authorization": `JWT ${token}`,
            };

            const response = await axios.get('https://market.srninfotech.com/api/logout', { headers });

            if (response.status === 200) {

                toast.success(`Logout successful`);
                sessionStorage.removeItem("token");
                navigate("/");
            } else {
                console.log('Logout failed');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <ContextApi.Provider value={{ handleLogout, toggleTheme, theme }}>
            {children}
        </ContextApi.Provider>
    );
};


export const useContextApi = () => useContext(ContextApi);
export default UseContext;
