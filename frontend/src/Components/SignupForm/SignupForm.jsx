import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent the default form submission behavior
        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)  // Ensure formData is correctly formatted and contains the required fields
            });
            
            if (!response.ok) {
                // If the server response is not OK, throw an error with the status text
                throw new Error(`HTTP error! Status: ${response.status}, ${response.statusText}`);
            }
    
            const data = await response.json(); // Parse the JSON data returned from the server
            console.log('Success:', data); // Log or handle the success response here
           // Redirect to login page upon successful signup
           navigate('/login'); // Using navigate to redirect
        } catch (error) {
            console.error('Error during fetch operation:', error.message);
            // Here, you could update the UI to show an error message to the user
        }
    };
    

    return (
        <div className="max-w-md mx-auto mt-10">
            <p className='text-center text-xl font-bold mb-5'>အကောင့်ဖွင့်ရန် လိုအပ်သော အချက်အလက်များ ဖြည့်ပါ</p>
            <form className="bg-white border-2 border-[#2F4858] rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-m font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-m font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 text-m font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className='flex items-center justify-between'>
                <p className='mb-4'>ကိုယ်ပိုင် အကောင့်ရှိပါက <Link to="/login" className='text-[#5EDC91]'>ဤနေရာတွင် အကောင့်ဝင်ပါ</Link></p>
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-[#00B89D] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    အကောင့်ဖွင့်ရန်
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
