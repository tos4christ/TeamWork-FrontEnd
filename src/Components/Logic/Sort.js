import React from 'react';
import {withRouter} from 'react-router-dom';

class Sort extends React.Component {

  componentDidMount() {
    console.log(this.select.value)
  }

  check = e => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div style={{margin: '5px 20px'}}>
        <label>Filter by Article Tag</label> <br />
        <select onChange={this.check} ref={ input => this.select = input}>
            <option></option>
            <option>Commerce</option>
            <option>Religion</option>
            <option>Science</option>         
        </select>
      </div>

    );
  }

}

export default withRouter(Sort);
