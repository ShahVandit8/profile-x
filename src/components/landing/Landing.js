import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import Footer from './Footer'

import useApp from '../../Context/AppContext.js';

const Landing = () => {

  const { state } = useApp()

  return (
    <div className={state.theme === "dark" ? "dark" : "light"}>
      <Navbar />
      <Hero />
      <Features />
      <Footer/>
    </div>
  )
}

export default Landing
