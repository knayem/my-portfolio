import React from 'react';

import { FaGithub,FaLinkedin,FaFacebook } from 'react-icons/fa';


const Footer = () => {
    return (
        <div style={{ marginTop:"30px" }} className="text-center p-5 justify-content-md-center">
        <div className="row ">
            
            <div style={{ marginLeft: '40%', }} className="col-md-4 text-light d-flex  xs={6} ">
            {/* style={{ marginLeft: '40%', }} */}
              
               
               {/* <h3> <a href="https://twitter.com/"className="ms-3" target="_blank" rel=""><FontAwesomeIcon icon={faTwitterSquare} /></a></h3>  */}
               
               <h3> <a href="https://www.facebook.com/profile.php?id=100006192496598"className="ms-5" target="_blank" rel=""> <FaFacebook/></a></h3>

               <h3> <a href="https://linkedin.com/in/abu-bakor-siddik-4b9119211"className="ms-5" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></h3>
               
               <h3> <a href="https://github.com/knayem"className="ms-3" target="_blank" rel=""> <FaGithub/> </a></h3>
                          
                   
            </div>
           
            
        </div>

        <div className="row">


        <div style={{ marginLeft: '30%', }} className="col-md-4 text-light d-flex  xs={6}  ">

        <p style={{color:'whiteSmoke'}}>Copyright {(new Date()).getFullYear()} All Rights Reserved <a target="_blank" href="https://linkedin.com/in/abu-bakor-siddik-4b9119211">Me abs</a>  </p>


        </div>
    
    </div>
        
    </div>








    //     <div style={{ marginTop:"200px"}} className="text-center p-5">
        
    //     <h3> <a href="https://linkedin.com/in/abu-bakor-siddik-4b9119211"className="ms-5" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></h3>
               
    //            <h3> <a href="https://github.com/knayem"className="ms-3" target="_blank" rel=""> <FaGithub/> </a></h3>
               
    //     <p>Copyright {(new Date()).getFullYear()} All Rights Reserved <a target="_blank" href="https://linkedin.com/in/abu-bakor-siddik-4b9119211">knayem</a>  </p>
        
    // </div>
    );
};

export default Footer;