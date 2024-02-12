import React from 'react'

const Introduction = ({page, setpage, nextPage, previousPage}) => {
  return (
    <form className="form-section">

      <div className="form-field">
        <span className="d-block">👋 Hello! I'm:</span>
        <input className="d-block text-input" type="text" placeholder='Vandit Shah' />
      </div>

      <div className="form-field">
        <span className="d-block">🤘 Subtitle:</span>
        <input className="d-block text-input" type="text" placeholder="Full Stack Web Developer" />
      </div>

      <div className="form-field">
        <span className="d-block">✏️ Long Description:</span>
        <textarea className="d-block textarea-input" type="textarea" placeholder="eg: Passionate full-stack web developer and cybersecurity enthusiast with a journey rooted in early coding experiments..." />
      </div>

      <h4>About Me</h4>

      <div className="form-field">
        <span className="d-block">🌍 I'm From:</span>
        <input className="d-block text-input" type="text" placeholder='Toronto, Canada' />
      </div>

      <div className="form-field">
        <span className="d-block">📫 Reach me at:</span>
        <input className="d-block text-input" type="text" placeholder='youremail@gmail.com' />
      </div>

      <div className="form-field">
        <span className="d-block">👨‍💻 See My Portfolio:</span>
        <input className="d-block text-input" placeholder="MyPortfolio" type="text" />
        <div class="input-box">
          <p class="prefix">https://</p>
          <input type="text" placeholder="www.myportfolio.com" />
        </div>
      </div>

      <div className="form-field">
        <span className="d-block">📄 See My Resume:</span>
        <input className="d-block text-input" placeholder="MyResume" type="text" />
        <div class="input-box">
          <p class="prefix">https://</p>
          <input type="text" placeholder="drive.google.com/file/resume" />
        </div>
      </div>

      <div className="form-field">
        <span className="d-block">🔭 I&apos;m currently working on:</span>
        <input className="d-block text-input" placeholder="MyApp" type="text" />
        <div class="input-box">
          <p class="prefix">https://</p>
          <input type="text" placeholder="www.myapp.com" />
        </div>
      </div>

      <div className="form-field">
        <span className="d-block">🌱 I&apos;m currently learning:</span>
        <input className="d-block text-input" type="text" placeholder='Next.js and React Native' />
      </div>

      <div className="form-field">
        <span className="d-block">💬 Ask me about:</span>
        <input className="d-block text-input" type="text" placeholder='MERN Stack' />
      </div>

      <div className="form-field">
        <span className="d-block">⚡ Fun fact about me:</span>
        <input className="d-block text-input" type="text" placeholder='I like pineapple on Pizza 😅' />
      </div>

      <div className="button-grop">
        <div className={page == 1 ? "d-flex justify-content-end" : " d-flex justify-content-between"}>
          <button onClick={previousPage} className={page == 1 ? "btn btn-sm active-btn me-2 d-none" : "btn btn-sm active-btn me-2"} type="button">
            <i class="fa-solid fa-arrow-left me-2"></i>
            Previous
          </button>
          <button onClick={nextPage} className={page >= 5 ? "btn btn-sm active-btn me-2 d-none" : "btn btn-sm active-btn me-2"} style={{ float: 'right' }} type="button">
            Next
            <i class="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>

    </form>
  )
}

export default Introduction
