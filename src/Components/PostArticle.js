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
    const data = {title: this.title.value, article: this.article.value};
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
      this.props.history.push('/api/v1/employee/articles/get');
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
          <textarea name='article' ref={(input) => this.article = input} rows='20' cols='100' placeholder='Article' />
          </label><br />
          <button className='button' type='submit'> Post Article</button>
        </form>
      </div>

    );
  }

}

export default withRouter(PostArticle);
