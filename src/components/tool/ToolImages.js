import React from 'react';
import tool1 from '../../images/tool1.jpg';
import tool2 from '../../images/tool2.jpg';
import tool3 from '../../images/tool3.jpg';
import tool4 from '../../images/tool4.jpg';
import tool5 from '../../images/tool5.jpg';
import tool6 from '../../images/tool6.jpg';

import "./Tool.css";


const ToolImages = () => {
    return (
        <div className="images">
            <img src={tool1} alt="" />
            <img src={tool2} alt="" />
            <img src={tool3} alt="" />
            <img src={tool4} alt="" />
            <img src={tool5} alt="" />
            <img src={tool6} alt="" />
        </div>
    )
}

export default ToolImages
