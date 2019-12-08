import React from 'react';
import './css/Header.css';
import {NavLink, Link} from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <header>
        <span className='icn-logo'> <i className='material-icons'>code</i> </span>
        <p className='headerText'><Link to='/api/v1/'>TeamWorks Ng </Link></p>
        <ul className="main-nav">
          <li> <NavLink to='/api/v1/feeds'>About</NavLink></li>
          <li><NavLink to='/api/v1/articles'> Contact Admin </NavLink></li>
          <li><NavLink to='/api/v1/gifs'>Tour</NavLink></li>
          <li><NavLink to={this.props.route}>{this.props.logged}</NavLink></li>
        </ul>
      </header>

    );
  }

}

export default Header;
