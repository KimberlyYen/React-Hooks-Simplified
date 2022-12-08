import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [resourceType, setResourceType] = useState('posts')

  useEffect(() => {
    console.log('resource changed')

    return () => {
      console.log('return from resource change')
    }
    
  }, [resourceType])

  
  return (
    <>
      <div>
        <button onClick={() => setResourceType('post')} > Post </button>
        <button onClick={() => setResourceType('users')} > Users </button>
        <button onClick={() => setResourceType('comments')} > Comments </button>
      </div>
      <h1> {resourceType} </h1>

    </>
  )
}

export default App