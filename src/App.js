import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Components/Header';
import Admin from './Components/Admin';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SignInComponent';
import Employee from './Components/Employee';
import SignOut from './Components/SignOut';

class App extends React.Component {
 
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch >
            <Route exact path='/' render={() => <Home /> }  />
            <Route path='/signout' render={() => <SignOut setHead={this.setOut} /> }  />
            <Route exact path='/api/v1/auth/signin' render={() => <SignIn setHead={this.setHead} /> }  />
            <Route path='/api/v1/admin' render={() => <Admin />} />          
            <Route path='/api/v1/employee' render={ () => <Employee />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
