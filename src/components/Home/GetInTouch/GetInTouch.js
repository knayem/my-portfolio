
import React from 'react';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
    return (
        
        <section className="text-center mt-5">
         
           <div className="mb-5">
           <h1 className="text-light"> <span style={{fontSize:'15px'}} >Feel Free</span> Get In Touch</h1>
           <Link to="/contact"><button style={{width:'20px'}} type="button" class="btn btn-outline-primary w-25"><h3> Say Hello</h3></button></Link>
           </div>
        </section>
    );
};

export default GetInTouch;