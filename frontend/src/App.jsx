import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   

  return (
    <>
    <div className ='connect'>
      <button>
        connect Metmask
      </button>
    </div>
    
    <div>
      <input type = "text " id = "inputField"/>
      <button id="outputButton">Entry Fee </button>
      <p id="output"></p>
      
    </div>
    <div>
      <button>
        enter Raffle
      </button>
    </div>
    <div className='navbar'>
    this is supposed to be a nav bar
    </div>
    
    

       
    </>
  )
}


export default App
