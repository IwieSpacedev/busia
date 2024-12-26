import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect,  } from 'react-router-dom';


import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero1 from './components/Hero1';
import Contacto from './components/Contacto';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/'>
         <Header />
         <Hero1 />
         <Contacto />
         <Footer />
        </Route>
      </Switch>      
    </Router>
  );
}

export default App;
