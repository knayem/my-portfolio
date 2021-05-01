import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <h1>Abs</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link mr-5" to="/"><h6> Home </h6> </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-5" to="/about"> <h6> About </h6> </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-5" to="/projects"> <h6> Projects </h6> </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-5 " to="/blogs"> <h6> Blogs </h6> </Link>
                </li>
               
                <li className="nav-item">
                    <Link className="nav-link mr-5 text-black" to="/contact"> <h6> Contact me </h6> </Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    );
};

export default Navbar;