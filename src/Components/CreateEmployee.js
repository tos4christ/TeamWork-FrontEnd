import React from 'react';
import './css/CreateEmployee.css';

class CreateEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '', lastName: '', email: '', password: '', gender: '', jobRole: '',
      department: '', address: '',
    }
  }

  render() {
    return (
      <form className="create">
        <label>
          <p>First Name</p>
          <input type='text' name='firstName'/>
        </label>
        <label>
          <p>last Name</p>
          <input type='text' name='lastName'/>
        </label>
        <label>
          <p>Email</p>
          <input type='email' name='email'/>
        </label>
        <label>
          <p>Temporary Password</p>
          <input type='password' name='password'/>
        </label>
        <label>
          <p>Gender</p>
          <select name='gender'>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </label>
        <label>
          <p>Job Role</p>
          <input type='text' name='jobRole'/>
        </label>
        <label>
          <p>Department</p>
          <input type='text' name='department'/>
        </label>
        <label>
          <p>Address</p>
          <input type='text' name='address'/> 
        </label>
      </form>
    );
  }
}

export default CreateEmployee;
