import React from 'react';
import useCourses from '../../hooks/useCourses';
import Courses from '../Courses/Courses';


const Services = (props) => {
    const [courses, setCourses] = useCourses([]);


    return (


        <div >
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            courses.map(course => <Courses
                                key={course.id}
                                course={course}
                            ></Courses>)

                        }
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Services;