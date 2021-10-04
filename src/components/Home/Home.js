import React, { useEffect, useState } from 'react';
import useCourses from '../../hooks/useCourses';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useCourses([]);



    return (
        <div>
            <Banner></Banner>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {
                                courses.slice(0, 4).map(course => <Courses
                                    key={course.id}
                                    course={course}
                                ></Courses>)

                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;