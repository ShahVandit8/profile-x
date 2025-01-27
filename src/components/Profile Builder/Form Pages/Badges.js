import React, { useState } from 'react'
import useApp from '../../../Context/AppContext';
import BadgeStyleButton from '../misc/BadgeStyleButton';
import { colorStore } from '../../../Reducer/appReducer.js';

const Badges = () => {

  const { state, dispatch } = useApp()
  const { badgesShowing, setBadgeShowing } = useState(false)

  const handleStyleBadge = (e) => {
    console.log(e.currentTarget.name)
    dispatch({
      type: "TOGGLE_STYLE_COLOR",
      payload: {
        keyToToggle: e.currentTarget.name,
      },
    });
  }

  const handleChangeBadgeColor = (e, badgeKeyToHide, color) => {
    dispatch({
      type: "STYLE_BADGES",
      payload: {
        keyToStyle: e.target.name,
        keyToToggle: badgeKeyToHide,
        color: color.hex,
      },
    });
  }

  return (
    <>
      <div className="headbar">
        <h3>Badges</h3>
        <p>Add some badges and stats to your profile.</p>
        <div className=" d-flex justify-content-between mt-3">
          <button
            onClick={() => {
              dispatch({
                type: "SHOW_SECTION",
                payload: "skills",
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
                payload: "support",
              });
            }}
            className="btn btn-sm section-btn me-2" style={{ float: 'right' }} type="button">
            Next section
            <i class="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>

      <div className="content section-content">
        <form className="form-section overflow-hidden">

          <article className="mb-0">
            <span className="d-block mb-2">Style badges:</span>

            <article className="row row-cols-1 g-2 mb-4 row-cols-xl-2">
              <BadgeStyleButton
                colorList={colorStore.lightColors}
                badgeKeyToStyle={"titleColor"}
                badgeText={"Title"}
                handleStyleBadge={handleStyleBadge}
                badgeKeyToHide={"titleColorEdit"}
                badgesShowing={badgesShowing}
                handleChangeBadgeColor={handleChangeBadgeColor}
              />
              <BadgeStyleButton
                colorList={colorStore.lightColors}
                badgeKeyToStyle={"textColor"}
                badgeText={"Text"}
                handleStyleBadge={handleStyleBadge}
                badgeKeyToHide={"textColorEdit"}
                badgesShowing={badgesShowing}
                handleChangeBadgeColor={handleChangeBadgeColor}
              />
              <BadgeStyleButton
                colorList={colorStore.lightColors}
                badgeKeyToStyle={"iconColor"}
                badgeText={"Icons"}
                handleStyleBadge={handleStyleBadge}
                badgeKeyToHide={"iconColorEdit"}
                badgesShowing={badgesShowing}
                handleChangeBadgeColor={handleChangeBadgeColor}
              />
              <BadgeStyleButton
                colorList={colorStore.darkColors}
                badgeKeyToStyle={"bgColor"}
                badgeText={"Background"}
                handleStyleBadge={handleStyleBadge}
                badgeKeyToHide={"bgColorEdit"}
                badgesShowing={badgesShowing}
                handleChangeBadgeColor={handleChangeBadgeColor}
              />
            </article>
          </article>
        </form>
      </div>
    </>
  )
}

export default Badges
