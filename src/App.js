import React from 'react';
import './App.css';
import SignIn from './Components/SignInComponent';
import logo from './logo.svg';
import Footer from './Footer';

function App() {
 
  return (
    <div className="App">
      <header className="App-header"> 
      <div>
        <img src={logo} alt="signin page"/>
      </div>
      <div>
        <h1> Welcome to TeamWorksNg </h1> 
      </div>
      <div>
        <h5> ... A social space for employees to interact</h5>
      </div>        
      </header>
      <div>
        <SignIn />
      </div>
      <div>
        <Footer />
      </div>   
    </div>
  );
}

export default App;
