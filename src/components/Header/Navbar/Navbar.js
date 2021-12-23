import React from 'react';
import { Link } from 'react-router-dom';
import abs from '../../../images/abs.jpg';
import './Navbar.css'
const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-dark  shadow-lg p-3 mb-3 bg-body rounded">
            <div class="container-fluid">

                <img style={{ height:'50px'}} src={abs} alt="" className="img-fluid"/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div style={{marginLeft:'38%'}} class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link className="nav-link mr-5 text-light" to="/"><h6> Home </h6> </Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link mr-5 text-light" to="/about"> <h6> About </h6> </Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link mr-5 text-light" to="/projects"> <h6> Projects </h6> </Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link mr-5 text-light " to="/blogs"> <h6> Blogs </h6> </Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link mr-5 text-light" to="/contact"> <h6> Contact  </h6> </Link>
                        </li>
                        {/* <li class="nav-item">
                        <a href="https://drive.google.com/file/d/1vat6D5CX5cPSxSWN3KyQU_pGZpfj37fd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button type="button" class="btn btn-outline-primary ms-5 text-light mt-2  ">Resume</button>
                        </a>
                        </li> */}



                    </ul>
                    <a href="https://drive.google.com/file/d/1vat6D5CX5cPSxSWN3KyQU_pGZpfj37fd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button type="button" class="btn btn-outline-primary ms-5 text-light mt-2  ">Resume</button>
                        </a>

                </div>
            </div>
        </nav>














        //     <nav style={{ backgroundColor:'black'}} className="navbar navbar-expand-lg navbar-light  shadow-lg p-3 mb-3 bg-body rounded ">
        //     <div className="container">
        //      <img style={{ height:'50px'}} src={abs} alt="" className="img-fluid"/>

        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
        //     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>

        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav ml-auto">
        //             <li className="nav-item active">
        //                 <Link className="nav-link mr-5 text-light" to="/"><h6> Home </h6> </Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link mr-5 text-light" to="/about"> <h6> About </h6> </Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link mr-5 text-light" to="/projects"> <h6> Projects </h6> </Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link mr-5 text-light " to="/blogs"> <h6> Blogs </h6> </Link>
        //             </li>

        //             <li className="nav-item">
        //                 <Link className="nav-link mr-5 text-light" to="/contact"> <h6> Contact me </h6> </Link>
        //             </li>

        //             <li className="nav-item">
        //             <a href="https://drive.google.com/file/d/1vat6D5CX5cPSxSWN3KyQU_pGZpfj37fd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        //                          <button type="button" class="btn btn-outline-primary ms-5 text-light mt-2  ">Resume</button>
        //                          </a>
        //             </li>



        //         </ul>
        //     </div>
        //     </div>
        // </nav>
    );
};

export default Navbar;