import React from 'react';
import ls from 'local-storage';

class PostComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    }
  }

  handleSubmit = (e) => {
    const uri = this.props.item;
    const id = this.props.id
    e.preventDefault();
    const data = {
      comment: this.comment.value
    }
    const url = `https://teamworksng.herokuapp.com/api/v1/${uri}/${id}/comment`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+ ls.get('token')
      },
      mode: 'cors'
    })
    .then( res => res.json())
    .then ( response => {
      this.setState({display: ''})
      this.props.addComment(this.comment.value);
      this.comment.value = '';
    });
  }

  render() {
    return (
      <form className="comment" onSubmit={this.handleSubmit} style={{display: this.state.display}}>
        <h4> Leave a Comment </h4>
        <label>
          <input type='textarea' name='comment' column='50' placeholder='Leave a comments' ref={(input) => this.comment = input} required/>
        </label><br />
        <button type='submit'>Submit</button>
      </form>
    );

  }

}

export default PostComment;
