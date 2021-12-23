import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';
function App() {
  return (
    <div className="App">

<Router>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/projects">
            <Projects></Projects>
          </Route>

          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
            
          </Route>



        </Switch>

      </Router>
     
    </div>
  );
}

export default App;
