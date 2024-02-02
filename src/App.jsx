import axios from 'axios'
import './App.css'
import RegisterAndLoginForm from './components/RegisterAndLoginForm'
import { UserContext } from './UserContext'
import { useContext } from 'react'
import ChatPage from './components/Chat'

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

function App() {

  const {username} = useContext(UserContext)

  return (
    <>
      {username ? (
        <ChatPage username={username} />
      ) : (
        <RegisterAndLoginForm />
      )}
    </>
  )
}

export default App
