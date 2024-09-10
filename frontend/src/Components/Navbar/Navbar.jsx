import React, { useState, useContext } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext'; // Ensure correct path

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { user, logout } = useContext(UserContext); // Destructure user and logout from context
    console.log("User in Navbar:", user);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Handle the logout with confirmation
    const handleLogout = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            logout();  // Use logout from context
        }
    };

    return (
        <div className='bg-[#B4FC7B] w-full'>
            <div className='container mx-auto px-4 py-5 flex items-center justify-between relative'>
                <div className='flex-shrink-0'>
                    <h1 className='font-bold text-xl'>KinderLogo</h1>
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='focus:outline-none'>
                        {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                    </button>
                </div>
                <ul className={`md:flex flex-col md:flex-row md:items-center gap-4 md:gap-8 absolute md:static top-full left-0 z-10 w-full md:w-auto ${isMenuOpen ? 'bg-[#B4FC7B] text-center w-full' : 'hidden'}`}>
                    <li className='cursor-pointer font-bold py-2 md:py-0  hover:underline'><Link to='/'>ပင်မစာမျက်နှာ</Link></li>
                    <li className='cursor-pointer font-bold py-2 md:py-0 hover:underline'><Link to='/lesson'>သင်ခန်းစာများ</Link></li>
                    <li className='cursor-pointer font-bold py-2 md:py-0 hover:underline'><Link to='/video'>ဇာတ်လမ်းဗီဒီယိုများ</Link></li>
                    <li className='cursor-pointer font-bold py-2 md:py-0 hover:underline'><Link to='/game'>ဂိမ်းများ</Link></li>
                </ul>
                {user ? (
                    <div className="flex items-center justify-end">
                        <div onClick={toggleDropdown} className="relative cursor-pointer">
                        Welcome, <span className="mr-4 font-bold">{user.username}!</span>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl py-2 z-20">
                                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                                    အကောင့်ထွက်ရန်
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <Link to='/login'>
                        <button type="button" className="bg-[#009297] text-white font-bold py-2 px-4 rounded">
                            အကောင့်၀င်ရန်
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
