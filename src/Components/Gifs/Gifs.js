import React from 'react';
import Gif from './Gif';
import ls from 'local-storage';

class Gifs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: this.getAllGifs(),
      Gifs: '',
      isLoaded: false,
      upper: 9,
      lower: 0,
      filterText: '',
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
  getAllGifs = () => {
    const userId = ls.get('userId');
    const url = `https://teamworksng.herokuapp.com/api/v1/gifs/all/${userId}`;
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
        prevState.Gifs = result.data;
        prevState.isLoaded = true;
        return {
          Gifs: prevState.Gifs,
          isLoaded: prevState.isLoaded
        }
      });
    })
    .catch(e => console.error(e))
  }
  filterGif = () => {
    this.setState( prevState => {
      prevState.filterText = this.search.value;
      return {
        filterText: prevState.filterText
      }
    })
  }
  render() {
    let gifs = [];
      if(this.state.isLoaded) {
        const gifPage = this.state.Gifs.filter( (gif, count) => count >= this.state.lower && count <= this.state.upper && gif.title.includes(this.state.filterText));
        gifPage.forEach(gif => gifs.push(<Gif gif={gif} key={gif.id} />));
      }
    return (
      <div className='gifs'>
         <input type='text' placeholder='search item by title' ref={input => this.search = input} className='searchBar' onChange={this.filterGif} />
        {gifs}
        {gifs.length < 1 ? <h2>Start by Posting an Article or Gif photos</h2> : <div></div>}
        <div>
          <input type='button' value='NEXT' onClick={this.nextPage}/>
          <input type='button' value='PREVIOUS' onClick={this.previousPage}/>
        </div>
      </div>
    );
  }
}

export default Gifs;
