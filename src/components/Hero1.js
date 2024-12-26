import React from 'react'

export default function Hero1() {
  return (
    <div>
      <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 style={{color:'white'}} className="mb-5 text-5xl font-bold">Revolucionando el Transporte en Chile</h1>
      <p style={{color:'white'}} className="mb-5">
      Busia.cl es una plataforma tecnológica innovadora que está transformando la forma en que las personas se desplazan en Chile.

      </p>
      <button className="btn btn-primary">Quiero saber más</button>
    </div>
  </div>
</div>
    </div>
  )
}
