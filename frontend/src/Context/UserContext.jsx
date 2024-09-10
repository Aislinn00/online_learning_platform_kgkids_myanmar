import React, { createContext, useState, useEffect } from 'react';

// Create the context with a default value
export const UserContext = createContext({
    user: null,
    login: () => {},
    logout: () => {}
});

// Provider component that wraps your app and makes the user object and auth methods available to any child component that calls useContext(UserContext).
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Effect to check local storage or session storage for an existing user token
    useEffect(() => {
        const savedUser = sessionStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (userInfo) => {
        console.log("Logging in user:", userInfo);  // Check what userInfo is being set
        setUser(userInfo);
        sessionStorage.setItem('user', JSON.stringify(userInfo)); // Storing user info
    };

    const logout = () => {
        setUser(null); // Clear the user from state
        sessionStorage.removeItem('user'); // Clear the session storage
    };

    // The value prop of the provider will be the context data that consumers of the UserContext can subscribe to.
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
