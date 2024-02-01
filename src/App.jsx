import axios from 'axios'
import './App.css'
import RegisterAndLoginForm from './components/RegisterAndLoginForm'
import { UserContext } from './UserContext'
import { useContext } from 'react'

function App() {
  axios.defaults.baseURL = 'http://localhost:5000'
  axios.defaults.withCredentials = true

  const {username} = useContext(UserContext)

  if (username) {
    return `${username} Logged in!`
  }

  return (
    <>
      <RegisterAndLoginForm />
    </>
  )
}

export default App
