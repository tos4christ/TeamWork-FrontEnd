import React from 'react';

class PostArticle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      article: '',
      articleClass: 'hidden'
    }
  }
  
  showArticle = () => {
    if(this.article) {
      this.setState((prevState) => {
        prevState.articleClass = 'seen';
        prevState.article = this.article;
        return {
          article: prevState.article,
          articleClass: prevState.articleClass
        }
      });
    } else if(!this.article) {
      this.setState({
        article: '',
        articleClass: 'hidden'
      })
    }
    
  }

  render() {
    
    return (
      <div className='articlePost'>
        <h3>Post an Article</h3>
        <label>
        <input type='text' name='title' placeholder='Title' />
        </label>
        <label>
        <textarea name='article' ref={(input) => this.article = input} onChange={this.showArticle} rows='20' cols='100' placeholder='Article' />
        </label><br />
        <button className='button'> Post Article</button>
      </div>

    );
  }

}

export default PostArticle;
