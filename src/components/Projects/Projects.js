import React from 'react';
import { Button, CardDeck, Card } from 'react-bootstrap';
import uefa from '../../images/league.png';
import gamers from '../../images/gamers.png';
import device from '../../images/device.png';
import Navbar from '../Header/Navbar/Navbar';
import ProjectInfo from './ProjectInfo/ProjectInfo';

import './Project.css'

import jersey from '../../images/jersey.png';
import Footer from '../Footer/Footer';


const Projects = () => {


    const myProjects=[
        {

        img:uefa,
        name: "UEFA League Mania",
       
        worksOn:" HTML5,CSS3,React.js,Netlify,React-Bootstrap",
        description:"site name League Mania Here we can see leagues details in europ by clicking .mainly from those leagues 32 teams paly in uefa champions league. those leagues are very propular leagues all over the world ..and by this site any one can connected with them",
        github:"https://github.com/knayem/Uefa-league-mania",
        liveSite:"https://quizzical-khorana-f12b24.netlify.app/"
    },   {
        img:gamers,
        name: "Crazy gamers",
        worksOn:"HTML5,CSS3,React.js,Firebase,React-Bootstrap,Heroku,MongoDB,NodeJs",
        description:"site name crazy Gamer Here those who love to play Football on computer desktop or laptop can buy Fifa Pc game DVD brand of EA Sports all edition...and by this site any one can connected fun ",
        github:"https://github.com/knayem/Crazy-gamer",
        liveSite:"https://crazy-game-40eaa.web.app "
    },
    {
        img:device,
        name: "Device Health",
        worksOn:"HTML5,CSS3,React.js,Firebase,React-Bootstrap,Heroku,MongoDB,NodeJs",
        description:"site name Device Health.I am still working on it and trying to improve my site day by day. We can not think of our modern life without devices. If those devices damaged and by this site any one can repair there devices safely ..",
        github:"https://github.com/knayem/device-health-client",
        liveSite:"https://devicehealth-b98a2.web.app"
    }

    ,
    {
        img:jersey,
        name: "Sporting House",
        worksOn:"HTML5,CSS3,Bootstrap",
        description:"site name Sporting House.A simple one page site ",
        github:"https://github.com/knayem/Assignment-2",
        liveSite:"https://knayem.github.io/Assignment-2/"
    },
   
]






    return (
            <div >
                <Navbar></Navbar>
                {
                 myProjects.map(project => <ProjectInfo project={project}></ProjectInfo>)  
                }
                


              
                
            </div>
            


    );
};

export default Projects;