import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Banner.css";

const Banner = () => {

    return (
        <section className="banner">
            <div className="banner-title">
                <h1 style={{ marginBottom: '20px' }}> The Best Seller of Online World !!</h1>
                <div className="text-center">
                    <NavLink className="course-btn" to="/courses">Our courses</NavLink>
                    <NavLink style={{ background: 'transparent' }} className="course-btn" to="/about">About us</NavLink>

                </div>
            </div>
        </section>
    )
}

export default Banner
