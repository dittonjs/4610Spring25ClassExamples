import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type Message = {
  name: string;
  message: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    setMessages(messages => [...messages, { name: "You", message: prompt }]);
    setPrompt("");
    setLoading(true);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setMessages(messages => [...messages, { name: "AI", message: data.response.message.content }]);
    setLoading(false);
  }

  return (
    <>
      <div className="app">
        <div className="messages">
          {
            messages.map((message, i) => (
              <div key={i} className="message">
                <span>{message.name}:</span> {message.message}
              </div>
            ))
          }
          {loading && <div className="message">...</div>}
        </div>
        <div className='input'>
          <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)}/>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  )
}

export default App
