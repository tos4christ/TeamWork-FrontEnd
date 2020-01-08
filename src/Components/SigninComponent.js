import React from 'react';
import './CSS/SignIn.css';
import {withRouter} from 'react-router';
import ls from 'local-storage';

class SignIn extends React.Component {
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
      ls.set('userDetails', result.data.allDetails);
      ls.set('profile_pic', result.data.allDetails.profile_pic);
      this.setToken(result.data.token, result.data.userId, result.data.userName);
      if(this.admin.checked) {
        this.props.history.push('/api/v1/admin');
      } else if(this.emp.checked) {
        this.props.history.push('/api/v1/employee/feed');
      } 
    })
    .catch(e => console.error(e))
  }
  setToken = (token, userId, userName) => {
    ls.set('token', token);
    ls.set('userId', userId);
    ls.set('userName', userName);
    setTimeout(() => {
      this.props.history.push('/signout');
    }, 600000);
  }
  render() {
    return (
      <div className="signinBody"> 
        <form onSubmit={this.handleSubmission}>
            <h2>Sign In</h2>
            <label>
              <div className="signInput">  
                <input type="email" placeholder="type your email...." ref={(input) => this.email = input}></input> 
              </div>
            </label>
            <label>
              <div className="signInput"> 
                <input type="password" placeholder="type your password...." ref={(input) => this.password = input}></input> 
              </div>
            </label><br/>
            <label>
              <input type="radio" name='role' value='admin' ref={(input) => this.admin = input} required/><span> Admin</span>
              <input type="radio" name='role' value='employee' ref={(input) => this.emp = input} required/><span> Employee</span>
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
