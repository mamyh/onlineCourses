import React, { useState, useEffect } from 'react'
import Chart from './chart/Chart';
import Course from './course/Course';
import "./Course.css";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeDb.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));

    }, [])
    return (
        <div className="container">
            <h1>Our main courses are shown below. Choose to enrole</h1>
            <div className="courses my-5">
                <div className="mx-3" style={{ marginRight: '1px solid #999', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {courses.map(course => <Course key={course.id} course={course}></Course>)}
                </div>
                <Chart></Chart>
            </div>
        </div>
    )
}

export default Courses
