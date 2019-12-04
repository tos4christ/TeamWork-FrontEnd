import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import './css/Home.css';
import { withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: 'Sign-in',
      route: '/'
    }
  }

  componentDidMount() {
    this.headerStateChange(this.state.route, this.state.logged)
  }
  headerStateChange = (route, logged) => {
    this.props.headerState(route, logged);
  }
  render() {
    return (  
      <div className='homepage'>
         
          <Route path='/' render={() => <Redirect to='/signin' />} />
        
      </div>
    );
  }

}

export default withRouter(Home);
