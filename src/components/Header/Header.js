import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        // <div className="grid grid-cols-12 gap-2 place-items-start h-8 border-1 border-gray-700 bg-gray-800 text-white">
        //     <div>
        //         <NavLink
        //             className="hover:text-red-700"
        //             activeStyle={{
        //                 fontWeight: "bold",
        //                 color: "#1CCBDC"
        //             }}
        //             to="/home">Home</NavLink>
        //     </div>
        //     <div>
        //         <NavLink
        //             className="hover:text-red-700"
        //             activeStyle={{
        //                 fontWeight: "bold",
        //                 color: "#1CCBDC"
        //             }}
        //             to="/services">Services</NavLink>
        //     </div>
        //     <div>
        //         <NavLink
        //             className="hover:text-red-700"
        //             activeStyle={{
        //                 fontWeight: "bold",
        //                 color: "#1CCBDC"
        //             }}
        //             to="/about">About</NavLink>
        //     </div>

        // </div>
        <div>
            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className="flex title-font items-center text-white mb-4 md:mb-0">
                        <NavLink to="/home"><span className="ml-3 text-xl font-medium ">Tutorial Now</span></NavLink>
                        {/* <span className="ml-3 text-xl">Tutorial Now</span> */}
                    </div>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                        <NavLink className="mr-5 hover:text-white"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#7C3AED"
                            }}
                            to="/home">Home</NavLink>
                        <NavLink className="mr-5 hover:text-white"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#7C3AED"
                            }}
                            to="/courses">Courses</NavLink>

                        <NavLink className="mr-5 hover:text-white"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#7C3AED"
                            }}
                            to="/about">About</NavLink>
                        <NavLink className="mr-5 hover:text-white"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#7C3AED"
                            }}
                            to="/contact">Contact</NavLink>

                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;