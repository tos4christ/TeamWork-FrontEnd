import React from 'react';
import './css/SignIn.css';
import {withRouter} from 'react-router';
import ls from 'local-storage';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    }
  }
  handleSubmission = (e) => {
    e.preventDefault();
    const url = "https://teamworksng.herokuapp.com/api/v1/auth/signin";
    const data = {email: this.email.value, password: this.password.value}
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((result) => {
      this.setToken(result.data.token, result.data.userId);
      if(this.admin.checked) {
        this.props.history.push('/api/v1/admin');
      } else if(this.emp.checked) {
        this.props.history.push('/api/v1/employee');
      } 
    })
    .catch(e => console.error(e))
  }
  setToken = (token, userId) => {
    ls.set('token', token);
    ls.set('userId', userId)
  }
  render() {

    return (
      <div className="signinBody"> 
        <form onSubmit={this.handleSubmission}>
            <h2>Sign In</h2>
            <label>
              <input type="email" placeholder="type your email...." ref={(input) => this.email = input}></input>
            </label>
            <label>
              <input type="password" placeholder="type your password...." ref={(input) => this.password = input}></input>
            </label><br/>
            <label>
              <span><input type="radio" name='role' value='admin' ref={(input) => this.admin = input} required/> Admin</span>
              <span><input type="radio" name='role' value='employee' ref={(input) => this.emp = input} required/> Employee</span>
            </label><br />
            <label>
              <input type="submit" />
            </label>
          </form> 
      </div>
    )
  }
  
}

export default withRouter(SignIn);
