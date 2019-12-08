import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Components/Header';
import Admin from './Components/Admin';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SignInComponent';
import Employee from './Components/Employee';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
        
          <Switch >
            <Route exact path='/api/v1' render={() => <Home /> }  />
            <Route exact path='/signout' render={() => <Redirect to='/api/v1/auth/signin' /> }  />
            <Route exact path='/api/v1/auth/signin' render={() => <SignIn /> }  />
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
