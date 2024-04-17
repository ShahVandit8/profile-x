import React from 'react'
import useApp from '../../../Context/AppContext';

const Socials = () => {

  const { state, dispatch } = useApp()

  return (
    <>
      <div className="headbar">
        <h3>Socials</h3>
        <p>Connect with your visitors by adding links to your socials.</p>
        <div className=" d-flex justify-content-between mt-3">
          <button
            onClick={() => {
              dispatch({
                type: "SHOW_SECTION",
                payload: "introduction",
              });
            }}
            className="btn btn-sm section-btn me-2" type="button">
            <i class="fa-solid fa-arrow-left me-2"></i>
            Previous section
          </button>
          <button
            onClick={() => {
              dispatch({
                type: "SHOW_SECTION",
                payload: "skills",
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
            <span className="d-block"><img src="icons/socials/github-dark.svg" alt="github" className='form-icon' /> GitHub Profile:</span>
            <div class="input-box">
              <p class="prefix">https://www.github.com/</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/twitter-dark.svg" alt="github" className='form-icon' />  X Profile:</span>
            <div class="input-box">
              <p class="prefix">https://www.x.com/</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/devdotto-dark.svg" alt="devdotto" className='form-icon' /> Dev.to Profile:</span>
            <div class="input-box">
              <p class="prefix">https://www.dev.to/</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/codepen-dark.svg" alt="codepen" className='form-icon' /> Codepen Profile:</span>
            <div class="input-box">
              <p class="prefix">https://www.codepen.io/</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/codesandbox-dark.svg" alt="codesandbox" className='form-icon' /> Codesandbox Profile:</span>
            <div class="input-box">
              <p class="prefix">https://www.codesandbox.io/u/</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/stackoverflow.svg" alt="Stackoverflow" className='form-icon' /> Stackoverflow Profile:</span>
            <div class="input-box">
              <p class="prefix">https://www.stackoverflow.com/user/</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/linkedin-dark.svg" alt="Linkedin" className='form-icon' /> Linkedin Profile:</span>
            <div class="input-box">
              <p class="prefix">https://www.linkedin.com/in/</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/facebook-dark.svg" alt="Facebook" className='form-icon' /> Facebook Profile:</span>
            <div class="input-box">
              <p class="prefix">https://www.facebook.com/</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/instagram.svg" alt="instagram" className='form-icon' /> Instagram Profile:</span>
            <div class="input-box">
              <p class="prefix">https://www.instagram.com/</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/threads-dark.svg" alt="threads" className='form-icon' /> Threads Profile:</span>
            <div class="input-box">
              <p class="prefix">https://www.threads.net/@</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/dribbble.svg" alt="dribbble" className='form-icon' /> Dribbble Profile:</span>
            <div class="input-box">
              <p class="prefix">https://www.dribbble.com/</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/behance.svg" alt="behance" className='form-icon' /> behance Profile:</span>
            <div class="input-box">
              <p class="prefix">https://www.behance.com/</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/hashnode.svg" alt="hashnode" className='form-icon' /> Hashnode Profile:</span>
            <div class="input-box">
              <p class="prefix">https://</p>
              <input type="text" placeholder="username" />
              <p class="prefix">.hashnode.dev</p>
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/medium-dark.svg" alt="medium" className='form-icon' /> Medium Profile:</span>
            <div class="input-box">
              <p class="prefix">https://www.medium.com/</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/youtube.svg" alt="youtube" className='form-icon' /> YouTube Channel:</span>
            <div class="input-box">
              <p class="prefix">https://www.youtube.com/@</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/discord.svg" alt="discord" className='form-icon' /> Discord Code:</span>
            <div class="input-box">
              <p class="prefix">https://www.discord.com/user/</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/twitch.svg" alt="twitch" className='form-icon' /> Twitch Channel:</span>
            <div class="input-box">
              <p class="prefix">https://www.twitch.tv/</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/socials/polywork.svg" alt="polywork" className='form-icon' /> Polywork Profile:</span>
            <div class="input-box">
              <p class="prefix">https://www.polywork.com/</p>
              <input type="text" placeholder="username" />
            </div>
          </div>

          <div className="button-grop">
            <div className=" d-flex justify-content-between mt-3">
              <button
                onClick={() => {
                  dispatch({
                    type: "SHOW_SECTION",
                    payload: "introduction",
                  });
                }}
                className="btn btn-sm section-btn me-2" type="button">
                <i class="fa-solid fa-arrow-left me-2"></i>
                Previous section
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "SHOW_SECTION",
                    payload: "skills",
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

export default Socials
