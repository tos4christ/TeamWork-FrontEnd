import React from 'react';
import ls from 'local-storage';
import { withRouter } from 'react-router-dom';

class PostGif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      imgClass: 'hidden'
    }
  }
  postGif = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', e.target['gifPost'].files[0] );
    formData.append('title', e.target['title'].value );
    const url = 'https://teamworksng.herokuapp.com/api/v1/gifs';
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Authorization": "Bearer " + ls.get('token')
      },
      body: formData
    })
    .then(res => res.json())
    .then(response => {
      this.props.history.push(`/api/v1/employee/gifs/get`);
    })
    .catch( e => console.error(e))
  }
  showImage = (e) => {
    if(e.target.files[0]) {
      const path = URL.createObjectURL(e.target.files[0]);
      this.setState((prevState) => {
        prevState.img = path;
        prevState.imgClass = 'seen';
        return {
          img: prevState.img,
          imgClass: prevState.imgClass
        }
      });
    } else if(!e.target.files[0]) {
      this.setState({
        img: '',
        imgClass: 'hidden'
      })
    }
    
  }

  render() {
    
    return (
      <div className='gifPost'>
        <form encType="multipart/form-data" name="GifPost" onSubmit={this.postGif}>
          <p> Gif Title</p>
          <input type='text' name='title' placeholder='Gif Title' id='gifTitle'></input>
          <input type='file' name='gifPost' ref={(input) => this.img = input} onChange={this.showImage} accept="image/gif" /><br />
          <img src={this.state.img} className={this.state.imgClass} alt='gif upload'/>
          <button className='button'> Upload </button>
        </form>
      </div>

    );
  }

}

export default withRouter(PostGif);
