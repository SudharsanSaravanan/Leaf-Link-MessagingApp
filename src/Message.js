import React, { forwardRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Message.css';

const Message = forwardRef(({message, username}, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
      <Card className={isUser ? 'message__userCard': 'message__guestCard'}>
      <CardContent>
        <Typography 
        color="white" 
        variant="h5" 
        component="h2"
        >
          {!isUser && `${message.username || 'Unknown User'}: `} {message.message}
        </Typography>
      </CardContent>
      </Card>
    </div>
  )
})

export default Message