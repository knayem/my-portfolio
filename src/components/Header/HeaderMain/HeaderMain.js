import React from 'react';
import myImage from '../../../images/myImage.png';
const HeaderMain = () => {
    return (
        <main className="row bg-dark">
            <div className="col-md-4 offset-md-1">
              <h1 style={{color: 'tomato',fontSize: '30px', fontFamily: 'Zen Dots'}}> <br/> <span style={{color: 'black' ,fontFamily: 'Krona One',fontSize: '20px'}}> As-salamu Alaykum </span> <br/> Hello,I'm <br/> <span style={{color: 'black' ,fontFamily: 'Krona One',fontSize: '50px'}}> Knayem </span></h1>
              <h6 style={{textAlign: 'justify',color: 'whiteSmoke'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorum illo dolorem similique eaque. Quam ipsum, fuga officiis perspiciatis quibusdam obcaecati, rerum accusamus modi officia accusantium quaerat voluptas, illo dolores! </h6>
            <button className="btn btn-primary" >Download Resume</button>
            </div>
            <div className="col-md-7">
           <img src={myImage} alt="" className="img-fluid"/>

            </div>



        </main>
    );
};

export default HeaderMain;