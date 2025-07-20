import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div
      className="p-6 max-w-6xl flex gap-80 h-[65vh] w-[80vw] bg-black m-16 mx-auto rounded-2xl"
    >
      <div>
        <img className="w-2xl " src={assets.search_icon} alt="imm" />
      </div>
      <div>
        <div>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            quam soluta. Saepe soluta distinct
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            aliquid fugit voluptatem reiciendis aspernatur officia suscipit?
            Blanditiis quibusdam commodi animi ipsum esse, voluptatem labore
            atque amet! Commodi quaerat culpa exercitationem!
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default Banner
