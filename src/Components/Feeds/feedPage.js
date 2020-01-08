import React from 'react';
import Article from '../Articles/Article';
import Gif from '../Gifs/Gif';
import ls from 'local-storage';

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: this.getFeeds(),
      feeds: '',
      isLoaded: false,
      filterText: ''
    }
  }
  getFeeds = () => {
    const url = `https://teamworksng.herokuapp.com/api/v1/feed`;
    fetch(url, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + ls.get('token')
      }
    })
    .then( res => res.json())
    .then( response => {
      this.setState({feeds: response.data});
    })
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
    let feedPage = [];
    if(this.state.feeds) {
      this.state.feeds.forEach(element => {
        if(element.url && element.title.includes(this.state.filterText)) feedPage.push(<Gif gif={element} key={element.id} />);
        if(element.article && element.title.includes(this.state.filterText)) feedPage.push(<Article article={element} key={element.id} />);
      });
    }
    return (
      <div> 
        <input type='text' placeholder='search item by title' ref={input => this.search = input} className='searchBar' onChange={this.filterArticle} />
        {feedPage}
      </div>
    )
  }

}

export default FeedPage;
