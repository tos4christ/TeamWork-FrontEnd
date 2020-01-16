import React from 'react';
import {NavLink, Link, withRouter, Redirect} from 'react-router-dom';
import ls from 'local-storage';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {ContactPhone} from '@material-ui/icons';
import {Navigation} from '@material-ui/icons';
import {PowerSettingsNewRounded} from '@material-ui/icons';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import logo from '../logo11.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`
  };
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      classes: ''
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
      <div style={{background: '#f5f5f5', display: 'flex'}}> 
        <div style={{width: '40%', background: '#f5f5f5', overflow: 'hidden'}}>
          <span><img className='homelogo' src={logo} style={{border: 'transparent 0px #f5f5f5', overflow: 'hidden', width: '100px', height: '70px', padding: '0', marginLeft: '60px'}} /> </span>        </div>
        <div style={{width: '60%', overflow:'hidden'}}>
      <AppBar position='static' color="default">
        <Tabs
          value={value}
          onChange={this.handleChange}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
           
           <Tab style={{width: '1em', fontSize: '1em'}} component={NavLink} label="Games" to="#" icon={<Navigation />} {...a11yProps(0)} />
           <Tab style={{width: '1em', fontSize: '1em'}} component={NavLink} label="Forums" to="#" icon={<ContactPhone />} {...a11yProps(1)} />
           <Tab style={{width: '1em', fontSize: '1em'}} component={NavLink} label="About" to="#" icon={<HelpIcon />} {...a11yProps(2)} />
           <Tab style={{width: '1em', fontSize: '1em'}} component={NavLink} label="Sign up" to="#" icon={<Navigation />} {...a11yProps(3)} />
           <Tab style={{width: '1em', fontSize: '1em'}} component={NavLink} label={heading} to={route} icon={<PowerSettingsNewRounded />} {...a11yProps(4)}  />
          {/* <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} /> */}
        </Tabs>
      </AppBar>
      </div>
     
      {/* <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
       
        // <nav className='navbar navbar-inverse bg-danger'>
        //   <Link to='/api/v1/' className='navbar-brand'>TeamWorks Ng </Link>
        //   <div className='container-fluid'>
        //     <div className="navbar-header">
        //       <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        //         <span className="icon-bar"></span>
        //         <span className="icon-bar"></span>
        //         <span className="icon-bar"></span> 
        //         <span className="icon-bar"></span>                      
        //       </button>
        //     </div>
        //     <div className="collapse navbar-collapse" id="myNavbar">
        //       <ul className="nav navbar-nav">
        //         <li> <NavLink to='/api/v1/feeds'>About</NavLink></li>
        //         <li><NavLink to='/api/v1/articles'> Contact Admin </NavLink></li>
        //         <li><NavLink to='/api/v1/gifs'>Tour</NavLink></li>
        //         <li><NavLink to={route}>{heading}</NavLink></li>
        //       </ul>
        //     </div>
        //   </div>
        // </nav>
      
    );
  }

}

export default withRouter(Header);
