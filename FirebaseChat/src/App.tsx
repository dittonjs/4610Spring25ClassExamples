import { useState, useEffect } from 'react'
import { db } from './firebase';
import { ref, push, onValue } from 'firebase/database'
import './App.css'


interface Message {
  text: string;
  timestamp: number;
  id: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const messagesRef = ref(db, 'messages');
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.entries(data).map(([id, msg]: [string, any]) => ({
          ...msg,
          id
        }));
        setMessages(messageList.sort((a, b) => a.timestamp - b.timestamp));
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const messagesRef = ref(db, 'messages');
    await push(messagesRef, {
      text: newMessage,
      timestamp: Date.now()
    });
    setNewMessage('');
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="chat-input-form">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="chat-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  )
}

export default App
