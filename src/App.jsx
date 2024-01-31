import axios from 'axios'
import './App.css'
import Register from './components/Register'

function App() {
  axios.defaults.baseURL = 'http://localhost:5000'
  axios.defaults.withCredentials = true

  return (
    <>
      <Register />
    </>
  )
}

export default App
