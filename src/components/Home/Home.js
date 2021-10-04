import React, { useEffect, useState } from 'react';
import useCourses from '../../hooks/useCourses';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
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
                                courses.slice(0, 4).map(course => <Services
                                    key={course.id}
                                    course={course}
                                ></Services>)

                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;