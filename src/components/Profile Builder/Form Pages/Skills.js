import React from 'react'

const Skills = ({ page, setpage, nextPage, previousPage }) => {
  return (
    <form className="form-section">
      <div className="skill-group">
        <p>💻 Programming Languages</p>
        <div className="skills">
          <button className="skill-button" data-toggle="tooltip" data-placement="bottom" title="C">
            <i className="skill-icon c"></i>
          </button>
          <button className="skill-button" data-toggle="tooltip" data-placement="bottom" title="C++">
            <i className="skill-icon cplusplus"></i>
          </button>

        </div>
      </div>
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

export default Skills
