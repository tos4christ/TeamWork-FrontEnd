import React from 'react';
import {withRouter} from 'react-router-dom';
import Gif from './Gif';
import ls from 'local-storage';

class SingleGif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: this.getAGif(),
      gif: '',
      isLoaded: false
    }
  }
  getAGif = () => {
    const id = this.props.match.params.id;
    const url = `https://teamworksng.herokuapp.com/api/v1/gifs/${id}`;
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
        prevState.gif = result.data;
        prevState.isLoaded = true;
        return {
          gif: prevState.gif,
          isLoaded: prevState.isLoaded
        }
      });
    })
    .catch(e => console.error(e))
  }
  render() {
    let gif;
    if(this.state.isLoaded) {
      gif = <Gif gif={this.state.gif} />
    }
    return (
      <div> {gif} </div>
    );
  }

}

export default withRouter(SingleGif);
