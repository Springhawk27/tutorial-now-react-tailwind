import React from 'react';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';


// Coures component
const Courses = (props) => {
    const [courses] = useCourses([]);


    return (


        <div >
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-1">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-purple-800">Check Out Our Available Courses</h1>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            courses.map(course => <Course
                                key={course.id}
                                course={course}
                            ></Course>)

                        }
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Courses;