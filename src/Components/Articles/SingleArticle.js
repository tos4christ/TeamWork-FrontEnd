import React from 'react';
import {withRouter} from 'react-router-dom';
import Article from './Article';
import ls from 'local-storage';

class SingleArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: this.getAnArticle(),
      article: '',
      isLoaded: false
    }
  }
  getAnArticle = () => {
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
        prevState.isLoaded = true;
        return {
          article: prevState.article,
          isLoaded: prevState.isLoaded
        }
      });
    })
    .catch(e => console.error(e))
  }
  render() {   
    let article;
    if(this.state.isLoaded) {
      article = <Article article={this.state.article} />
    }
    return (
      <div> {article} </div>
    );
  }

}

export default withRouter(SingleArticle);
