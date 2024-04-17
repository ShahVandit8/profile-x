import React, { useRef } from 'react'
import useApp from '../../../Context/AppContext';

const Introduction = () => {

  const { state, dispatch } = useApp()

  const nameInputRef = useRef(null);
  const subtitleInputRef = useRef(null);
  const longdescriptionInputRef = useRef(null);
  const locationInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const portfoliolinkInputRef = useRef(null);
  const resumelinkInputRef = useRef(null);
  const workingOnTitleInputRef = useRef(null);
  const workingOnLinkInputRef = useRef(null);
  const learningInputRef = useRef(null);
  const askmeaboutInputRef = useRef(null);
  const funfactInputRef = useRef(null);

  return (
    <>
      <div className="headbar">
        <h3>Introduction</h3>
        <p>Introduce yourself. Tell visitors about you and who you are.</p>
        <div className="d-flex justify-content-end mt-3">
          <button
            onClick={() => {
              dispatch({
                type: "SHOW_SECTION",
                payload: "socials",
              });
            }}
            className="btn btn-sm section-btn me-2" style={{ float: 'right' }} type="button">
            Next section
            <i class="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
      <div className="content section-content">
        <form className="form-section">

          <div className="form-field">
            <span className="d-block">👋 Hello! I'm:</span>
            <input className="d-block text-input" type="text" value={state.introduction.name} name='name' placeholder='Vandit Shah' ref={nameInputRef}
              onChange={() =>
                dispatch({
                  type: "ADD_INTRODUCTION",
                  payload: { title: "name", value: nameInputRef.current.value },
                })
              } />
          </div>

          <div className="form-field">
            <span className="d-block">🤘 Subtitle:</span>
            <input className="d-block text-input" type="text" value={state.introduction.subtitle} placeholder="Full Stack Web Developer" ref={subtitleInputRef}
              onChange={() =>
                dispatch({
                  type: "ADD_INTRODUCTION",
                  payload: { title: "subtitle", value: subtitleInputRef.current.value },
                })
              } />
          </div>

          <div className="form-field">
            <span className="d-block">✏️ Long Description:</span>
            <textarea className="d-block textarea-input" type="textarea" value={state.introduction.longDescription}
              placeholder="eg: Passionate full-stack web developer and cybersecurity enthusiast with a journey rooted in early coding experiments..."
              ref={longdescriptionInputRef}
              onChange={() =>
                dispatch({
                  type: "ADD_INTRODUCTION",
                  payload: { title: "longDescription", value: longdescriptionInputRef.current.value },
                })
              }
            />
          </div>

          <h4>About Me</h4>

          <div className="form-field">
            <span className="d-block">🌍 I'm From:</span>
            <input className="d-block text-input" type="text" placeholder='Toronto, Canada' value={state.introduction.location}
              ref={locationInputRef}
              onChange={() =>
                dispatch({
                  type: "ADD_INTRODUCTION",
                  payload: { title: "location", value: locationInputRef.current.value },
                })
              } />
          </div>

          <div className="form-field">
            <span className="d-block">📫 Reach me at:</span>
            <input className="d-block text-input" type="text" placeholder='youremail@gmail.com'
              value={state.introduction.email}
              ref={emailInputRef}
              onChange={() =>
                dispatch({
                  type: "ADD_INTRODUCTION",
                  payload: { title: "email", value: emailInputRef.current.value },
                })
              }
            />
          </div>

          <div className="form-field">
            <span className="d-block">👨‍💻 See My Portfolio:</span>
            <div class="input-box">
              <p class="prefix">https://</p>
              <input type="text" placeholder="www.myportfolio.com"
                value={state.introduction.portfolioLink}
                ref={portfoliolinkInputRef}
                onChange={() =>
                  dispatch({
                    type: "ADD_INTRODUCTION",
                    payload: { title: "portfolioLink", value: portfoliolinkInputRef.current.value },
                  })
                }
              />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block">📄 See My Resume:</span>
            <div class="input-box">
              <p class="prefix">https://</p>
              <input type="text" placeholder="drive.google.com/file/resume"
                value={state.introduction.resumeLink}
                ref={resumelinkInputRef}
                onChange={() =>
                  dispatch({
                    type: "ADD_INTRODUCTION",
                    payload: { title: "resumeLink", value: resumelinkInputRef.current.value },
                  })
                }
              />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block">🔭 I&apos;m currently working on:</span>
            <input className="d-block text-input" placeholder="Project Name" value={state.introduction.workingOnTitle} ref={workingOnTitleInputRef} type="text"
              onChange={() =>
                dispatch({
                  type: "ADD_INTRODUCTION",
                  payload: { title: "workingOnTitle", value: workingOnTitleInputRef.current.value },
                })
              }
            />
            <div class="input-box">
              <p class="prefix">https://</p>
              <input type="text" placeholder="www.myproject.com" value={state.introduction.workingOnLink} ref={workingOnLinkInputRef}
                onChange={() =>
                  dispatch({
                    type: "ADD_INTRODUCTION",
                    payload: { title: "workingOnLink", value: workingOnLinkInputRef.current.value },
                  })
                }
              />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block">🌱 I&apos;m currently learning:</span>
            <input className="d-block text-input" type="text" placeholder='Next.js and React Native'
              value={state.introduction.learning}
              ref={learningInputRef}
              onChange={() =>
                dispatch({
                  type: "ADD_INTRODUCTION",
                  payload: { title: "learning", value: learningInputRef.current.value },
                })
              }
            />
          </div>

          <div className="form-field">
            <span className="d-block">💬 Ask me about:</span>
            <input className="d-block text-input" type="text" placeholder='MERN Stack'
              value={state.introduction.askmeabout}
              ref={askmeaboutInputRef}
              onChange={() =>
                dispatch({
                  type: "ADD_INTRODUCTION",
                  payload: { title: "askmeabout", value: askmeaboutInputRef.current.value },
                })
              }
            />
          </div>

          <div className="form-field">
            <span className="d-block">⚡ Fun fact about me:</span>
            <input className="d-block text-input" type="text" placeholder='I like pineapple on Pizza 😅'
              value={state.introduction.funfact}
              ref={funfactInputRef}
              onChange={() =>
                dispatch({
                  type: "ADD_INTRODUCTION",
                  payload: { title: "funfact", value: funfactInputRef.current.value },
                })
              }
            />
          </div>

          <div className="button-grop">
            <div className="d-flex justify-content-end mt-3">
              <button
                onClick={() => {
                  dispatch({
                    type: "SHOW_SECTION",
                    payload: "socials",
                  });
                }}
                className="btn btn-sm section-btn me-2" style={{ float: 'right' }} type="button">
                Next section
                <i class="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </div>
          </div>

        </form>
      </div>
    </>
  )
}

export default Introduction
