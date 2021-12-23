import React from 'react';
import './HomePageProject.css'
import { Card, CardDeck } from 'react-bootstrap';
import gamers from '../../../images/gamers.png';
import uefa from '../../../images/league.png';
import booking from '../../../images/booking.png';
import { Link } from 'react-router-dom';
const HomePageProject = () => {
    return (
        <div style={{marginTop:'5%',width:'90%' ,marginLeft: '5%'}}>
            <h3 style={{color: 'black' ,fontFamily: 'Krona One',fontSize: '30px'}}>Some Of Projects</h3>
            <Link to="/projects"><button style={{width:'10px'}} type="button" class="btn btn-outline-primary text-light w-25 ">All Projects </button></Link>

<br/>
<br/>
<br/>
<CardDeck  >
  <Card  class="card">
    <Card.Img style={{width:'90%',marginLeft:'5%'}} variant="top" src={uefa} />
    <Card.Body>
      <Card.Title>UEFA League Mania</Card.Title>
      
    </Card.Body>
    
  </Card>
  <Card >
    <Card.Img style={{width:'90%',marginLeft:'5%'}} variant="top" src={gamers} />
    <Card.Body>
      <Card.Title>Crazy Gamers</Card.Title>
      
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img style={{width:'90%',marginLeft:'5%'}}  variant="top" src={booking} />
    <Card.Body>
      <Card.Title>Flight Booking
          
      </Card.Title>
      
    </Card.Body>
    
  </Card>
</CardDeck>

            
        </div>
    );
};

export default HomePageProject;