import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { About } from './pages/About.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about/:id',
    element: <About />,
  }
])


function Main() {
  return (
    <RouterProvider router={router} />
  )
}

createRoot(document.getElementById('root')!).render(
  <Main />,
)

// /user/id?tab=posts#
