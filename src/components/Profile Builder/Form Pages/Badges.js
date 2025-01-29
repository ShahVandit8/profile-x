import React, { useState } from 'react'
import useApp from '../../../Context/AppContext';
import BadgeStyleButton from '../misc/BadgeStyleButton';
import { colorStore } from '../../../Reducer/appReducer.js';
import BadgeCheckboxButton from '../misc/BadgeCheckboxButton.js';
import ToggleBadgeElementCheckbox from '../misc/ToggleBadgeElementCheckbox.js';

const Badges = () => {

  const { state, dispatch } = useApp()
  const [badgesShowing, setBadgeShowing] = useState(true);

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

  const handleBadgeToggle = (e) => {
    dispatch({
      type: "TOGGLE_BADGE",
      payload: {
        title: e.target.name,
      },
    });
  }

  const handleBadgeElementToggle = (e) => { 
    dispatch({
      type:"TOGGLE_GITHUB_STATS",
      payload: {
        keyToHide: e.currentTarget.name,
      },
    });
  };

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
            {!badgesShowing ? (
              <p className="stylebadgesubtext mb-2">Select a badge below to customise.</p>
            ) : null}
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
          <article className="d-flex flex-column mb-4">
            <h4 className="mb-2">GitHub</h4>
            {!state.socials.github.linkSuffix ? (
              <p className="stylebadgesubtext mb-2">
                Please{" "}
                <a className='style-anchor' onClick={() => {
                  dispatch({
                    type: "SHOW_SECTION",
                    payload: "socials",
                  });
                }}>
                  add your GitHub profile
                </a>{" "}
                in the socials section.
              </p>
            ) : null}
            <article className="mb-4">
              <BadgeCheckboxButton
                badgeType={"githubStatsCard"}
                profileLink={"github"}
                badgeText={"Stats Card"}
                handleBadgeToggle={handleBadgeToggle}
              />

              <article
                className={`badge-selection-container ${state.badges.githubStatsCard.selected ? "d-block" : "d-none"
                  }`}
              >
                <p className="badge-selection-title">SHOW:</p>
                <div className="row g-2">
                  {[
                    { key: "stars", label: "Stars" },
                    { key: "commits", label: "Commits" },
                    { key: "prs", label: "PRs" },
                    { key: "issues", label: "Issues" },
                    { key: "contribs", label: "Contributions" },
                    { key: "privateCommits", label: "Private Commits" },
                  ].map((badge) => (
                    <div className="col-12 col-lg-6" key={badge.key}>
                      <ToggleBadgeElementCheckbox
                        badgeType={"githubStatsCard"}
                        badgeKeyToHide={badge.key}
                        badgeText={badge.label}
                        handleBadgeElementToggle={handleBadgeElementToggle}
                        state={state}
                      />
                    </div>
                  ))}
                </div>
              </article>

            </article>
          </article>
          <div className="button-grop">
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
        </form>
      </div>
    </>
  )
}

export default Badges
