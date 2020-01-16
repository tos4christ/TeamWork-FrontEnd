import React from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom';
import PostArticle from './Articles/PostArticle';
import PostGif from './Gifs/PostGif';
import Articles from './Articles/Articles';
import SingleArticle from './Articles/SingleArticle';
import Gifs from './Gifs/Gifs';
import SingleGif from './Gifs/SingleGif';
import FeedPage from './Feeds/FeedPage';
import ls from 'local-storage';
import Profile from './Profile';
import Chat from './Chat';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {ContactPhone, Gif, Image, PostAdd, InsertPhoto, RssFeed, Forum, ListOutlined} from '@material-ui/icons';
import {Navigation} from '@material-ui/icons';
import {AccountCircle} from '@material-ui/icons';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { List } from '@material-ui/core';

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
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
};

class Employee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: 'Oluwatosin Fetuga',
      profile_pic: ls.get('profile_pic'),
      value: 0,
    }
  }
  setPic = () => {
    this.setState({profile_pic: ls.get('profile_pic')})
  }
  handleChange = (event, newValue) => {
    this.setState({value: newValue});
  };  
  render() {
    const { value } = this.state; 
    return (
      <div>
        <div>
          <h1 className='rule dashhead'><span className='material-icons'>dashboard</span> Dashboard</h1>
          <div className='employee-dashboard'>
           <h3> Welcome {ls.get('userName')} </h3> 
           <img src={this.state.profile_pic} className='pic' alt='profile pics' width="20" heigth="30"></img>
           
            <div className='rule dashboard'>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={this.handleChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="secondary"
                textColor="primary"
                aria-label="scrollable force tabs example"
              >
                <Tab component={NavLink} label="Profile" to={`${this.props.match.url}/profile`} icon={<AccountCircle />} {...a11yProps(0)}  />
                <Tab component={NavLink} label="Gifs" to={`${this.props.match.url}/gifs/get`} icon={<Image />} {...a11yProps(1)} /> 
                <Tab component={NavLink} label="Articles" to={`${this.props.match.url}/articles/get`} icon={<ListOutlined />} {...a11yProps(2)} />
                <Tab component={NavLink} label="Post Gif" to={`${this.props.match.url}/gifs`} icon={<InsertPhoto />} {...a11yProps(3)} />
                <Tab component={NavLink} label="Post Article" to={`${this.props.match.url}/articles`} icon={<PostAdd />} {...a11yProps(4)} />
                <Tab component={NavLink} label="Feeds" to={`${this.props.match.url}/feed`} icon={<RssFeed />} {...a11yProps(5)} />
                <Tab component={NavLink} label="Chat" to={`${this.props.match.url}/chat`} icon={<Forum />} {...a11yProps(6)} />
              </Tabs>
            </AppBar>
     
              {/* <TabPanel value={value} index={4}>
                Item Five
              </TabPanel>
              <TabPanel value={value} index={5}>
                Item Six
              </TabPanel>
              <TabPanel value={value} index={6}>
                Item Seven
              </TabPanel> */}

              {/* <button><NavLink to={`${this.props.match.url}/profile`}> <i className='material-icons md-10'>edit</i> <i className='dashed'>Profile</i></NavLink></button>
              <button><NavLink to={`${this.props.match.url}/gifs/get`}> <i className='material-icons md-10'>photo</i><i className='dashed'>Gifs</i></NavLink> </button>
              <button><NavLink to={`${this.props.match.url}/articles/get`}><i className='material-icons md-10'>view_list</i><i className='dashed'>Articles</i></NavLink></button>
              <button><NavLink to={`${this.props.match.url}/gifs`}><i className='material-icons md-10'>image</i><i className='dashed'>Post Gif</i></NavLink></button>
              <button><NavLink to={`${this.props.match.url}/articles`}><i className='material-icons md-10'>add_box</i><i className='dashed'>Post Article</i></NavLink></button>
              <button><NavLink to={`${this.props.match.url}/feed`}><i className='material-icons md-10'>forum</i><i className='dashed'>Feeds</i></NavLink> </button>
              <button><NavLink to={`${this.props.match.url}/chat`}><i className='material-icons md-10'>message</i><i className='dashed'>Chat</i></NavLink> </button> */}
          
            </div>
          </div>
          
          <div className='display'>  
          </div>
        </div>
        <Route exact path={`${this.props.match.path}/gifs`}> <PostGif /> </Route>
        <Route exact path={`${this.props.match.path}/articles`}> <PostArticle /></Route>
        <Route exact path={`${this.props.match.path}/articles/get`}> <Articles /></Route>
        <Route path={`${this.props.match.path}/articles/get/:id`} render={() => <SingleArticle />} />
        <Route exact path={`${this.props.match.path}/gifs/get`} > <Gifs /> </Route>
        <Route path={`${this.props.match.path}/gifs/get/:id`} render={() => <SingleGif />} />
        <Route exact path={`${this.props.match.path}/feed`} render={() => <FeedPage />} />
        <Route path={`${this.props.match.path}/profile`} render={() => <Profile pp={this.setPic} />} />
        <Route path={`${this.props.match.path}/chat`} render={() => <Chat />} />
      </div>
    )
  }
}

export default withRouter(Employee);
