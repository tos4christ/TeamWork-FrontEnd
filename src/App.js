import React from 'react';
import './App.css';
import SignIn from './Components/SignInComponent';
import Footer from './Footer';
import Header from './Components/Header';
import CreateEmployee from './Components/CreateEmployee';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';

function App() {
 
  return (
    <Router>
      <div className="App">
        <Header />
          
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  );
}

export default App;
