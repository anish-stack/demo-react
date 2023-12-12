import React from 'react'
import Hero from './Components/Hero/Hero';
import Service  from './Components/Service/Service'
import About from './Components/About/About';
import Contact from './secondCompnet/Conatct/Caontact';

const Home = () => {
  return (
    <div>

        <Hero/>
        <About/>
        <Service/>
        <Contact/>

    </div>
  )
}

export default Home