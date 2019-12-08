import React from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom';
import PostArticle from './PostArticle';
import PostGif from './PostGif';
import Articles from './Articles';
import Article from './Article';
import ls from 'local-storage';

class Employee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: 'Oluwatosin Fetuga'
    }
  }
  render() {
    return (
      <div>
        <div>
          <h1 className='rule dashhead'><span className='material-icons'>dashboard</span> Dashboard</h1>
          <div className='employee-dashboard'>
           <h3> Welcome {this.state.employee} </h3>
           
            <div className='rule dashboard'>
              <button><NavLink to={`${this.props.match.url}/profile`}> <i className='material-icons md-10'>edit</i> <span>Edit Profile</span></NavLink></button>
              <button><NavLink to={`${this.props.match.url}/gifs/get`}> <i className='material-icons md-10'>photo</i><span>My Gifs</span></NavLink> </button>
              <button><NavLink to={`${this.props.match.url}/articles/get`}><i className='material-icons md-10'></i><span>My Articles</span></NavLink></button>
              <button><NavLink to={`${this.props.match.url}/gifs`}><i className='material-icons md-10'>image</i><span>Post a Gif</span></NavLink></button>
              <button><NavLink to={`${this.props.match.url}/articles`}><i className='material-icons md-10'></i><span>Post an Article</span></NavLink></button>
              <button><i className='material-icons md-10'></i><span>Get Feeds</span></button>
            </div>
          </div>
          <div className='display'>  
          </div>
        </div>
        <Route path={`${this.props.match.path}/gifs`}> <PostGif /> </Route>
        <Route exact path={`${this.props.match.path}/articles`}> <PostArticle /></Route>
        <Route exact path={`${this.props.match.path}/articles/get`}> <Articles check={this.check} /></Route>
        <Route path={`${this.props.match.path}/articles/get/:id`}> <Article article={ls.get('singleArticle')} linked={'false'} /></Route>
      </div>
    )
  }
}

export default withRouter(Employee);
