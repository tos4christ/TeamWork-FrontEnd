import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Components/Header';
import Admin from './Components/Admin';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SignInComponent';
import Employee from './Components/Employee';
import ls from 'local-storage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '/api/v1',
      logged: 'Login',
      token: ''
    }
  }
  componentDidMount() {
    this.setState((prevState) => {
      prevState.token = ls.get('token');
      return {
        token: prevState.token
      }
    })
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
  render() {
    return (
      <Router>
        <div className="App">
          <Header route={this.state.route} logged={this.state.logged} />
        
          <Switch >
            <Route exact path='/api/v1' render={() => <Home headerState={this.adjustState} /> }  />
            <Route exact path='/api/v1/auth/signin' render={() => <SignIn token={this.setToken} /> }  />
            <Route path='/api/v1/admin' render={() => <Admin headerState={this.adjustState} token={this.state.token} />} />          
            <Route path='/api/v1/employee' render={ () => <Employee token={this.state.token} />} />
          </Switch>
          
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
