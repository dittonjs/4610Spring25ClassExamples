import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router'

type Message = {
  name: string;
  message: string;
}

function App() {

  return (

    <div className="app">
      <div className="title">Letters of recommendation</div>
      <div className='container'>
        <Outlet />
      </div>
    </div>

  )
}

export default App
