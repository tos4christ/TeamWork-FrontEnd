import React from 'react';
import Gif from './Gif';

class Articles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gif: ''
    }
  }
  componentDidMount() {
    this.getGif();
  }
  getGif = () => {
    const url = "https://teamworksng.herokuapp.com/api/v1/gifs/29";
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + this.props.token
      }
    })
    .then((res) => res.json())
    .then((result) => {
      this.setState((prevState) => {
        prevState.gif = result.data;
        return {
          gif: prevState.gif
        }
      });
    })
    .catch(e => console.error(e))
  }

  render() {
    
    return (
      <div className='gifs'>
        <Gif gif={this.state.gif} />
      </div>

    );
  }

}

export default Gifs;
