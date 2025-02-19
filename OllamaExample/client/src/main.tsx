import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider} from 'react-router'
import { Letters } from './pages/Letters.tsx'
import { CreateLetter } from './pages/CreateLetter.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Letters />
      },
      {
        path: '/new',
        element: <CreateLetter />
      }
    ]
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
