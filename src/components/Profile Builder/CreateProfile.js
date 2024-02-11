import React, { useState } from 'react'
import "../../styles/profilebuilder.css"
import Navbar from './Navbar'

const CreateProfile = () => {

  const [page, setpage] = useState(1)

  const nextPage = () => {
    setpage(page => page + 1)
  }

  const previousPage = () => {
    setpage(page => page - 1)
  }

  return (
    <div className="profile-container">
      <Navbar page={page} setpage={setpage} nextPage={nextPage} previousPage={previousPage} />
    </div>
  )
}

export default CreateProfile
