import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext'; // Make sure the path is correct

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(''); // State to hold the error message

    const { login } = useContext(UserContext); // Use the login function from UserContext
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log("Received from login:", data);  // Check the API response
            if (response.ok) {
                sessionStorage.setItem('authToken', data.token);
                login(data.user); // Assuming data.user contains the user details
                navigate('/');
            } else {
                throw new Error(data.message || 'Failed to login');
            }
        } catch (error) {
            console.error('Error:', error);
            setError(error.message); // Set the error message state
        }
    };
    
    return (
        <div className="max-w-md mx-auto mt-10">
            <p className='text-center text-xl font-bold mb-5'>အကောင့်ဝင်ရန် လိုအပ်သော အချက်အလက်များ ဖြည့်ပါ</p>
            {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}
            <form className="bg-white border-2 border-[#2F4858] px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-m font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 text-m font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex items-center justify-between'>
                <p className='mb-4'>ကိုယ်ပိုင် အကောင့်မရှိသေးပါက <Link to="/signup" className='text-[#5EDC91]'>ဤနေရာတွင် စာရင်းသွင်းပါ</Link></p>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-[#00B89D] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                       အကောင့်ဝင်ရန်
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
