import React, { useState, useEffect, useRef } from 'react'
import useApp from '../../../Context/AppContext';
import BadgeStyleButton from '../misc/BadgeStyleButton';
import { colorStore } from '../../../Reducer/appReducer.js';
import BadgeCheckboxButton from '../misc/BadgeCheckboxButton.js';
import ToggleBadgeElementCheckbox from '../misc/ToggleBadgeElementCheckbox.js';
import AddRepoInput from '../misc/AddRepoInput.js';
import DeleteRepo from '../misc/DeleteRepo.js';
import AddRepo from '../misc/AddRepo.js';

const Badges = () => {

  const { state, dispatch } = useApp()
  const [badgesShowing, setBadgeShowing] = useState(false);

  // Repo Card Refs
  const repoOneRef = useRef();
  const repoTwoRef = useRef();
  const repoThreeRef = useRef();
  const repoFourRef = useRef();

  useEffect(() => {
    if (state.badges.githubCommitsGraph.selected ||
      state.badges.githubFollowers.selected ||
      state.badges.githubStatsCard.selected ||
      state.badges.githubStreak.selected ||
      state.badges.githubVisits.selected ||
      state.badges.reposCard.selected ||
      state.badges.topLangsCard.selected ||
      state.badges.twitchStatus.selected ||
      state.badges.twitterFollowers.selected) {
      setBadgeShowing(true);
    }
    else {
      setBadgeShowing(false);
    }
  }, [state]);

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
      type: "TOGGLE_GITHUB_STATS",
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
          <article className="d-flex flex-column mb-3">
            <h4 className="mb-3">GitHub</h4>
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
            <article className="mb-3">
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

            <article className="mb-3">
              <BadgeCheckboxButton
                badgeType={"githubStreak"}
                profileLink={"github"}
                badgeText={"Commit Streak"}
                handleBadgeToggle={handleBadgeToggle}
              />
            </article>

            <article className="mb-3">
              <BadgeCheckboxButton
                badgeType={"githubCommitsGraph"}
                profileLink={"github"}
                badgeText={"Commits Graph"}
                handleBadgeToggle={handleBadgeToggle}
              />
            </article>

            <article className="mb-3">
              <BadgeCheckboxButton
                badgeType={"topLangsCard"}
                profileLink={"github"}
                badgeText={"Top Languages"}
                handleBadgeToggle={handleBadgeToggle}
              />
            </article>

            {/* Repository Card */}
            <article className="mb-3">
              <BadgeCheckboxButton
                badgeType={"reposCard"}
                profileLink={"github"}
                badgeText={"Top Repositories"}
                handleBadgeToggle={handleBadgeToggle}
              />

              <article
                className={`toprepo-container d-flex flex-column overflow-hidden ${state.badges.reposCard.selected ? "d-block" : "d-none translate-up"
                  }`}
              >
                <p className="badge-selection-title mb-0">
                  Find Repositories
                </p>
                <p className="toprepo-subtext mb-2">
                  The repository must be the same as it is on your GitHub (including
                  hyphens, NOT case-sensitive).
                </p>

                <article className="row g-2 mb-3">
                  <div className="col-12">
                    <AddRepoInput
                      ref={repoOneRef}
                      section={"reposCard"}
                      type={"repoOne"}
                      placeholder={"repo-name"}
                      action={"ADD_REPO"}
                    />
                  </div>

                  {state.badges.reposCard.repoTwo != null ? (
                    <article className="flex gap-x-2 h-9.5 input-group">
                      <AddRepoInput
                        ref={repoTwoRef}
                        section={"reposCard"}
                        type={"repoTwo"}
                        placeholder={"repo-name"}
                        action={"ADD_REPO"}
                      />
                      <DeleteRepo
                        type={"repoTwo"}
                      />
                    </article>
                  ) : null}

                  {state.badges.reposCard.repoThree != null ? (
                    <article className="flex gap-x-2 h-9.5 input-group">
                      <AddRepoInput
                        ref={repoThreeRef}
                        section={"reposCard"}
                        type={"repoThree"}
                        placeholder={"repo-name"}
                        action={"ADD_REPO"}
                      />
                      <DeleteRepo
                        type={"repoThree"}
                      />
                    </article>
                  ) : null}

                  {state.badges.reposCard.repoFour != null ? (
                    <article className="flex gap-x-2 h-9.5 input-group">
                      <AddRepoInput
                        ref={repoFourRef}
                        section={"reposCard"}
                        type={"repoFour"}
                        placeholder={"repo-name"}
                        action={"ADD_REPO"}
                      />
                      <DeleteRepo
                        type={"repoFour"}
                      />
                    </article>
                  ) : null}

                </article>

                {state.badges.reposCard.repoTwo != null ? null : (
                  <>
                    <AddRepo
                      repoNumberToAdd={"repoTwo"}
                    />
                  </>
                )}

                {state.badges.reposCard.repoThree != null ||
                  state.badges.reposCard.repoTwo == null ? null : (
                  <>
                    <AddRepo
                      repoNumberToAdd={"repoThree"}
                    />
                  </>
                )}

                {state.badges.reposCard.repoFour != null ||
                  state.badges.reposCard.repoTwo == null ||
                  state.badges.reposCard.repoThree == null ? null : (
                  <>
                    <AddRepo
                      repoNumberToAdd={"repoFour"}
                    />
                  </>
                )}
              </article>

            </article>

            <article className="mb-3">
              <BadgeCheckboxButton
                badgeType={"githubFollowers"}
                profileLink={"github"}
                badgeText={"Follower Count"}
                handleBadgeToggle={handleBadgeToggle}
              />
            </article>

          </article>

          <article className="d-flex flex-column mb-3">
            <h4 className="mb-3">X (Twitter)</h4>
            {!state.socials.twitter.linkSuffix ? (
              <p className="stylebadgesubtext mb-2">
                Please{" "}
                <a className='style-anchor' onClick={() => {
                  dispatch({
                    type: "SHOW_SECTION",
                    payload: "socials",
                  });
                }}>
                  add your X profile
                </a>{" "}
                in the socials section.
              </p>
            ) : null}
            <BadgeCheckboxButton
              badgeType={"twitterFollowers"}
              profileLink={"twitter"}
              badgeText={"Follow Button"}
              handleBadgeToggle={handleBadgeToggle}
            />
          </article>

          <article className="d-flex flex-column mb-3">
            <h4 className="mb-3">Twitch</h4>
            {!state.socials.twitch.linkSuffix ? (
              <p className="stylebadgesubtext mb-2">
                Please{" "}
                <a className='style-anchor' onClick={() => {
                  dispatch({
                    type: "SHOW_SECTION",
                    payload: "socials",
                  });
                }}>
                  add your Twitch profile
                </a>{" "}
                in the socials section.
              </p>
            ) : null}
            <BadgeCheckboxButton
              badgeType={"twitchStatus"}
              profileLink={"twitch"}
              badgeText={"Streaming Status"}
              handleBadgeToggle={handleBadgeToggle}
            />
          </article>
          <br />
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
