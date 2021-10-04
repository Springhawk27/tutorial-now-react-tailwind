import React from 'react';
import { NavLink } from 'react-router-dom';


// Footer component
const Footer = () => {
    return (
        <div>
            <footer className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-center">
                    <div className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <NavLink to="/home"><span className="ml-3 text-xl font-medium ">Tutorial Now</span></NavLink>
                    </div>
                    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2021 All Rights Reserved
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;