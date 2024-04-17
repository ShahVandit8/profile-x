import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useApp from '../../Context/AppContext.js';
import Introduction from './Form Pages/Introduction.js';
import Skills from './Form Pages/Skills.js';
import Socials from './Form Pages/Socials.js';
import Badges from './Form Pages/Badges.js';
import Support from './Form Pages/Support.js';
import Preview from './Preview.js';

let TurndownService = require("turndown").default;

const Main = () => {

  const { state, dispatch } = useApp()

  const [renderedMarkdown, setRenderedMarkdown] = useState({
    introduction: "",
    skillsTitle: "",
    skills: {
      core: [],
      frontend: [],
      backend: [],
      other: [],
      software: [],
      web3: [],
      cloud: [],
    },
    socials: {
      behance: "",
      codepen: "",
      codesandbox: "",
      devdotto: "",
      discord: "",
      dribbble: "",
      facebook: "",
      github: "",
      hashnode: "",
      instagram: "",
      linkedin: "",
      polywork: "",
      medium: "",
      rss: "",
      stackoverflow: "",
      twitter: "",
      youtube: "",
    },
    badges: {
      twitterFollowers: false,
      twitchStatus: false,
      githubStatsCard: false,
      githubVisits: false,
      githubFollowers: false,
      githubCommitsGraph: false,
      githubStreak: false,
      topLangsCard: false,
      reposCard: false,
    },
    support: ""
  });

  // Section Refs
  const introductionRef = useRef(null);
  const skillsTitleRef = useRef(null);
  const skillsRef = useRef(null);
  const socialsTitleRef = useRef(null);
  const socialsRef = useRef(null);
  const badgesTitleRef = useRef(null);
  const badgesRef = useRef(null);
  const supportRef = useRef(null);

  const markdownRef = useRef();

  const [copyStatus, setCopyStatus] = useState("Copy");

  useEffect(() => {
    const retrievedStoredState = JSON.parse(
      localStorage.getItem("profileXLocalState")
    );

    if (retrievedStoredState) {
      dispatch({
        type: "POPULATE_STATE",
        value: retrievedStoredState,
      });
    }
  }, [])

  useEffect(() => {
    var turndownService = new TurndownService();
    turndownService.addRule("pRemoval", {
      filter: 'p',
      replacement: function (content) {
        return '\n\n' + content + '\n\n'
      }
    });

    if (introductionRef.current) {
      let htmlOfElement = introductionRef.current.innerHTML;
      turndownService.remove('p')
      setRenderedMarkdown((renderedMarkdown) => ({
        ...renderedMarkdown,
        "introduction": turndownService.turndown(htmlOfElement),
      }));
    }

  }, [state])



  const copyMarkdown = async (copyText) => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopyStatus("Copied");
      const timer = setTimeout(() => {
        setCopyStatus("Copy");
      }, 1000);
      return () => clearTimeout(timer);
    } catch (err) {
      setCopyStatus("Failed to copy!");
    }
  };

  return (
    <>
      <div className="header" >
        <Link className="navbar-brand" style={{ float: 'left', marginTop: '10px' }} to="/">
          <span className="nav-title ">Profile<i style={{ color: '#ADB4D7', fontWeight: '700' }}>X</i></span>
        </Link>
        <div className="nav">
          <button className="btn theme-button"
            onClick={() => {
              if (state.theme === "dark") {
                dispatch({
                  type: "CHANGE_THEME",
                  payload: "light",
                });
              }
              else if (state.theme === "light") {
                dispatch({
                  type: "CHANGE_THEME",
                  payload: "dark",
                });
              }
            }}
          >
            {
              state.theme === "dark" ?
                <i class="fa-solid fa-moon"></i>
                :
                state.theme === "light" ?
                  <i className="lni lni-sun" ></i>
                  :
                  <></>
            }
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-2 pe-0">
          <div className="sidebar">
            {/* <h1>Profile<i style={{ color: '#ADB4D7', fontWeight: '700' }}>X</i></h1> */}
            <ul className='sidebar-list'>
              <li className={state.section === "introduction" ? 'list-items active' : 'list-items'}
                onClick={() => {
                  dispatch({
                    type: "SHOW_SECTION",
                    payload: "introduction",
                  });
                }}
              >
                <a>
                  <img src="icons\other\introduction.png" alt="" />
                  <span>Introduction</span>
                </a>
              </li>
              <li className={state.section === "socials" ? 'list-items active' : 'list-items'}
                onClick={() => {
                  dispatch({
                    type: "SHOW_SECTION",
                    payload: "socials",
                  });
                }}
              >
                <a>
                  <img src="icons\other\socials.png" alt="" />
                  <span>Socials</span>
                </a>
              </li>
              <li className={state.section === "skills" ? 'list-items active' : 'list-items'}
                onClick={() => {
                  dispatch({
                    type: "SHOW_SECTION",
                    payload: "skills",
                  });
                }}
              >
                <a>
                  <img src="icons\other\skills.png" alt="" />
                  <span>Skills</span>
                </a>
              </li>
              <li className={state.section === "badges" ? 'list-items active' : 'list-items'}
                onClick={() => {
                  dispatch({
                    type: "SHOW_SECTION",
                    payload: "badges",
                  });
                }}
              >
                <a>
                  <img src="icons\other\badges.png" alt="" />
                  <span>Badges</span>
                </a>
              </li>
              <li className={state.section === "support" ? 'list-items active' : 'list-items'}
                onClick={() => {
                  dispatch({
                    type: "SHOW_SECTION",
                    payload: "support",
                  });
                }}
              >
                <a>
                  <img src="icons\other\support.png" alt="" />
                  <span>Support</span>
                </a>
              </li>
            </ul>

          </div>
        </div>
        <div className="col-12 col-md-5 ps-0 pe-0">
          <div className="left-content">
            {
              state.section === "introduction" ?
                <Introduction />
                :
                state.section === "socials" ?
                  <Socials />
                  :
                  state.section === "skills" ?
                    <Skills />
                    :
                    state.section === "badges" ?
                      <Badges />
                      :
                      state.section === "support" ?
                        <Support />
                        :
                        <></>
            }
          </div>
        </div>
        <div className="col-12 col-md-5 ps-0">
          <div className="right-content">
            <nav className="navbar py-3">
              <div className="container-fluid d-block">
                <button
                  onClick={() => {
                    dispatch({
                      type: "SELECT_RENDER_MODE",
                      payload: "preview",
                    });
                  }}
                  className={state.renderMode === "preview" ? "btn btn-sm active-btn me-2" : "btn btn-sm nonactive-btn me-2"} type="button">
                  <i class="fa-solid fa-eye me-2"></i>
                  Preview
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "SELECT_RENDER_MODE",
                      payload: "markdown",
                    });
                  }}
                  className={state.renderMode === "markdown" ? "btn btn-sm active-btn me-2" : "btn btn-sm nonactive-btn me-2"} type="button">
                  <i class="fa-solid fa-code me-2"></i>
                  Raw
                </button>
                <button className="btn btn-sm nonactive-btn" style={{ float: 'right' }} type="button"
                  onClick={() => {
                    const markdown = new Promise((resolve, reject) => {
                      resolve(dispatch({
                        type: "SELECT_RENDER_MODE",
                        payload: "markdown",
                      }))
                    })
                    markdown.then(() => {
                      copyMarkdown(markdownRef.current.innerText);
                    })
                  }
                  }
                >
                  <i class="fa-solid fa-copy me-2"></i>
                  {copyStatus}
                </button>
              </div>
            </nav>
            <div className='content p-3'>
              {
                state.renderMode === "preview" ?
                  <Preview ref={introductionRef} />
                  :
                  <div className="markdown-container" ref={markdownRef}>
                    {!renderedMarkdown ? (
                      <div>You have not rendered any code yet</div>
                    ) : (
                      <>
                        {
                          renderedMarkdown.introduction ? (
                            <p>
                              {renderedMarkdown.introduction}
                            </p>
                          ) : null
                        }
                      </>
                    )}

                  </div>
              }
            </div>

          </div>
          {/* <textarea className="textarea" /> */}
        </div>

      </div >
    </>
  )
}

export default Main
