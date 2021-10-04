import React from 'react';


const Services = (props) => {
    const { id, title, price, category, instructor, level, enrolled, language, img } = props.course;

    return (


        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            {/* <div classNameName="img-div">
                <img src={img} alt="" />
            </div>
            <div classNameName="service-info">
                <h4 classNameName="service-name">{title}</h4>
                <p>Category: {category}</p>
                <p>Level: {level}</p>
                <p>Instructor: {instructor}</p>
                <p>Price: ${price} </p>
                <p>Enrolled: {enrolled}</p>
                <p>Language: {language}</p>

                {/* button with event handler */}
            {/* <button
                    onClick={() => props.handleAddToClub(props.person)}
                    classNameName="button-main">{cartIcon} Add to Club</button> */}

            {/* </div> */}
            <div className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </div>
            <div className="mt-4 text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1">$16.00</p>
            </div>
        </div>

    );
};

export default Services;