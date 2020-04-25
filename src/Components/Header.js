import React from 'react';
import {NavLink, Link, withRouter, Redirect} from 'react-router-dom';
import './css/Header.css';
import '../Components/css/style.css';
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
            <nav className='navbar navbar-expand-sm justify-content-right bg-light'>                
              <Link to='/api/v1/' className='navbar-brand'>
              <img className='homelogo'  src={logo} width="40" height="20" alt="site logo"/>
              </Link>             
              
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span> 
                  <span className="icon-bar"></span>                      
                </button>
              
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  <li> <NavLink to='/api/v1/feeds'>Latest News</NavLink></li>
                  <li><NavLink to='/api/v1/articles'> Contact Admin </NavLink></li>
                  <li><NavLink to='/api/v1/gifs'>Tour</NavLink></li>
                  <li><NavLink to={route}>{heading}</NavLink></li>
                </ul>
              </div>
            </nav>

          </div>
      



        {/*
           <StyledTab component={NavLink} label="Games" to="#" icon={<Navigation />} {...a11yProps(0)} />
           <StyledTab component={NavLink} label="Forums" to="#" icon={<ContactPhone />} {...a11yProps(1)} />
           <StyledTab component={NavLink} label="About" to="#" icon={<HelpIcon />} {...a11yProps(2)} />
           <StyledTab component={NavLink} label="Sign up" to="#" icon={<Navigation />} {...a11yProps(3)} />
           <StyledTab component={NavLink} label={heading} to={route} icon={<PowerSettingsNewRounded />} {...a11yProps(4)}  />
          {/* <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} /> */}
        {/* </StyledTabs>
      </AppBar>
      </div> */}
     
   
    </div>      
    );
  }

}

export default withRouter(Header);
