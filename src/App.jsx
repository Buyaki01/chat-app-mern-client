import axios from 'axios'
import './App.css'
import RegisterAndLoginForm from './components/RegisterAndLoginForm'
import { UserContext } from './UserContext'
import { useContext } from 'react'
import HomePage from './components/HomePage'

function App() {
  axios.defaults.baseURL = 'http://localhost:5000'
  axios.defaults.withCredentials = true

  const {username} = useContext(UserContext)

  return (
    <>
      {username ? (
        <HomePage username={username} />
      ) : (
        <RegisterAndLoginForm />
      )}
    </>
  )
}

export default App
