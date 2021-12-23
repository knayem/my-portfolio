import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import { Col, Container, Row } from 'react-bootstrap';
import MyImg from '../../images/aboutImg.png';

import react from '../../images/New folder/react.png';
import html from '../../images/New folder/html.png';
import css from '../../images/New folder/css3.png';
import bootstrap from '../../images/New folder/bootstrap.png';
import js from '../../images/New folder/javascript1.png';
import es from '../../images/New folder/es.png';


import node from '../../images/New folder/node-js.png';
import mongo from '../../images/New folder/mongodb.png';
import firebase from '../../images/New folder/firebase.png';
import heroku from '../../images/New folder/heroku.png';
import Footer from '../Footer/Footer';
import './About.css'
const About = () => {
  return (
    <div style={{ backgroundColor:'black'}} >
      <Navbar></Navbar>
      <Container style={{ marginTop: '3%' }}>
        <Row>
          <Col   style={{ backgroundColor: 'rgb(5, 5, 5)' }} md={6} sm={12}>
            <img style={{ height: '350px' }} src={MyImg} alt="" className="img-fluid" />
            <h1 style={{ color: 'whiteSmoke', textAlign: 'justify' }}>I'm Abu Bakor </h1>
            <h6 style={{ color: 'whiteSmoke', textAlign: 'justify' }}> A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</h6>


          </Col>
          <Col style={{ paddingLeft: '3%' }} md={6} sm={12}>
            <br />
            <br />
            <h1 style={{ color: 'tomato', fontSize: '50px', fontFamily: 'Zen Dots' }}>My Skills</h1>
            <br />
            <br />
            <br />


            <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group me-2" role="group" aria-label="First group">
                <h3 style={{ color: 'black', fontFamily: 'Krona One', fontSize: '20px' }}>Front-End</h3> 
    <img style={{ height: '60px' }} src={html} alt="" className="img-fluid" />
                <img style={{ height: '60px' }} src={css} alt="" className="img-fluid" />

                <img style={{ height: '60px' }} src={bootstrap} alt="" className="img-fluid" />
                <img style={{ height: '60px' }} src={js} alt="" className="img-fluid" />
                <img style={{ height: '60px' }} src={es} alt="" className="img-fluid" />
                <img style={{ height: '60px' }} src={react} alt="" className="img-fluid" />
              </div>

              <div style={{ marginTop: '15%', paddingLeft: '8%' }} class="btn-group me-2" role="group" aria-label="First group">



                <h3 style={{ color: 'black', fontFamily: 'Krona One', fontSize: '20px' }}>Back-End</h3> 


                <img style={{ height: '60px' }} src={mongo} alt="" className="img-fluid" />
                <img style={{ height: '60px' }} src={node} alt="" className="img-fluid" />
                <img style={{ height: '60px' }} src={firebase} alt="" className="img-fluid" />
                <img style={{ height: '60px' }} src={heroku} alt="" className="img-fluid" />

              </div>
            </div>

          </Col>
        </Row>
      </Container>
  <Footer></Footer>

    </div>
  );
};

export default About;