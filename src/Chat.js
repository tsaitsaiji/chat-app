import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      const message = {
        text: input,
        timestamp: new Date().toLocaleString() // 添加时间戳
      };
      socket.emit('chat message', message);
      setInput('');
    }
  };

  return (
    <body className='body'> 
    <div className='chat-container'>
      <h1>Chat App</h1>
      <form onSubmit={handleSubmit} className='form-container'>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" className='button'>Send</button>
      </form>
      <div className='message'>
        {messages.map((message, index) => (
         <div key={index} className='messgae'>
          <p> {message.text}  <small>{message.timestamp}</small></p>{/* 顯示時間戳 */}{/*只顯示消息文本*/}
          </div>
        ))}
      </div>
      
    </div>
    </body>
  );
}

export default Chat;