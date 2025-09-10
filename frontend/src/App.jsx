// src/App.jsx
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <svg width="600" height="200">
        <defs>
          <path id="curve" d="M50 150 Q300 -50 550 150" />
        </defs>
        <text width="600" fontSize="50" fill="white" fontFamily="'UnifrakturCook', cursive">
          <textPath href="#curve" startOffset="50%">
            LA DOLOROSA
          </textPath>
        </text>
      </svg>
    </div>
  )
}


export default App
