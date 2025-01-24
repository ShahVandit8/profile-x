import React from 'react'
import useApp from '../../../Context/AppContext';
import IconSection from '../misc/IconSection';

const Skills = () => {

  const { state, dispatch } = useApp()

  return (
    <>
      <div className="headbar">
        <h3>Skills</h3>
        <p>Show off the languages, frameworks, software and tech that you use.</p>
        <div className=" d-flex justify-content-between mt-3">
          <button
            onClick={() => {
              dispatch({
                type: "SHOW_SECTION",
                payload: "socials",
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
                payload: "badges",
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
          {/* <div className="skill-group">
            <p>💻 Programming Languages</p>
            <div className="skills">
              <button className="skill-button" data-toggle="tooltip" data-placement="bottom" title="C">
                <i className="skill-icon c"></i>
              </button>
              <button className="skill-button" data-toggle="tooltip" data-placement="bottom" title="C++">
                <i className="skill-icon cplusplus"></i>
              </button>
            </div>
            <div className="skills">
              <button className="skill-button" data-toggle="tooltip" data-placement="bottom" title="C">
                <i className="skill-icon c"></i>
              </button>
              <button className="skill-button" data-toggle="tooltip" data-placement="bottom" title="C++">
                <i className="skill-icon cplusplus colored"></i>
                <span className="tick-icon">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="9" fill="#ADB4D7" stroke="white" stroke-width="2" />
                    <path
                      fill="white"
                      fill-rule="evenodd"
                      d="M13.707 8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </div>

          </div> */}
          <IconSection title="Programming Languages" iconType="core" />
          <div className="skill-group">
            <p>💻 Fontend Development</p>
          </div>
          <div className="skill-group">
            <p>💻 Backend Development</p>
          </div>
          <div className="skill-group">
            <p>💻 Softwares</p>
          </div>
          <div className="skill-group">
            <p>💻 Web3</p>
          </div>
          <div className="skill-group">
            <p>💻 Cloud</p>
          </div>
          <div className="skill-group">
            <p>💻 Other</p>
          </div>

          <div className="button-grop">
            <div className=" d-flex justify-content-between mt-3">
              <button
                onClick={() => {
                  dispatch({
                    type: "SHOW_SECTION",
                    payload: "socials",
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
                    payload: "badges",
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

export default Skills
