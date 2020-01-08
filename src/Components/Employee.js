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

class Employee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: 'Oluwatosin Fetuga',
      profile_pic: ls.get('profile_pic')
    }
  }
  setPic = () => {
    this.setState({profile_pic: ls.get('profile_pic')})
  }
  render() {
    return (
      <div>
        <div>
          <h1 className='rule dashhead'><span className='material-icons'>dashboard</span> Dashboard</h1>
          <div className='employee-dashboard'>
           <h3> Welcome {ls.get('userName')} </h3> 
           <img src={this.state.profile_pic} className='pic' alt='profile pics' width="20" heigth="30"></img>
           
            <div className='rule dashboard'>
              <button><NavLink to={`${this.props.match.url}/profile`}> <i className='material-icons md-10'>edit</i> <i className='dashed'>Profile</i></NavLink></button>
              <button><NavLink to={`${this.props.match.url}/gifs/get`}> <i className='material-icons md-10'>photo</i><i className='dashed'>Gifs</i></NavLink> </button>
              <button><NavLink to={`${this.props.match.url}/articles/get`}><i className='material-icons md-10'>view_list</i><i className='dashed'>Articles</i></NavLink></button>
              <button><NavLink to={`${this.props.match.url}/gifs`}><i className='material-icons md-10'>image</i><i className='dashed'>Post Gif</i></NavLink></button>
              <button><NavLink to={`${this.props.match.url}/articles`}><i className='material-icons md-10'>add_box</i><i className='dashed'>Post Article</i></NavLink></button>
              <button><NavLink to={`${this.props.match.url}/feed`}><i className='material-icons md-10'>forum</i><i className='dashed'>Feeds</i></NavLink> </button>
          
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
        <Route path={`${this.props.match.path}/feed`} render={() => <FeedPage />} />
        <Route path={`${this.props.match.path}/profile`} render={() => <Profile pp={this.setPic} />} />
      </div>
    )
  }
}

export default withRouter(Employee);
