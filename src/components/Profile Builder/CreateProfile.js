import React from 'react'
import { Helmet } from 'react-helmet-async';
import "../../styles/profilebuilder.css"
import "../../styles/icons.css"
import Main from './Main'

import useApp from '../../Context/AppContext.js';

const CreateProfile = () => {

  const { state } = useApp()

  return (
    <div className="profile-container">
      <Helmet>
        <title>Create Your GitHub Profile - ProfileX</title>
        <meta name="description" content="Build and customize your GitHub profile with ProfileX. Add skills, social links, badges, and more to your README.md." />
        <meta name="keywords" content="GitHub Profile, GitHub Readme, GitHub Markdown, Profile Readme, ProfileX" />
        <meta property="og:title" content="Create Your GitHub Profile - ProfileX" />
        <meta property="og:description" content="Build and customize your GitHub profile with ProfileX. Add skills, social links, badges, and more to your README.md." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/ShahVandit8/repo-storage/refs/heads/main/profile-x/ogimage/og.png" />
        <meta property="og:url" content="https://www.profilex.dev/create-profile" />
        <link rel="canonical" href="https://www.profilex.dev/create-profile" />
      </Helmet>
      <div className={state.theme === "dark" ? "dark" : "light"}>
        <Main />
      </div>
    </div>
  )
}

export default CreateProfile
