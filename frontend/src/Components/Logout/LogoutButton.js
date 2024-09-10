import React from 'react';

const LogoutButton = ({ onLogout }) => {
    const handleLogout = () => {
        sessionStorage.removeItem('authToken'); // Clear the token from session storage
        onLogout(); // Optional callback to update App state or redirect
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
