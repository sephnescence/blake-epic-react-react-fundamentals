// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const handleSubmit = e => {
    e.preventDefault()
    // console.log(e.target)
    // console.dir(e.target) -- Never knew this was a thing, but it allows you to also inspect e.target.elements
    // e.target.elements is of type HTMLFormControlsCollection
    // const username = e.target.elements[0].value // What was suggested to use in the code example
    const username = e.target.elements.usernameInput.value // What was shown in the video
    onSubmitUsername(username)

    return false // Double prevent default :p
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" />
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
