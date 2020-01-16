import React from 'react';
import './CSS/SignIn.css';
import {withRouter} from 'react-router';
import ls from 'local-storage';
import { TextField, Typography, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Male'
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
      ls.set('userDetails', result.data.allDetails);
      ls.set('profile_pic', result.data.allDetails.profile_pic);
      this.setToken(result.data.token, result.data.userId, result.data.userName);
      if(this.admin.checked) {
        this.props.history.push('/api/v1/admin');
      } else if(this.employee.checked) {
        this.props.history.push('/api/v1/employee/feed');
      } 
    })
    .catch(e => console.error(e))
  }
  handleChange = e => {
    this.setState({value: e.target.value});
  }
  setToken = (token, userId, userName) => {
    ls.set('token', token);
    ls.set('userId', userId);
    ls.set('userName', userName);
    setTimeout(() => {
      this.props.history.push('/signout');
      ls.remove('token');
      ls.remove('userId');
      ls.remove('userName');
      ls.remove('profile_pic');
      ls.remove('userDetails');
    }, 600000);
  }
  render() {
    const { value } = this.state;
    return (
      <div className="signinBody"> 
        <div className="signinForm">
        <form onSubmit={this.handleSubmission} autoComplete="on">
            <div className='btn'>
            <Typography
            variant='h3'
            gutterBottom
            >  Sign In</Typography>  
            </div>
            <div className='inputDiv'>            
            <TextField
              type='email'
              variant='outlined'
              required
              inputRef={ input => this.email = input}
              autoFocus={true}
              label="Email"
              className='signInput'
              size='medium'
              
            />
            </div>
            <div className='inputDiv'>
            <TextField
              type='password'
              variant='outlined'
              required
              inputRef={(input) => this.password = input}
              label="Password"
              className='signInput'
              size='medium'
            />
            </div>

            <div>
            <FormControl component="fieldset">  
              <RadioGroup aria-label="role" name="roles" value={value} onChange={this.handleChange}>
                <FormControlLabel value="admin" control={<Radio />} label="Admin" labelPlacement='start' inputRef={input => this.admin = input} />
                {/* <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="(Disabled option)"
                /> */}
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">  
              <RadioGroup aria-label="role" name="roles" value={value} onChange={this.handleChange}>
                <FormControlLabel value="employee" control={<Radio />} label="Employee" labelPlacement='start' inputRef={input => this.employee = input} />
              </RadioGroup>
            </FormControl>
            
              {/* <input type="radio" name='role' value='admin' ref={(input) => this.admin = input} disabled required/><span> Admin</span>
              <input type="radio" name='role' value='employee' ref={(input) => this.emp = input} required/><span> Employee</span>
              <input type="submit" /> */}
            </div>
            <div className='btn'>
            <Button variant='outlined' color="secondary" type='submit'> Submit </Button>
            </div>
          </form> 
          </div>
      </div>
    )
  } 
}

export default withRouter(SignIn);
