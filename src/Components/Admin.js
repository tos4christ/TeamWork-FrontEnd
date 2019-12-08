import React from 'react';
import './css/CreateEmployee.css';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Form from './Form';

class CreateEmployee extends React.Component {
  render() {
    return (
      <div>

        <h1 className='rule dashhead'><span className='material-icons'>dashboard</span> Dashboard</h1>
        <div className='rule dashboard'>
          <button> <i className='material-icons md-10'>edit</i><span> Edit Profile</span> </button>
          <button> <NavLink to='/admin/changePassword'><i className='material-icons md-10'>restore</i> <span> Change Password</span></NavLink> </button>
        
       <button><NavLink to={`${this.props.match.url}/createUser`}><i className='material-icons md-10'>how_to_reg</i> <span>New Employee</span></NavLink></button>
       <button><i className='material-icons md-10'>delete</i> <span> Delete Articles</span></button>
       <button><i className='material-icons md-10'>delete</i> <span> Delete Gifs</span> </button>
       <button><i className='material-icons md-10'>delete</i> <span> Delete Comments </span></button>
        </div>

        <Route path={`${this.props.match.url}/createUser`} component={Form} />  
      </div>
    );
  }
}

export default withRouter(CreateEmployee);
