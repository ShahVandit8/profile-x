import React from 'react'
import "../../styles/profilebuilder.css"
import "../../styles/icons.css"
import Main from './Main'

import useApp from '../../Context/AppContext.js';

const CreateProfile = () => {

  const { state } = useApp()

  return (
    <div className="profile-container">
      <div className={state.theme === "dark" ? "dark" : "light"}>
      <Main />
      </div>
    </div>
  )
}

export default CreateProfile
