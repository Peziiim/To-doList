import './App.css'
import { Login } from './pages/login/Login'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import { useEffect } from 'react'
function App() {
  useEffect(() => {
    
  }, [])
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
