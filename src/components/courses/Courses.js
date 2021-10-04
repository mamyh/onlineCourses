import React, { useState, useEffect } from 'react'
import Chart from './chart/Chart';
import Course from './course/Course';
import "./Course.css";
import useCourse from '../../utility/useCourse';

const Courses = () => {
    const [courses] = useCourse()
    const [carts, setCarts] = useState([]);

    const handleClick = (course) => {


        const newCart = [...carts, course];
        setCarts(newCart);

    }
    return (
        <div className="container">
            <h1>Our main courses are shown below. Choose to enrole</h1>
            <div className="courses my-5">
                <div className="mx-3" style={{ marginRight: '1px solid #999', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {courses.map(course => <Course key={course.id} course={course}>
                        <button className="btn btn-success" onClick={() => handleClick(course)}>Add to my list</button>
                    </Course>)}
                </div>
                <Chart carts={carts} ></Chart>
            </div>
        </div>
    )
}

export default Courses
