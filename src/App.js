import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Components/Header';
import Admin from './Components/Admin';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SignInComponent';
import Employee from './Components/Employee';
import ls from 'local-storage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setHeader: false
    }
  }
  componentDidMount() {
    if (ls.get('token')) {
      this.setState({setHeader: true})
    }
  }
  reset = () => {
    this.setState((prevState) => {
      prevState.setHeader = true;
      return {
        setHeader: prevState.setHeader
      }
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header set={this.state.setHeader} />
        
          <Switch >
            <Route exact path='/api/v1' render={() => <Home /> }  />
            <Route exact path='/signout' render={() => <Redirect to='/api/v1/auth/signin' /> }  />
            <Route exact path='/api/v1/auth/signin' render={() => <SignIn setHeader={this.reset} /> }  />
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
