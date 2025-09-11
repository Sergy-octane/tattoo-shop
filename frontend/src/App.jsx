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
        <svg className="w-full max-w-4xl h-auto relative" viewBox="0 0 800 200">
          <defs>
            <path id="curve" d="M50 150 Q400 -50 750 150" />
          </defs>
          <text fontSize="35" fontFamily="'UnifrakturCook', cursive">
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              <tspan fill="white">LA DOL </tspan>
              <tspan fill="black">OROSA</tspan>
            </textPath>
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
