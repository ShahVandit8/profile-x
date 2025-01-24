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
          <IconSection title="Core" iconType="core" />
          <IconSection title="Frontend Tools and Frameworks" iconType="frontend" />
          <IconSection title="Backend and Database" iconType="backend" />
          <IconSection title="UI/UX" iconType="software" />
          <IconSection title="Web3" iconType="web3" />
          <IconSection title="Cloud and Devops" iconType="cloud" />
          <IconSection title="Other" iconType="other" />
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
