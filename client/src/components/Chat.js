import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit('chat message', input);
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
      <div className="bg-blue-600 text-white p-2 rounded-t-lg">
        <h3 className="text-lg font-semibold !text-white">Live Chat</h3>
      </div>
      <div className="flex-1 p-2 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2 p-2 bg-gray-100 rounded">
            {msg}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="p-2 border-t border-gray-300">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-l"
            placeholder="Type a message..."
          />
          <button type="submit" className="bg-blue-600 text-white !text-white p-2 rounded-r hover:text-white">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;