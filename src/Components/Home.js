import React from 'react';
import './css/Header.css';
import {NavLink, Route} from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: 'Sign-in'
    }
  }

  render() {
    return (
      <div>
  
        <h1>This is the Home Page</h1>
      </div>

    );
  }

}

export default Home;
