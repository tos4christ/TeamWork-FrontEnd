import React from 'react';
import { Link } from 'react-router-dom';
import ls from 'local-storage';

class SignOut extends React.Component { 
  componentDidMount() {
    ls.remove('token');
    ls.remove('userId');
    ls.remove('userName');
    ls.remove('profile_pic');
    ls.remove('userDetails');
  }
  render() {
    return (
      <div className='signout'>
        <Link to='/api/v1/auth/signin' > <h2>Go back home</h2>  </Link>
      </div>
    )
  }
}

export default SignOut;