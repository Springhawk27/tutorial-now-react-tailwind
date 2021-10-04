import React from 'react';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';


const Courses = (props) => {
    const [courses] = useCourses([]);


    return (


        <div >
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
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