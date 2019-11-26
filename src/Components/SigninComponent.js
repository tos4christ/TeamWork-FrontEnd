import React from 'react';
import './css/SignIn.css';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  
  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div className="signinBody">         
      <div className="admin">
      <form>
          <h3>Admin Login</h3>
          <label>
            <p>Email</p>
            <input type="email" placeholder="type your email...."></input>
          </label>
          <label>
            <p>Password</p>
            <input type="password" placeholder="type your password...."></input>
          </label><br/>
          <label>
            <input type="submit" />
          </label>
        </form>
      </div>
      <div className="employee">
      <form>
          <h3>Employee Login</h3>
          <label>
            <p>Email</p>
            <input type="email" placeholder="type your email...."></input>
          </label>
          <label>
            <p>Password</p>
            <input type="password" placeholder="type your password...."></input>
          </label><br/>
          <label>
            <input type="submit" />
          </label>
        </form>
      </div>

  
      

      </div>
    )
  }
  
}

export default SignIn;
