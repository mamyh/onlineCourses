import React from 'react'
import { NavLink } from 'react-router-dom';
import "./../banner/Banner.css";

const ToolContent = () => {
    return (
        <div className="tool-content">
            <h1>Choose The Design Tool You Want To Learn</h1>
            <p>It may seem like a pretty simple topic, but Photoshop has a really versatile selection of tools for working with text. Like so may other Photoshop goodies though, some of the best ones aren’t really obvious. So, in this section you’ll learn the various ways to add, adjust, and work with text</p>
            <NavLink style={{ background: 'transparent', color: 'goldenrod', marginLeft: '0' }} className="course-btn" to="/courses">Our Courses</NavLink>
        </div>
    )
}

export default ToolContent;
