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
