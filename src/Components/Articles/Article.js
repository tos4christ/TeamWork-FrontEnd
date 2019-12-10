import React from 'react';
import Comment from '../Comment';
import {withRouter, Link} from 'react-router-dom';
import ls from 'local-storage';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      up: 0,
      down: 0,
      flag: '',
      commentClass: 'hidden',
      id: 0,
      article: this.props.article,
      refresh: false
    }
    this.newArticle = ''
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
  componentDidMount() {
    this.setState({
      id: this.props.article.id,
      article: this.props.article
    });
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
  refresh = (id) => {
    this.props.refresh();    
  }
  delete = () => {
    const articleId = this.state.id
    const url = `https://teamworksng.herokuapp.com/api/v1/articles/${articleId}`;
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
      this.refresh();
    })
  }
  render() {
    const article = this.state.article;
    let comment = 0
    if(article.comments) {
      comment = article.comments.length;
      this.commentArray = [];
      const comments = article.comments.filter( (comment, count) => count <= 10)
      comments.forEach(comment => this.commentArray.push(<Comment comment={comment} key={comment.commentid} articleId={article.id} refresh={this.refresh} />));
    }
    return (
      <div className='article-container'>
        <div className='article'>
          <Link to={`${this.props.match.path}/${article.id}`}><h2>{article.title}</h2></Link>
          <p>{article.article }  <span> &nbsp; { article.id} </span> {article.tag? <span>&nbsp;  Tags: {article.tag}</span> : ''}</p> 
          
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
            {this.commentArray}
          </ul>
        </div>
        
      </div>
    );
  }

}

export default withRouter(Article);
