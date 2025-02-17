import React from 'react'
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import Footer from './Footer'

import useApp from '../../Context/AppContext.js';

const Landing = () => {

  const { state } = useApp()

  return (
    <div className={state.theme === "dark" ? "dark" : "light"}>
      <Helmet>
        <title>ProfileX - Create a Stunning GitHub Profile in Minutes</title>
        <meta name="description" content="Create a stunning GitHub profile with ProfileX! Generate a custom README.md showcasing your skills, projects, and social links." />
        <meta name="keywords" content="GitHub Profile, GitHub Readme, GitHub Markdown, Profile Readme, ProfileX" />
        <meta property="og:title" content="ProfileX - Create a Stunning GitHub Profile in Minutes" />
        <meta property="og:description" content="Generate a custom README.md for your GitHub profile with ProfileX. Showcase your skills, projects, and social links effortlessly." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://profilex.dev/logo.png" />
        <meta property="og:url" content="https://profilex.dev/" />
        <link rel="canonical" href="https://profilex.dev/" />
      </Helmet>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default Landing
