import React from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../Header/Navbar/Navbar';

const Contact = () => {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_t4yitsf', 'template_3goas0r', e.target, 'user_Hru27JZKTpbOzTw2JC32Y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        
    }

    return (


        <div style={{backgroundColor:'rgb(14, 13, 13)'}} >
            <Navbar></Navbar>

        <div style={{ width: "59%", margin: "auto", height: "550px", marginTop: "74px", backgroundColor:'rgb(14, 13, 13)' }}>
            <h1 className="text-light mt-5 p-3 text-center">Get In Touch</h1>
            <form className='text-center mt-3' onSubmit={sendEmail} action="">
                
                <input className="form-control w-75 m-auto" type="text" name="name" placeholder="Enter Your Name" />
                <br />
                <input className="form-control w-75 m-auto" type="email" name="email" placeholder="Enter Your Email" />
                <br />
                <input className="form-control w-75 m-auto " type="text" name="subject" placeholder="Enter Your Subject" />
                <br />
                <textarea className="form-control w-75 m-auto" name="message" id="" cols="30" rows="5">Enter Your Message</textarea>
                <br />
                <input type="submit" className="btn-primary w-75" value="submit" />
            </form>
            <div className="ms-5 mt-3" >
                <p className="text-light"><i>Sending to</i> <a className="text-success" href="mailto:abs.knayem@gmail.com"> <span style={{color: 'white'}}> abs.knayem@gmail.com</span></a> </p>
            </div>
        </div>





    </div>












        // <div style={{color:'blue'}}>
        //     <Navbar></Navbar>
            
        // <div className="align-items-center justify-content-around" style={{marginTop: '5%',marginLeft: '15%',backgroundColor:'rgb(14, 13, 13)',width:'600px' ,align: 'center'}} >
        //    <h2 style={{color: 'white',fontFamily: 'Krona One',}}>Get In Touch</h2>

        //     <form  className='text-center mt-3' onSubmit={sendEmail}>
                
                    
                    
                    
        //                 <input className="form-control w-75 m-auto" style={{height:'30px',marginTop: '5%', width:'400px',marginLeft: '5%'}} type="text" placeholder="Name" name="name" />
                    
                     
        //             <br/>
        //             <br/>  
                    
                   
        //                 <input className="form-control w-75 m-auto" style={{height:'30px', width:'400px',marginLeft: '5%'}} type="email"  placeholder="Email" name="email" />   
                    
                       
        //             <br/>
        //             <br/>
                   
        //                 <input className="form-control w-75 m-auto" style={{height:'30px', width:'400px',marginLeft: '5%'}} type="text"  placeholder="Subject" name="subject" />   
                    

                        
        //             <br/>
        //             <br/>
                     
        //                 <textarea className="form-control w-75 m-auto" style={{height:'100px', width:'400px',marginLeft: '5%'}} placeholder="Your Message" name="message" />
                  
                  
        //             <br/>
        //             <br/>
                    
        //                 <input   style={{  marginLeft: '5%',marginBottom:'4%',width:'400px'}} className="btn btn-info" type="submit" value="Send an Email" />
                    
                
        //     </form>
        //     <h5 style={{color: 'white'}}>Sending to abs99knayemn@gmail.com</h5>
        //     </div>


        // </div>
    );
};

export default Contact;