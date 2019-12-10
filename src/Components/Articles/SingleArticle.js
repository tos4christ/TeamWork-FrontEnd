import React from 'react';
import {withRouter} from 'react-router-dom';
import Article from './Article';
import ls from 'local-storage';

class SingleArticle extends React.Component {
  state = {
    article: ''
  }
  componentDidMount() {
    this.getAnArticles();
  }
  getAnArticles = () => {
    const id = this.props.match.params.id;
    const url = `https://teamworksng.herokuapp.com/api/v1/articles/${id}`;
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
        prevState.article = result.data;
        return {
          article: prevState.article
        }
      });
    })
    .catch(e => console.error(e))
  }
  render() {
    let article;
    if(this.state.article) {
      article = <Article article={this.state.article} />
    }
    return (
      <div> {article} </div>
    );
  }

}

export default withRouter(SingleArticle);
