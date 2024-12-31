import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
   <div className='mainDiv'>
    <div className='card'>
      <div className='password'><p>Password...</p></div>
      <div className='strength'>
        <div className='slider'></div>
        <button className='generate'>Generate</button>
      </div>
    </div>
   </div>
  )
}

export default App
