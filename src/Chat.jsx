import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './Chat.css';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    const newSocket = io('http://localhost:5001');
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('message', (message) => {
        setMessages([...messages, message]);
      });
    }
  }, [socket, messages]);

  const sendMessage = async () => {
    if (socket && newMessage.trim() !== '' && user.trim() !== '') {
      try {
        await axios.post('http://localhost:5001/api/chat/send', { user, message: newMessage });
        socket.emit('message', `${user}: ${newMessage}`);
        setNewMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="m-0">Chat</h2>
        </div>
        <div className="card-body p-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {messages.map((message, index) => (
            <div key={index} className="bg-light p-2 mb-2 rounded">
              {message}
            </div>
          ))}
        </div>
        <div className="card-footer">
          <div className="input-group">
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Enter your name"
              className="form-control"
            />
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="form-control"
            />
            <div className="input-group-append">
              <button onClick={sendMessage} className="btn btn-success">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
