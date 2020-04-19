import React from 'react';
import {NavLink, Link, withRouter, Redirect} from 'react-router-dom';
import './css/Header.css';
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
import logo from '../home.png';
import { withStyles } from '@material-ui/core';

const classes = {
  root: {
    padding: 0,
    margin: 0,
    color: '#45839f'
  },
  label: {
    padding: 0,
    margin: 0,
  }
}

const StyledTabs = withStyles(theme => ({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 60,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
}))(props => <Tabs {...props} TabIndicatorProps={{children: <div />}} />);

const StyledTab = withStyles(theme => ({
  root: {
    ...theme.typography.button,
    textTransform: 'capitalized',
    color: 'primary',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    padding: '0px 0px',
    '&:focus': {
      opacity: 1,
    },
    '& > a': {
      maxWidth: 20,
      backgroundColor: '#635ee7',
    },
  },
  labelIcon: {
    maxWidth: 20,
    backgroundColor: '#f5f5f5',
  },
  root: {
    color: 'red',
    margin: '0px 0px',
    padding: '0px 0px',
  }
}))(props => <Tab classes={{root: classes.root}} disableRipple {...props} />);
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
        <div style={{width: '35%', background: '#f5f5f5', overflow: 'hidden'}}>
          <span><img className='homelogo' src={logo} /> </span>        
        </div>
        <div style={{width: '65%', overflow:'hidden'}}>
      <AppBar position='static' color="default">
        <StyledTabs
          value={value}
          onChange={this.handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example" 
        >
           
           <StyledTab component={NavLink} label="Games" to="#" icon={<Navigation />} {...a11yProps(0)} />
           <StyledTab component={NavLink} label="Forums" to="#" icon={<ContactPhone />} {...a11yProps(1)} />
           <StyledTab component={NavLink} label="About" to="#" icon={<HelpIcon />} {...a11yProps(2)} />
           <StyledTab component={NavLink} label="Sign up" to="#" icon={<Navigation />} {...a11yProps(3)} />
           <StyledTab component={NavLink} label={heading} to={route} icon={<PowerSettingsNewRounded />} {...a11yProps(4)}  />
          {/* <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} /> */}
        </StyledTabs>
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
