import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import './css/Home.css';
import home_Image from '../teams.jpg';

class Home extends React.Component {  
  render() {
    console.log(this.props.match.path)
    return (  
      <div className='container'>  
        {/* Start of first row */}    
        <div className='row'>
          <div className='col landing'>
            <div className='card border border-0 bk'>
              <div className='card-title'>
                <h1 className='text-header'> Start collaborating with your fellow colleagues </h1> 
              </div>
              <div className='card-body'>
                <p className='h2'>
                  <strong>C</strong>onnect with fellow work mate
                </p>
                
                <p>
                
                  {/* <h6>You can do the following on this page for now</h6> <br />
                  1) You can post an article for a starter, your article can have a title and body message <br />
                  2) You can post only gif images with a title <br />
                  3) You can delete your own articles and gifs <br />
                  4) You can delete your own comments <br />
                  5) You can make comments on articles and gifs posted by others <br />
                  6) You can view Articles and Gifs posted by others when you click on the feeds tab <br /> */}
                </p>
              </div>
              
              <button className='btn btn-dark'><Link to={`/api/v1/auth/signin`} className='text-white btn rounded'> SIgn in </Link> </button>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <img className='card-img-top' alt='home image' src={home_Image}>

              </img>
            </div>
          </div>
        </div>
        {/* End of first row */}
        {/* Start of second row */}
        <div className='row'>
          <div className='col'>

          </div>
        </div>
        {/* Start of second row */}
      </div>
    );
  }
}

export default withRouter(Home);
