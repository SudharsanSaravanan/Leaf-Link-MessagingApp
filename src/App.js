import React, { useEffect, useState, useRef } from 'react';
import { FormControl, Input } from '@mui/material';
import './App.css';
import Message from './Message';
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import db from './firebase';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import FlipMove from 'react-flip-move';
import SplashScreen from './SplashScreen';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [showApp, setShowApp] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);  // Small delay to ensure DOM has updated
  };

  useEffect(() => {
    const messagesRef = collection(db, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, snapshot => {
      const loadedMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        message: doc.data()
      }));
      setMessages(loadedMessages);
      scrollToBottom();
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    let name = prompt('Please enter your name');
    while (!name || name.trim() === '') {
      name = prompt('Name is required. Please enter your name');
    }
    setUsername(name);
    setShowApp(true);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (event) => {
    event.preventDefault();

    if (input.trim()) {
      const messagesRef = collection(db, 'messages');
      await addDoc(messagesRef, {
        username: username,
        message: input,
        timestamp: serverTimestamp()
      });

      setInput('');
      scrollToBottom();  // Explicit scroll after sending message
    }
  };

  if (!showApp) return null;

  return (
    <div className="App">
      <SplashScreen />
      <h2 className='app__welcome'>Hello {username}✨, Welcome to Leaf-Link.<br></br>"Stay rooted in connection, let every message bloom."</h2>
      <pre> </pre>
      <pre> </pre>
      <pre> </pre>
      <pre> </pre>

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
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
      <div ref={messagesEndRef} /> {/* Ensure this is at the very end */}
    </div>
  );
}

export default App;