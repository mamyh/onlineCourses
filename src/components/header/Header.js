import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../logo.jpg";

const Header = () => {
    const linkStyle = { textDecoration: 'none', color: '#555', margin: '0 20px' };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div>
                    <NavLink className="navbar-brand" to='/'><img src={logo} width={50} height={50} alt="my logo" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink style={linkStyle} activeStyle={{ fontWeight: 'bold', color: 'red' }} to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={linkStyle} to="/about" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>About</NavLink>
                        </li>
                        <li>
                            <NavLink style={linkStyle} to="/courses" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Courses</NavLink>
                        </li>
                        <li>
                            <NavLink style={linkStyle} activeClassName="selected" to="/contact" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Contact us</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header
