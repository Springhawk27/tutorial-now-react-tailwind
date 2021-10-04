import React from 'react';
import { NavLink } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import Banner from '../Banner/Banner';
import Course from '../Course/Course';


// Home component
const Home = () => {
    const [courses] = useCourses([]);


    return (
        <div>
            <Banner></Banner>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-1">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-purple-800">Check Out Our Featured Courses</h1>
                    </div>
                </div>
            </section>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <NavLink to="/courses" className="flex flex-wrap -m-4">
                            {
                                courses.slice(0, 4).map(course => <Course
                                    key={course.id}
                                    course={course}
                                    home='true'
                                ></Course>)

                            }

                        </NavLink>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;