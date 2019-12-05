import React from 'react';
import Article from './Article';
import ls from 'local-storage';
import { conditionalExpression } from '@babel/types';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: ''
    }
  }
  componentDidMount() {
    this.getArticle();
  }
  refresh = () => {
    this.getArticle();
  }
  getArticle = () => {
    const url = "https://teamworksng.herokuapp.com/api/v1/articles/3";
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
      this.setState({article: result.data });
    })
    .catch(e => console.error(e))
  }

  render() {
    return (
      <div className='articles'>
        <Article article={this.state.article} refresh={this.refresh} />
        <Article article={this.state.article} />
      </div>
    );
  }

}

export default Articles;
