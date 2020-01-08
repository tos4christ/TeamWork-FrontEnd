import React from 'react';
import ls from 'local-storage';

class Profile extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      start: this.getProfile(),
      profile: '',
      profilePic: '',
    }
  }
  getProfile = () => {
    const userId = ls.get('userId');
    const url = `https://teamworksng.herokuapp.com/api/v1/profile/${userId}`;
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + ls.get('token'),
      },
    })
    .then( res => res.json())
    .then( response => {
      // response.data contains message and imageUrl keys
      this.setState({profile: response.data.profile })
    })
    .catch(e => console.error(e))
  }
  uploadPic = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', e.target['image'].files[0] );
    const url = 'https://teamworksng.herokuapp.com/api/v1/profile';
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Authorization": "Bearer " + ls.get('token')
      },
      body: formData,
    })
    .then(res => res.json())
    .then(response => {
      ls.set('profile_pic', response.data.imageUrl);
      this.props.pp();
      this.pic.value = '';
    })
    .catch( e => console.error(e));
  }
  render() {
    const user = ls.get('userDetails');
    return (
      <div className='profile'>
        <h4>Profile</h4>
        <div>
          <p><strong>First Name:</strong>  {user.firstName} </p>
          <p><strong>Last Name:</strong> {user.lastName} </p>
          <p><strong>Gender:</strong> {user.gender} </p>
          <p><strong>Email:</strong> {user.email} </p>
          <p><strong>Address:</strong> {user.address || 'Lagos Nigeria'} </p>
          <p><strong>Department:</strong> {user.department} </p>
          <p><strong>Job Role:</strong> {user.jobRole} </p>
        </div>
        <div>
          <h4> Edit Profile</h4>
          <form encType="multipart/formdata" name="image" onSubmit={this.uploadPic}>
            <label>Upload profile pics</label>
            <input type='file' name='image' ref={ input => this.pic = input } onChange={this.setProfilePic} accept='image/**' ></input>
            <input type='submit' ></input>
          </form>
        </div>
      </div>
    )
  }
}

export default Profile;