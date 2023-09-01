import React from 'react'

function Image() {
  const externalImage = "./img/laptop.jpeg"
  return (
    <div class="my-20 max-w-xl mx-auto h-96 bg-slate-300 bg-contain bg-no-repeat bg-center rounded-2xl border-slate-200 shadow-xl shadow-teal-300 overflow-hidden border-8 flex " 
    style={{
      backgroundImage: `url(${externalImage})`
  }}>
    <div class="w-[200px] h-[200px] bg-white/30 m-auto backdrop-blur-md rounded-full "></div>
  </div>
  )
}

export default Image