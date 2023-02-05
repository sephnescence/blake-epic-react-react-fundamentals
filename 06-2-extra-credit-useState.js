// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // Kent didn't go this far in his solution. I technically started doing elements of the second bonus exercise
  const [username, setUsername] = useState('')
  const [error, setError] = useState(true)

  const handleSubmit = event => {
    event.preventDefault()

    onSubmitUsername(username)

    return false // Double prevent default :p
  }

  const handleChange = event => {
    const value = event.target.value

    const isValid = value === value.toLowerCase()
    setError(isValid ? '' : 'Username must be lower case')

    setUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          onChange={handleChange}
          type="text"
          value={username}
        />
      </div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
      {error !== '' ? (
        <div role={'alert'} style={{color: 'red'}}>
          {error}
        </div>
      ) : null}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
