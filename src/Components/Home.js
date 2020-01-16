import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import './CSS/Home.css';

class Home extends React.Component {
  
  render() {
    console.log(this.props.match.path)
    return (  
      <div className='homepage'>      
        <h2> This is the home page</h2>
        <p> 
          <h4>Kindly Enter your user name and password and select Employee </h4> <br />
          <h6>You can do the following on this page for now</h6> <br />
          1) You can post an article for a starter, your article can have a title and body message <br />
          2) You can post only gif images with a title <br />
          3) You can delete your own articles and gifs <br />
          4) You can delete your own comments <br />
          5) You can make comments on articles and gifs posted by others <br />
          6) You can view Articles and Gifs posted by others when you click on the feeds tab <br />

        </p>
        <button><Link to={`/api/v1/auth/signin`}> Enter the Site</Link> </button>
      </div>
    );
  }
}

export default withRouter(Home);
