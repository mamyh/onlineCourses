import React from 'react';


import "./Tool.css";


const ToolImages = () => {

    return (
        <div className="images">
            {/* dynamically  rendered img   */}
            {Array.from({ length: 6 }).map((_, idx) => <img src={require(`../../images/tool${idx + 1}.jpg`).default} alt="tool pictures" />)}
        </div>
    )
}

export default ToolImages
