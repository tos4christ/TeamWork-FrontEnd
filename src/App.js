import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Components/Header';
import Admin from './Components/Admin';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SignInComponent';
import Employee from './Components/Employee';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '/',
      logged: 'Login',
      token: ''
    }
  }

  adjustState = (route, logged) => {
    this.setState((prevState) => {
      prevState.route = route;
      prevState.logged = logged;
      return {
        route: prevState.route,
        logged: prevState.logged
      }
    })
  }
  setToken = (token) => {
    this.setState((prevState) => {
      prevState.token = token;
      return {
        token: prevState.token
      }
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header route={this.state.route} logged={this.state.logged} />
        
          <Switch >
            <Route exact path='/' render={() => <Home headerState={this.adjustState} /> }  />
            <Route exact path='/signin' render={() => <SignIn token={this.setToken} /> }  />
            <Route path='/admin' render={() => <Admin headerState={this.adjustState} token={this.state.token} />} />          
            <Route path='/employee' render={ () => <Employee />} />
          </Switch>
          
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
