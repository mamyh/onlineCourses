import React from 'react'

const Footer = () => {
    const customStyle = { height: '50px' }
    return (
        <div style={customStyle} className="text-center bg-light">
            <p className="d-flex justify-content-center align-items-center"> this site is developed by Md Al Mamun (React developer)</p>
        </div>
    )
}

export default Footer
