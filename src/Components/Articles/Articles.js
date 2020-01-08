import React from 'react';
import Article from './Article';
import ls from 'local-storage';
import { withRouter } from 'react-router-dom';
import Sort from '../Logic/Sort';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: this.getAllArticles(),
      article: '',
      isLoaded: false,
      upper: 9,
      lower: 0,
      filterText: ''
    }
  }
  nextPage = () => {
    this.setState( prevState => {
      prevState.lower += 10;
      prevState.upper += 10;
      return {
        upper: prevState.upper,
        lower: prevState.lower
      }
    })
  }
  previousPage = () => {
    this.setState( prevState => {
      prevState.lower -= 10;
      prevState.upper -= 10;
      return {
        upper: prevState.upper,
        lower: prevState.lower
      }
    })
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
        prevState.isLoaded = true;
        return {
          article: prevState.article,
          isLoaded: prevState.isLoaded
        }
      });
    })
    .catch(e => console.error(e))
  }
  sort = (order) => {

  }
  filterArticle = () => {
    this.setState( prevState => {
      prevState.filterText = this.search.value;
      return {
        filterText: prevState.filterText
      }
    })
  }
  render() {
      let articles = [];
      if(this.state.isLoaded) {
        const articlePage = this.state.article.filter( (article, count) => count >= this.state.lower && count <= this.state.upper && article.title.includes(this.state.filterText))
        articlePage.forEach(article => articles.push(<Article article={article} key={article.id} />));
      }
    return (
      <div className='articles'>
        <div style={{display: 'flex'}}>
        <Sort sort={this.sort} />
        <input type='text' placeholder='search item by title' ref={input => this.search = input} className='searchBar' onChange={this.filterArticle} />
        </div>
        {articles} 
        {articles.length < 1 ? <h2>Start by Posting an Article or Gif photos</h2> : <div></div>} 
        <div>
          <input type='button' value='NEXT' onClick={this.nextPage}/>
          <input type='button' value='PREVIOUS' onClick={this.previousPage}/>
        </div>
      </div>
    );
  }
}

export default withRouter(Articles);
