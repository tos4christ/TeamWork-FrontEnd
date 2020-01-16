import React from 'react';
import Article from '../Articles/Article';
import Gif from '../Gifs/Gif';
import ls from 'local-storage';
import { TextField, List } from '@material-ui/core';


class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: this.getFeeds(),
      feeds: '',
      isLoaded: false,
      filterText: '',
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
        <div className='searchBar'>
          <TextField
            type='text'
            variant='outlined'
            inputRef={(input) => this.search = input}
            className='searchBar'
            placeholder='search item by title'
            onChange={this.filterArticle}
          />
        </div>
        
        {/* <input type='text'  ref={input => this.search = input} className='searchBar'  /> */}
        <List>
        {feedPage}
        </List>
        
      </div>
    )
  }

}

export default FeedPage;
