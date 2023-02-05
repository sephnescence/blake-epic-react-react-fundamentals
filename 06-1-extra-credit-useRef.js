// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  // Referring to https://reactjs.org/docs/hooks-reference.html#useref
  // Kent mentioned that he'd generally prefer to use what we did in 06-0-before-extra-credit
  const usernameRef = useRef(null)

  const handleSubmit = event => {
    event.preventDefault()

    const username = usernameRef.current.value
    onSubmitUsername(username)

    return false // Double prevent default :p
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" ref={usernameRef} type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
