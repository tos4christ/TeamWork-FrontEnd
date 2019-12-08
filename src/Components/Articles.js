import React from 'react';
import Article from './Article';
import ls from 'local-storage';
import { withRouter } from 'react-router-dom';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: ''
    }
  }
  
  componentDidMount() {
    this.getAllArticles();
  }
  refresh = () => {
    this.getAllArticles();
  }
  getAllArticles = () => {
    const userId = ls.get('userId');
    const url = `https://teamworksng.herokuapp.com/api/v1/articles/all/${userId}`;
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + ls.get('token')
      }
    })
    .then((res) => res.json())
    .then((result) => {
      this.setState((prevState) => {
        prevState.article = result.data.articles;
        return {
          article: prevState.article
        }
      });
    })
    .catch(e => console.error(e))
  }
  render() {
      let articles = []
      if(this.state.article) {
        const articlePage = this.state.article.filter( (article, count) => count <= 10)
        articlePage.forEach(article => articles.push(<Article article={article} key={article.id} refresh={this.refresh} linked={'true'} />));
      }
    return (
      <div className='articles'>
        {articles}
      </div>
    );
  }
}

export default withRouter(Articles);
