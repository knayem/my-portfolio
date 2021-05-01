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
            
          </Route>

          <Route path="/projects">
            <Projects></Projects>
          </Route>

          <Route path="/blogs">
            
          </Route>

          <Route path="/contact">
            
          </Route>



        </Switch>

      </Router>
     
    </div>
  );
}

export default App;
