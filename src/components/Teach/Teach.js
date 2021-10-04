import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../Images/join.svg'

const Teach = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-800">Want to teach?
                            <br className="hidden lg:inline-block" />Join with us
                        </h1>
                        <p className="mb-8 leading-relaxed">Become an instructor and spread the knowledge with others</p>
                        <NavLink to="/contact" className="flex justify-center">
                            <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Get started</button>
                        </NavLink>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={img} />
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-purple-800 mb-4">So many reasons to start
                        </h1>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-purple-600">Teach your way
                                </h2>
                                <p className="leading-relaxed text-base">Publish the course you want, in the way you want, and always have of control your own content.
                                </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-purple-600">Inspire learners
                                </h2>
                                <p className="leading-relaxed text-base">Teach what you know and help learners explore their interests, gain new skills, and advance their careers.
                                </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-purple-600">Get rewarded
                                </h2>
                                <p className="leading-relaxed text-base">Expand your professional network, build your expertise, and earn money on each paid enrollment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-800">We are growing as you keep teaching</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our  community and our course catalog get bigger every day. Check out our statistics till now.</p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <h2 className="title-font font-medium text-3xl text-gray-900">11.8K</h2>
                                <p className="leading-relaxed">Learners</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <h2 className="title-font font-medium text-3xl text-gray-900">6</h2>
                                <p className="leading-relaxed">Instructor</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <h2 className="title-font font-medium text-3xl text-gray-900">10</h2>
                                <p className="leading-relaxed">Courses</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <h2 className="title-font font-medium text-3xl text-gray-900">3</h2>
                                <p className="leading-relaxed">Language</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-purple-800 mb-4">Become an instructor
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Join one of the  largest online learning platform.</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
                        </div>
                    </div>
                    <NavLink to="/contact" className="flex justify-center">
                        <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Join today</button>
                    </NavLink>
                </div>
            </section>
        </div>
    );
};

export default Teach;