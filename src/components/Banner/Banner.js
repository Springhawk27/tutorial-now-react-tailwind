import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../Images/banner2.svg'

const Banner = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-800">Learn something new today

                            <br className="hidden lg:inline-block" />
                            From our broad selection of courses
                        </h1>
                        <p className="mb-8 leading-relaxed">We add and update courses regularly to our catalog, so that you can get the latest skills. Choose from 10+ online  courses with full support and guidance.
                            Price starts from only at $4.99</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                                <NavLink to="/courses">Enroll Now</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="Developer" src={img} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;