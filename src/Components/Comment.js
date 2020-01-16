import React from 'react';
import ls from 'local-storage';

class Comment extends React.Component {
  state = {
    flag: '',
    up: 0,
    down: 0,
    status: '',
    id: this.props.Id
  }
  flag = () => {
    this.setState({flag: this.state.flag === '' ? 'flag' : ''})
  }
  removeComment = (id) => {
    this.props.removeComment(id);
  }
  deleteComment = () => {
    const commentId = this.props.comment.commentid;
    const Id = this.props.Id
    let res;
    if(this.props.type === 'gifs') {
      res = 'gifs';
    } else if (this.props.type === 'articles') {
      res = 'articles';
    }
    const url = `https://teamworksng.herokuapp.com/api/v1/${res}/${Id}/commented/${commentId}`;
    fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + ls.get('token')
      }
    })
    .then((res) => res.json())
    .then((result) => {
      this.removeComment(this.props.Id);
    })
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
  render() {
    const newDate = Date(this.props.comment.createdon)
    return (
      <div className='commentDiv'>
        <span>{this.props.comment.authorid} {this.props.comment.commentid} </span>
        <p>{this.props.comment.comment} </p>
        <span>{newDate}</span>
        <div className='icons'>
          <span onClick={this.countUp} ><i className="fas fa-thumbs-up fa-1x" />{this.state.up} </span>
          <span onClick={this.countDown}><i className="fas fa-thumbs-down fa-1x" />{this.state.down} </span>
          <span onClick={this.flag}><i className={`fas fa-flag fa-1x ${this.state.flag}`} /> </span>
          <span><i className="fas fa-comment fa-1x" /></span>
          <span onClick={this.deleteComment} ><i className="fas fa-minus-circle fa-1x"></i> </span>
        </div>
      </div>
    );
  }
}

export default Comment;
