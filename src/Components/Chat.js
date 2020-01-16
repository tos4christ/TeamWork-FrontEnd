import React from 'react';
import {withRouter} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Chat extends React.Component { 
  render() {  
    return (  
      
      <Container maxWidth="fixed">
        <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '100vh'}} >
         <div className='chat'>      
        <h2> Chat room</h2>
        <section className='user-name'>
          <input type='text' name='user-name'  />
        </section>
        <section className='feedback'>
          <section className='chat-room'></section>
        </section>
        <section className='message'>
          <input type='text' name='message' />
          <button onClick={this.chat} >Click</button>
        </section>
      </div>
      </Typography>
      </Container>     
    );
  }
}

export default withRouter(Chat);
