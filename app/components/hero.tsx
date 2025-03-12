import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='image-container'>
            <img className='img-cat'  src='https://images.pexels.com/photos/674562/pexels-photo-674562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
        </div>
        <div className='hero-text'>
            <h1>Catch 'Em All!</h1>
            <h6>Explore with Our Interactive Pokedex</h6>
            <button className='hero-btn'>View Pokedex</button>
        </div>
    </div>
  )
}

export default Hero
