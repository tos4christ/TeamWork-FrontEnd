import React from 'react';
import './css/SignIn.css';
import {withRouter} from 'react-router';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: ''
    }
  }
  componentDidMount() {
    // fetch("https://teamworksng.herokuapp.com/test")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       console.log( 'the result' ,result);
    //       this.setState({
    //         isLoaded: true,
    //         items: result
    //       });
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
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
      console.log(result, 'the result');
      this.setState((prevState) => {
        prevState.token = result.data.token;
        return {
          token: prevState.token
        }
      });
      this.setToken(this.state.token);
      if(this.admin.value) {
        this.props.history.push('/admin');
      } else if(this.emp.value) {
        this.props.history.push('/employee');
      }
      
    })
    .catch(e => console.error(e))
  }
  setToken = (token) => {
    this.props.token(token);
  }
  render() {
    // console.log(this, 'signin');
    // if(this.state.token) {
    //   return <Redirect to='/admin' />;
    // }
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
