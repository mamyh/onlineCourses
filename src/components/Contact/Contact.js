import React from 'react'
import { NavLink } from 'react-router-dom';
import "./../banner/Banner.css";

const Contact = () => {
    return (
        <div className="container my-5" style={{ height: '100vh' }} >
            <h1 className="text-center">Contact  with us</h1>
            <h2>Leave a message </h2>
            <form>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">your name </label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="your name" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your email" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="your message" rows="3"></textarea>
                </div>
                <NavLink className="course-btn" style={{ margin: 0 }} to="/">Send your message</NavLink>
            </form>
        </div>
    )
}

export default Contact
