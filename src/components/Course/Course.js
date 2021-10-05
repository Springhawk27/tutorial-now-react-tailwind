import React from 'react';


// Course component to shgow course in home and courses menu
const Course = (props) => {
    const { title, price, category, instructor, level, enrolled, language, img } = props.course;

    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-xl">
            <div className="block relative h-48 rounded overflow-hidden">
                <img alt="course" className="object-cover object-center w-full h-full block" src={img} />
            </div>
            <div className="mt-4 text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                <p className="mt-1">${price}</p>
                <p className="mt-1">Level: {level}</p>
                <p className="mt-1">Instructor: {instructor}</p>
                <p className="mt-1">Enrolled: {enrolled}</p>
                <p className="mt-1">Language: {language}</p>

            </div>
        </div>
    );
};

export default Course;