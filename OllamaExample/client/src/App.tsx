import './App.css'
import { Outlet } from 'react-router'

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
