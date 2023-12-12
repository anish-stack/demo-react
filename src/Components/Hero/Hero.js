import React from 'react'
import Image from './Hexa Game.jpg'
const Hero = () => {

    const imageTwo ="https://img.freepik.com/free-photo/christmas-still-life-arrangement-with-copy-space_23-2149174210.jpg?size=626&ext=jpg&ga=GA1.1.745072183.1701081957&semt=ais"

  return (
    <div className="hero-conatiner">
        <div className="hero-img">
            <img src={imageTwo} alt="" />
        </div>
        <div className='hero-content'>
            <h2>Happ Chrsmas </h2>
            <button type="">Hello</button>
        </div>
    </div>
  )
}

export default Hero