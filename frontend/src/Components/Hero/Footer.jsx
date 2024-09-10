import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2F4858] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">KinderLogo</h2>
          <div className="ml-4 flex">
            <a href="" className="mr-4"><FaFacebook /></a>
            <a href="" className="mr-4"><FaTwitter /></a>
            <a href="" className="mr-4"><FaInstagram /></a>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end">
          <Link to="/" className="mr-4 hover:text-[#B4FC7B]">ပင်မစာမျက်နှာ</Link>
          <Link to="/lesson" className="mr-4 hover:text-[#B4FC7B]">သင်ခန်းစာများ</Link>
          <Link to="/video" className="mr-4 hover:text-[#B4FC7B]">ဇာတ်လမ်းဗီဒီယိုများ</Link>
          <Link to="/game" className="mr-4 hover:text-[#B4FC7B]">ဂိမ်းများ</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
