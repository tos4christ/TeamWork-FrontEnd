import React from 'react';

class Gif extends React.Component {

  render() {
    
    return (
      <div className='gif'>
        <p> {this.props.gif.title}</p> 
        <img src={this.props.gif.url} alt='gif Post'></img>
        
        <div className='icons'>
          <span><i className="fas fa-thumbs-up fa-1x" /></span>
          <span><i className="fas fa-thumbs-down fa-1x" /></span>
          <span><i className="fas fa-flag fa-1x" /></span>
          <span><i className="fas fa-comment fa-1x" /></span>
        </div>

        
      </div>
    );
  }

}

export default Gif;
