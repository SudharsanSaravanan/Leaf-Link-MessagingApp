import React, { useEffect, useState } from 'react';
import { FormControl, Input } from '@mui/material';
import './App.css';
import Message from './Message';
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import db from './firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const messagesRef = collection(db, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(snapshot.docs.map(doc =>({id: doc.id, message: doc.data()})));
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []);

  const sendMessage = async (event) => {
    event.preventDefault();
    
    // Only send message if input is not empty
    if (input.trim()) {
      const messagesRef = collection(db, 'messages');
      await addDoc(messagesRef, {
        username: username, 
        message: input,
        timestamp: serverTimestamp()
      });
      
      // Explicitly clear the input
      setInput('');
    }
  };

  return (
    <div className="App">
      <img src="https://cdn2.iconfinder.com/data/icons/social-aquicons/512/Email.png" width={100} height={100} alt='messenger' />
      <h1 className='app__msg'>🍃Leaf-Link🍃</h1>
      <h2 className='app__welcome'>Hello {username}✨</h2>

      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input 
            className='app__input' 
            placeholder="Enter a message..." 
            value={input} 
            onChange={event => setInput(event.target.value)}
          />
          <IconButton 
            className='app__iconButton' 
            disabled={!input} 
            variant="contained" 
            type='submit' 
            onClick={sendMessage}
          >
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>
      
      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;