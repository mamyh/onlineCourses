import React from 'react';
import { NavLink } from 'react-router-dom';
import "./../banner/Banner.css";

const NotFound = () => {
    return (
        <div className="container my-5" style={{ height: '80vh', textAlign: 'center' }}>
            <h1 className="my-5">404 , page is not found</h1>
            <NavLink className="course-btn" to="/">Home</NavLink>
            <NavLink className="course-btn" to="/courses">Our courses</NavLink>
        </div>
    )
}

export default NotFound;
