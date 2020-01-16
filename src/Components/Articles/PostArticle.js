import React from 'react';
import ls from 'local-storage';
import { withRouter } from 'react-router-dom';

class PostArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: '',
      articleClass: 'hidden'
    }
  }
  handleSubmission = (e) => {  
    e.preventDefault()  ;
    const url = `https://teamworksng.herokuapp.com/api/v1/articles`;
    const data = {title: this.title.value, article: this.article.value, tag: this.select.value};
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + ls.get('token')
      }
    })
    .then( res => res.json())
    .then( response => {
      this.props.history.push(`/api/v1/employee/articles/get/${response.data.articleId}`);
    })
  }
  render() {
    return (
      <div className='articlePost'>
        <form onSubmit={this.handleSubmission}>
          <h3>Post an Article</h3>
          <label>
          <input type='text' name='title' placeholder='Title' ref={(input) => this.title = input}/>
          </label>
          <label>
            <p>Tag</p>
          <select ref={(input) => this.select = input}>
            <option> Commerce </option> <option> Finance </option> <option> Politics </option>
            <option> Science </option><option> Economy </option> <option> Religion </option>
          </select>
          </label> <br />
          <label>
          <textarea name='article' ref={(input) => this.article = input} rows='15' cols='100' placeholder='Article' />
          </label><br />
          <button className='button' type='submit'> Post Article</button>
        </form>
      </div>

    );
  }

}

export default withRouter(PostArticle);
