import React from 'react';
import knowledge from '../../Images/knowledge.svg'
import instructor from '../../Images/instructor.svg'

// About us component 
const About = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-800">We teach, We share
                            <br className="hidden lg:inline-block" /> knowledge with who seek for it
                        </h1>

                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={knowledge} />
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-800">Seek knowledge for the better future
                        </h1>
                        <p className="mb-8 leading-relaxed">Whether you want to learn or to share what you know, you’ve come to the right place. As a online learning platform, we connect people through knowledge.

                        </p>

                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={instructor} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-800">Our Instructors
                        </h1>
                        <p className="mb-8 leading-relaxed">Tutorial Now instructors are the passionate people who love to teach and guide.They always share the knowledge what they know with our students around the country.</p>

                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-800">We are growing as you keep learning</h1>
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
        </div>
    );
};

export default About;