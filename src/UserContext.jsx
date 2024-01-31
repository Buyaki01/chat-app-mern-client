import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const UserContext = createContext({})

export const UserContextProvider = ({children}) => {
  const [username, setUsername] = useState(null)

  useEffect(() => {
    const userProfile = async () => {
      try {
        const response = await axios.get('/profile')

        if (response.data.userData && response.data.userData.username) {
          setUsername(response.data.userData.username)
        } else {
          console.error("Invalid response structure:", response.data)
        }
      } catch (error) {
        console.error("Error fetching user profile:", error)
      }
    }
    
    userProfile()
  }, [])

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  )
}