import React from 'react';
import './CSS/Header.css';
import {NavLink, Link, withRouter} from 'react-router-dom';
import ls from 'local-storage';

class Header extends React.Component {
  
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
    return (
      
       
        <nav className='navbar navbar-inverse bg-danger'>
          <Link to='/api/v1/' className='navbar-brand'>TeamWorks Ng </Link>
          <div className='container-fluid'>
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span> 
                <span className="icon-bar"></span>                      
              </button>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li> <NavLink to='/api/v1/feeds'>About</NavLink></li>
                <li><NavLink to='/api/v1/articles'> Contact Admin </NavLink></li>
                <li><NavLink to='/api/v1/gifs'>Tour</NavLink></li>
                <li><NavLink to={route}>{heading}</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      
    );
  }

}

export default withRouter(Header);
