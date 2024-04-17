import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import About from './About'
import Footer from './Footer'

import useApp from '../../Context/AppContext.js';

const Landing = () => {

  const { state, dispatch } = useApp()

  return (
    <div className={state.theme === "dark" ? "dark" : "light"}>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Footer/>
    </div>
  )
}

export default Landing
