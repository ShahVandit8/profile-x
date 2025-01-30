import React, { useRef, forwardRef } from 'react'
import useApp from '../../../Context/AppContext';

const Support = forwardRef(({ }) => {

  const { state, dispatch } = useApp()
  const buymeacoffeeRef = useRef();
  const kofiRef = useRef();

  return (
    <>
      <div className="headbar">
        <h3>Support</h3>
        <p>Make it easy for people using your products to support you or give donations.</p>
        <div className=" d-flex justify-content-between mt-3">
          <button
            onClick={() => {
              dispatch({
                type: "SHOW_SECTION",
                payload: "badges",
              });
            }}
            className="btn btn-sm section-btn me-2" type="button">
            <i class="fa-solid fa-arrow-left me-2"></i>
            Previous section
          </button>
        </div>
      </div>
      <div className="content section-content">
        <form className="form-section">
          <div className="form-field">
            <span className="d-block"><img src="icons/support/buymeacoffee.svg" alt="buymeacoffee" className='form-icon' />Buy Me a Coffee:</span>
            <div class="input-box">
              <p class="prefix">https://www.buymeacoffee.com/</p>
              <input type="text" placeholder="username" value={state.support.buymeacoffee.linkSuffix} ref={buymeacoffeeRef}
                onChange={() =>
                  dispatch({
                    type: "ADD_SUPPORT",
                    payload: { title: "buymeacoffee", value: buymeacoffeeRef.current.value },
                  })
                }
              />
            </div>
          </div>

          <div className="form-field">
            <span className="d-block"><img src="icons/support/kofi.svg" alt="github" className='form-icon' />Ko-fi:</span>
            <div class="input-box">
              <p class="prefix"><nobr>https://ko-fi.com/</nobr></p>
              <input type="text" placeholder="username" value={state.support.kofi.linkSuffix} ref={kofiRef}
                onChange={() =>
                  dispatch({
                    type: "ADD_SUPPORT",
                    payload: { title: "kofi", value: kofiRef.current.value },
                  })
                }
              />
            </div>
          </div>

          <div className="button-group">
            <div className=" d-flex justify-content-between mt-3">
              <button
                onClick={() => {
                  dispatch({
                    type: "SHOW_SECTION",
                    payload: "badges",
                  });
                }}
                className="btn btn-sm section-btn me-2" type="button">
                <i class="fa-solid fa-arrow-left me-2"></i>
                Previous section
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
)

export default Support
