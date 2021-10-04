import React from 'react'
import { NavLink } from 'react-router-dom';
import "./../banner/Banner.css"

const About = () => {
    return (
        <div style={{ height: '100vh' }} className="container">
            <h2>Welcome to online Educate!</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur?</p>
            <div className="text-center mt-5">

                <NavLink className="course-btn" to="/">Home</NavLink>
                <NavLink style={{ background: 'transparent', color: '#000' }} className="course-btn" to="/courses">Our courses</NavLink>
            </div>
        </div>
    )
}

export default About
