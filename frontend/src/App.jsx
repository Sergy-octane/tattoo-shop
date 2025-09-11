// src/App.jsx
import React from 'react'

function App() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative flex justify-center items-center py-24 h-64">
        {/* Fondo dividido SOLO detrás del título */}
        <div className="absolute top-0 w-full h-full flex">
          <div className="w-1/2 bg-black"></div>
          <div className="w-1/2 bg-white"></div>
        </div>

        {/* Texto curvado */}
        <svg className="w-full max-w-4xl h-auto" viewBox="0 0 800 150">
    <rect x="0" y="0" width="400" height="100" fill="black" />
    <rect x="400" y="0" width="400" height="100" fill="white" />
    <defs>
    <path id="curve" d="M50 150 Q400 -50 750 200" />
    </defs>
    <text fontSize="35" fontFamily="'UnifrakturCook', cursive">
    <textPath href="#curve" startOffset="50%" textAnchor="middle">
      <tspan fill="white">L A D O L </tspan>
      <tspan fill="black">O R O S A</tspan>
      </textPath>
      </text>
      {/* Texto debajo */}
  <text x="50%" y="80" fontSize="10" fontFamily="'UnifrakturCook', cursive" textAnchor="middle" fill="gray">
    C L A N 
  </text>

  <text x="50%" y="95" fontSize="16" fontFamily="'UnifrakturCook', cursive" textAnchor="middle" fill="gray">
    1 .  3 . 1 . 2
  </text>
      </svg>

      </div>

      {/* CONTENIDO */}
      <div className="p-8">
        <p className="text-black text-lg">
          Aquí va el contenido de tu página.
        </p>
      </div>
    </div>
  )
}

export default App
