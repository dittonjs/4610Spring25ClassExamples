import './App.css'
import { Link } from 'react-router';
import { useTitle } from './hooks/useTitle';

function App() {
  useTitle('Home')
  return (
    <>
      <h1>I am on the home page</h1>
      <div>
        <Link to="/about/10">About</Link>
      </div>
    </>
  )
}

export default App
