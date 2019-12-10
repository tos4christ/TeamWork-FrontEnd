import React from 'react';
import './CSS/Header.css';
import {NavLink, Link, withRouter} from 'react-router-dom';
import ls from 'local-storage';

class Header extends React.Component {
    state = {
      headerRoute: '/api/v1/auth/signin',
      headerState: 'Sign Out',
      prevSet: this.props.set
    }
    componentDidMount() {
      if (!this.props.set) {
        this.setState({headerState: 'Sign In'})
      }
    }
  static getDerivedStateFromProps(props, state) {
    if (props.set !== state.prevSet) {
      return {
        prevSet: props.set,
        headerRoute: '/signout',
        headerState: 'Sign Out'
      };
    }
    return null;
  }
  setHead = () => {
    if (this.state.headerState === 'Sign Out') {
      ls.remove('token');
      this.setState({headerState: 'Sign In'})
    }
  }
  render() {
    return (
      <header>
        <span className='icn-logo'> <i className='material-icons'>code</i> </span>
        <p className='headerText'><Link to='/api/v1/'>TeamWorks Ng </Link></p>
        <ul className="main-nav">
          <li> <NavLink to='/api/v1/feeds'>About</NavLink></li>
          <li><NavLink to='/api/v1/articles'> Contact Admin </NavLink></li>
          <li><NavLink to='/api/v1/gifs'>Tour</NavLink></li>
          <li onClick={this.setHead}><NavLink to={this.state.headerRoute}>{this.state.headerState}</NavLink></li>
        </ul>
      </header>

    );
  }

}

export default withRouter(Header);
