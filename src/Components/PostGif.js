import React from 'react';

class PostGif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      imgClass: 'hidden'
    }
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
        <p> Gif Title</p>
        <input type='file' name='gifPost' ref={(input) => this.img = input} onChange={this.showImage} /><br />
        <img src={this.state.img} className={this.state.imgClass} alt='gif upload'/>
        <button className='button'> Upload </button>
      </div>

    );
  }

}

export default PostGif;
