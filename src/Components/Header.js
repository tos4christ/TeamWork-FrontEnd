import React from 'react';
import {NavLink, Link, withRouter, Redirect} from 'react-router-dom';
import './css/Header.css';
import './css/style.css';
import ls from 'local-storage';
import logo from '../logo-home.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }
  handleChange = (event, newValue) => {
    this.setState({value: newValue});
  };
  render() {
    let route, heading;
    const location = this.props.location.pathname;
    if(location === '/' || location === '/api/v1/auth/signin' || location === '/signout' || !ls.get('token')) {
      route = '/api/v1/auth/signin';
      heading = 'Sign In';
    } else {
      route = '/signout';
      heading = 'Sign Out';
    }
    const { value } = this.state; 
    return (  
      <div className='section'>     
           <div className='container-fluid'>
            <nav className='navbar navbar-expand-sm justify-content-center bg-light border'>                
              <Link to='/api/v1/' className='navbar-brand'>
              <img className='homelogo'  src={logo} width="40" height="20" alt="site logo"/>
              </Link>              
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>                    
              </button>              
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav nav-bar">
                  <li className='nav-item'> 
                    <NavLink className='nav-link text-info' to='/api/v1/feeds'>Latest News  |</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link text-info' to='/api/v1/articles'> Contact  |</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link text-info' to='/api/v1/gifs'>Tour  |</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link text-info' to={route}>{heading}</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div> 
    </div>      
    );
  }

}

export default withRouter(Header);
