import axios from 'axios'
import './App.css'
import Register from './components/Register'
import { UserContext } from './UserContext'
import { useContext } from 'react'

function App() {
  axios.defaults.baseURL = 'http://localhost:5000'
  axios.defaults.withCredentials = true

  const {username} = useContext(UserContext)

  if (username === null) {
    return 'Loading...'
  }

  if (username) {
    return `${username} Logged in!`
  }

  return (
    <>
      <Register />
    </>
  )
}

export default App
