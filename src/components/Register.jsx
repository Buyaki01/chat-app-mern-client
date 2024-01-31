import axios from 'axios'
import { useContext, useState } from 'react'
import { UserContext } from '../UserContext'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUsername: setLoggedInUsername } = useContext(UserContext)

  const registerUser = async (e) => {
    e.preventDefault()
    await axios.post('/register', { username, password })
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='shadow-2xl p-4'>
        <form className='w-72 mx-auto' onSubmit={registerUser}>
          <input 
            type='text' 
            placeholder='username' 
            className='block w-full rounded-sm p-2 mb-2 border'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input 
            type='password' 
            placeholder='password' 
            className='block w-full rounded-sm p-2 mb-2 border'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className='bg-primary text-white block w-full rounded-sm p-2'
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register