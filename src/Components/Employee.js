import React from 'react';


class Employee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: 'Oluwatosin Fetuga'
    }
  }


  render() {

    return (
      <div>
        <div>
          <h1 className='rule dashhead'><span className='material-icons'>dashboard</span> Dashboard</h1>
          <div className='employee-dashboard'>
            <h3> Welcome {this.state.employee} </h3>
            <div>
              <button>Edit Profile</button>
              <button>Gifs</button>
              <button>Posts</button>
              <button>Post Gif</button>
              <button>Post Article</button>
            </div>
          </div>
        </div>
        



      </div>
    )
  }
}

export default Employee;
