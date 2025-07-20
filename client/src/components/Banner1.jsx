import React from 'react'
import { assets } from '../assets/assets'

const Banner1 = () => {
  return (
    
    <div
      className="bg-amber-500 p-6 max-w-6xl flex gap-80 h-[450px] w-[80vw] m-4 overflow-auto mx-auto rounded-2xl"
    >
      <div>
        <div>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            quam soluta. Saepe soluta distinctio reprehenderit sequi culpa
            nostrum illo doloremque architecto, aperiam facilis repellendus quia
            ea fugit ducimus officiis dolores!
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            aliquid fugit voluptatem reiciendis aspernatur officia suscipit?
          </p>
        </div>
      </div>
      <div>
        <img className="w-2xl" src={assets.search_icon} alt="imm" />
      </div>
    </div>
  )
}

export default Banner1
