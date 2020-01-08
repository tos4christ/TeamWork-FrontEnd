import React from 'react';
import ls from 'local-storage';
import Comment from '../Comment';
import { Link, withRouter } from 'react-router-dom';
import PostComment from '../PostComment';

class Gif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      up: 0,
      down: 0,
      flag: '',
      commentClass: 'hidden',
      id: this.props.gif.id,
      gif: this.props.gif,
      comments: this.props.gif.comments,
      display: ''
    }
  }
  reveal = () => {
    this.setState({
      commentClass: this.state.commentClass === 'seen' ? 'hidden' : 'seen'
    });
  }
  flag = () => {
    this.setState({flag: this.state.flag === '' ? 'flag' : ''})
  }
  countUp = () => {
    this.setState((prevState) => {
      prevState.up = 1;
      return {
        up: prevState.up
      }
    });
  }
  countDown = () => {
    this.setState((prevState) => {
      prevState.down = 1;
      return {
        down: prevState.down
      }
    });
  }
  removeComment = (id) => {
    const comm = this.state.comments.filter( comment => comment.commentid !== id);
    this.setState(prevState => {
      prevState.comments = comm;
      return {
        comments: prevState.comments
      }
    });
  }
  delete = () => {
    const gifId = this.state.id
    const url = `https://teamworksng.herokuapp.com/api/v1/gifs/${gifId}`;
    fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + ls.get('token')
      }
    })
    .then((res) => res.json())
    .then(() => {
      this.setState(prevState => {
        prevState.display = 'none';
        return {
          display: prevState.display
        }
      });
    })
    .catch( e => console.error(e));
  }
  addComment = (comment) => {
    let comments = {};
    if(this.state.comments === undefined) {
      comments.commentid = 1;
      comments.comment = comment;
      this.setState({comments: [comments]})
    } else {
      comments.commentid = this.state.comments.length + 1;
      comments.comment = comment;
      this.setState(prevState => {
        const newComm = this.state.comments;
        newComm.push(comments);
        prevState.comments = newComm;
        return {
          comments: prevState.comments
        }
      })
    }
  }
  render() {
    const gif = this.state.gif;
    const Comments = this.state.comments;
    let comment = 0
    if(Comments) {
      comment = Comments.length;
      this.commentArray = [];
      const comments = Comments.filter( (comment, count) => count <= 10)
      comments.forEach(comment => this.commentArray.push(<Comment comment={comment} key={comment.commentid} Id={comment.commentid} removeComment={this.removeComment} type='gifs' />));
    }
    
    return (
      <div className='gif-container' style={{display: this.state.display}}>
        <div className='gif'>
        { this.props.match.params.id ? <h2> {gif.title}</h2> : <Link to={`${this.props.match.path}/${gif.id}`}> <h2> {gif.title}</h2>  </Link> }
        <img src={gif.url} alt='gif Post'></img>
        <p> Gif by {gif.author} </p>
        </div>
        <div className='icons'>
          <span onClick={this.countUp} ><i className="fas fa-thumbs-up fa-1x" />{this.state.up} </span>
          <span onClick={this.countDown}><i className="fas fa-thumbs-down fa-1x" />{this.state.down} </span>
          <span onClick={this.flag}><i className={`fas fa-flag fa-1x ${this.state.flag}`} /> </span>
          <span onClick={this.reveal}><i className="fas fa-comment fa-1x" />{comment}</span>
          <span onClick={this.delete} ><i className="fas fa-minus-circle fa-1x"></i> </span>
        </div>
        <div className={this.state.commentClass+` comments`}>
          <ul>
            <PostComment item='gifs' id={gif.id} addComment={this.addComment} />
            {this.commentArray}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Gif);
