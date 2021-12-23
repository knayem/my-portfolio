import React from 'react';
import './ProjectInfo.css';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import Footer from '../../Footer/Footer';
const ProjectInfo = (props) => {
    const { name, img, worksOn, liveSite, github, description } = props.project;
    return (
      
       
        <div style={{ marginLeft: '10%', backgroundColor:'black' }}>
            <div class="card slide" style={{ width: '22rem', float: 'left', margin: '10px' }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                </div>
                {/* <ul class="list-group list-group-flush">
                   


                     <div className="text-center">
                        <h6> <b>{worksOn}</b></h6>
                    </div> 
                </ul> */}


                <div style={{ height: "50px", marginLeft: '30%' }} className="d-flex  ">


                    <a title="Github" target="_blank" href={github}>
                        <button style={{ marginTop: '10%' }} className="btn btn-outline-primary" ><FaGithub ></FaGithub></button>

                    </a>


                    <a title="liveSite" target="_blank" href={liveSite}>
                        <button style={{ marginTop: '6%' }} className="btn btn-outline-primary" >Live Site</button>

                    </a>




                </div>




            </div>

            
            
        </div>
    );
};

export default ProjectInfo;