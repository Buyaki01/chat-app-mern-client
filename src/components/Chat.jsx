import { useEffect, useState } from "react"

const ChatPage = () => {
  const [ws, setWs] = useState(null)
  const [onlinePeople, setOnlinePeople] = useState([])

  const showOnlinePeople = (peopleArray) => {
    const uniqueUsernames = new Set()
    const uniquePeopleArray = peopleArray.filter(person => {
      if (uniqueUsernames.has(person.username)) {
        return false // Skip, as it's a duplicate
      }
      uniqueUsernames.add(person.username)
      return true
    })

    setOnlinePeople(uniquePeopleArray)
  }

  const handleMessage = (e) => {
    const messageData = JSON.parse(e.data)
    console.log(messageData)
    if (messageData?.online) {
      showOnlinePeople(messageData.online)
    }
  }

  useEffect(() => {
    const wsServerUrl = new WebSocket('ws://localhost:5000')
    setWs(wsServerUrl)
    wsServerUrl.addEventListener('message', handleMessage)
  }, [])

  return (
    <div className="flex h-screen">
      <div className="w-1/3">
        {onlinePeople.map((person) => (
          <div key={person.username}>{person.username}</div>
        ))}
      </div>
      <div className="flex flex-col bg-secondary w-2/3 p-2">
        <div className="flex-grow">messages with selected persons</div>
        <div className="flex">
          <input
            type="text"
            placeholder="Type your message here"
            className="bg-white flex-grow border rounded-sm p-2"
          />

          <button className="bg-lime-600 p-2 text-white rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatPage