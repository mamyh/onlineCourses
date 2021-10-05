import React from 'react'


const Course = ({ course, children }) => {
    const { title, img, price, description, classes } = course;
    return (
        <div className="card mb-4" style={{ width: '300px' }}>
            <img src={img} style={{ height: '200px' }} className="card-img-top" alt="our courses" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6>Price: ${price}</h6>
                <p>Total Classes : {classes}</p>
                <p className="card-text">{description}</p>
                {/* dynamically rendered  */}
                {children}
            </div>
        </div>
    )
}

export default Course
