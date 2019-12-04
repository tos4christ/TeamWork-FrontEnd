import React from 'react';
import './css/Header.css';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <header>
        <span className='icn-logo'> <i className='material-icons'>code</i> </span>
        <p className='headerText'> TeamWorks Ng .... Where Collaboration Lives</p>
        <ul className="main-nav">
          <li> <NavLink to='/feeds'>Recent Posts</NavLink></li>
          <li><NavLink to='/articles'> Post Articles </NavLink></li>
          <li><NavLink to='/gifs'>Post Gifs</NavLink></li>
          <li><NavLink to={this.props.route}>{this.props.logged}</NavLink></li>
        </ul>
      </header>

    );
  }

}

export default Header;
