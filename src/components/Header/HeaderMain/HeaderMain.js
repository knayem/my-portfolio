import React from 'react';
import myImage from '../../../images/myImage.png';
import resume from '../../../images/Resume-Abu Bakor Siddik_5.pdf'
import { Link } from 'react-router-dom';
const HeaderMain = () => {
    return (

        // background: "rgb(23, 42, 69)

        <main className="row bg-dark">
            <div className="col-md-4 offset-md-1">
              <h1 style={{color: 'tomato',fontSize: '30px', fontFamily: 'Zen Dots'}}> <br/> <span style={{color: 'black' ,fontFamily: 'Krona One',fontSize: '20px'}}> As-salamu Alaykum </span> <br/> Hello,I'm <br/> <span style={{color: 'black' ,fontFamily: 'Krona One',fontSize: '50px'}}> ABU BAKOR  </span></h1>
              <h6 style={{textAlign: 'justify',color: 'whiteSmoke'}}> Jr. Web Developer. Working on Front End & Back End Development </h6>
            <br/>
            <Link to="/about"> <button type="button" class="btn btn-outline-primary ms-5">About me</button></Link>
             {/* <button type="button" class="btn btn-outline-success ms-5">Download Resume</button> */}
             <a href={resume} download="proposed_file_name"> <button className="btn btn-primary" >Download Resume</button></a>
            </div>
            <div className="col-md-7">
           <img src={myImage} alt="" className="img-fluid"/>

            </div>



        </main>
    );
};

export default HeaderMain;