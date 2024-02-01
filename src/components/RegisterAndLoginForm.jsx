import axios from 'axios'
import { useContext, useState } from 'react'
import { UserContext } from '../UserContext'

const RegisterAndLoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('register')
  const { setUsername: setLoggedInUsername } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = isLoginOrRegister === 'register' ? 'register' : 'login'
    await axios.post(url, { username, password })
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='shadow-2xl p-4'>
        <form className='w-72 mx-auto' onSubmit={handleSubmit}>
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
            {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
          </button>

          <div className='text-center mt-2'>
            {isLoginOrRegister === 'register' && (
              <div>
                Already a member? 
                <button className='ml-2 text-primary hover:underline' onClick={() => setIsLoginOrRegister('login')}> Login here</button>
              </div>
            )}

            {isLoginOrRegister === 'login' && (
              <div>
                Have no account? 
                <button className='ml-2 text-primary hover:underline' onClick={() => setIsLoginOrRegister('register')}> Register here</button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterAndLoginForm