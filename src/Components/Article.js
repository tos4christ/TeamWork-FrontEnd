import React from 'react';
import Comment from './Comment';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      up: 0,
      down: 0,
      flag: '',
      commentClass: 'hidden'
    }
  }
  countComment = () => {
    if(this.props.article.comments) {
      console.log('seen')
      const count = this.props.article.comments.length
      this.setState({
        comment: count
      })
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
      prevState.up += 1;
      return {
        up: prevState.up
      }
    });
  }
  countDown = () => {
    this.setState((prevState) => {
      prevState.down += 1;
      return {
        down: prevState.down
      }
    });
  }
  refresh = () => {
    this.props.refresh();
  }
  render() {
    let comment = 0
    if(this.props.article.comments) {
      comment = this.props.article.comments.length;
      this.commentArray = [];
      const comments = this.props.article.comments.filter( (comment, count) => count <= 10)
      comments.forEach(comment => this.commentArray.push(<Comment comment={comment} key={comment.commentid} articleId={this.props.article.id} refresh={this.refresh} />));

    }
    return (
      <div className='article-container'>
        <div className='article'>
      
          <h2>{this.props.article.title}</h2>
          <p>{this.props.article.article }  <span> { this.props.article.id} </span></p> 
        </div>
        <div className='icons'>
          <span onClick={this.countUp} ><i className="fas fa-thumbs-up fa-1x" />{this.state.up} </span>
          <span onClick={this.countDown}><i className="fas fa-thumbs-down fa-1x" />{this.state.down} </span>
          <span onClick={this.flag}><i className={`fas fa-flag fa-1x ${this.state.flag}`} /> </span>
          <span onClick={this.reveal}><i className="fas fa-comment fa-1x" />{comment}</span>
        </div>
        <div className={this.state.commentClass+` comments`}>
          <ul>
            {this.commentArray}
          </ul>
        </div>
      </div>
    );
  }

}

export default Article;
