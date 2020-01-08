import React from 'react';
import ls from 'local-storage';

class Form extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value,
      gender: this.gender.value,
      jobRole: this.jobRole.value,
      department: this.department.value,
      address: this.address.value
    }
    const url = 'https://teamworksng.herokuapp.com/api/v1/auth/create-user';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+ ls.get('token')
      },
      mode: 'cors'
    })
    .then( res => res.json())
    .then ( response => {
      console.log(response);
      const path = '/api/v1/admin';
      this.props.history.push(path)
    });

  }

  render() {

    return (
      <form className="create" onSubmit={this.handleSubmit}>
            <h3> Create New Employee Profile</h3>
            <label>
              <input type='text' name='firstName' placeholder='First Name' ref={(input) => this.firstName = input}/>
            </label><br />
            <label>
              <input type='text' name='lastName' placeholder='Last Name' ref={(input) => this.lastName = input} required/>
            </label><br />
            <label>
              <input type='email' name='email' placeholder='Email' ref={(input) => this.email = input} required/>
            </label><br />
            <label>
              <input type='password' name='password' placeholder='Temporary Password' ref={(input) => this.password = input} required/>
            </label><br />
            <label>
              <p>Gender</p>
              <select name='gender' ref={(input) => this.gender = input}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
            </label><br /><br />
            <label>
              <input type='text' name='jobRole' placeholder='Job Role' ref={(input) => this.jobRole = input} required/>
            </label><br />
            <label>
              <input type='text' name='department' placeholder='Department' ref={(input) => this.department = input} required/>
            </label><br />
            <label>
              <input type='text' name='address' placeholder='Address' ref={(input) => this.address = input} required/> 
            </label> <br />
            <label>
              <input type='submit' value='Submit' />
            </label>
          </form>
    );

  }

}

export default Form;
