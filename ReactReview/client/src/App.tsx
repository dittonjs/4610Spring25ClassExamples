import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import { usePasswords } from './hooks/use_passwords';
import { useMousePosition } from './hooks/use_mouse_position';
import { Password } from './components/Password';



function App() {
  const [input, setInput] = useState('');
  const [savedInput, setSavedInput] = useState<string[]>([]);
  const fuddifiedInput = input.replace(/r/g, "w").replace(/R/g, "W")

  const position = useMousePosition();
  const [passwords, loadPasswords] = usePasswords();

  function onSave() {
    setSavedInput((savedInput) => ([input, ...savedInput]));
    setInput('');
  }

  return (
    <>
      <div>
        <input value={input} type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value);
        }}/>
        <button onClick={onSave}>Save</button>
        <div>{fuddifiedInput}</div>
        {
          savedInput.map((input, index) => (
            <div key={index}>{input}</div>
          ))
        }
        <div>
          {
            position && (
              <div>
                <div>X: {position.x}</div>
                <div>Y: {position.y}</div>
              </div>
            )
          }
        </div>
        <div>
          <button onClick={loadPasswords}>Generate New Passwords</button>
          {
            passwords.map((password) => (
              <Password key={password} password={password} onClick={() => {
                // load new password and replace in list
                console.log(passwords.indexOf(password))
              }}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
