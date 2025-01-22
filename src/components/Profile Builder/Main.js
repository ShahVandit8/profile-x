import React, { useState, useEffect, useRef } from 'react';
import useApp from '../../Context/AppContext.js';
import Introduction from './Form Pages/Introduction.js';
import Skills from './Form Pages/Skills.js';
import Socials from './Form Pages/Socials.js';
import Badges from './Form Pages/Badges.js';
import Support from './Form Pages/Support.js';
import Preview from './Preview.js';
import RenderedMarkdown from "./RenderedMarkdown";
import Modal from "./Modal";

import logoDark from '../../assets/images/logo/logo-dark.png'
import logoLight from '../../assets/images/logo/logo-light.png'
import { Link } from 'react-router-dom';

let TurndownService = require("turndown").default;

const Main = () => {

  const { state, dispatch } = useApp()
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Section Refs
  const introductionRef = useRef(null);
  const skillsTitleRef = useRef(null);
  const skillsRef = useRef(null);
  const socialsTitleRef = useRef(null);
  const socialsRef = useRef(null);
  const badgesTitleRef = useRef(null);
  const badgesRef = useRef(null);
  const supportRef = useRef(null);

  const previewRef = useRef(null);
  const renderedMarkdownRef = useRef(null);

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

  var turndownService = new TurndownService();
  turndownService.addRule("pRemoval", {
    filter: 'p',
    replacement: function (content) {
      return '\n\n' + content + '\n\n'
    }
  });

  const copyMarkdown = async (copyText) => {
    // try {
    //   await navigator.clipboard.writeText(copyText);
    //   setCopyStatus("Copied");
    //   const timer = setTimeout(() => {
    //     setCopyStatus("Copy");
    //   }, 1000);
    //   return () => clearTimeout(timer);
    // } catch (err) {
    //   setCopyStatus("Failed to copy!");
    // }

    try {
      if (renderedMarkdownRef.current) {
        if (renderedMarkdownRef.current.innerText) {
          const copyText = renderedMarkdownRef.current.innerText;
          await navigator.clipboard.writeText(copyText);
          setCopyStatus("Copied");

          // Open the success modal
          setIsModalOpen(true);

          const timer = setTimeout(() => {
            setCopyStatus("Copy");
          }, 2000);

          return () => clearTimeout(timer);
        }
      }
    } catch (err) {
      setCopyStatus("Copy");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const toggleSidebar = () => {
    if (state.sidebar === 'open') {
      dispatch({
        type: "SIDEBAR_TOGGLE",
        payload: "close",
      })
    }
    else if (state.sidebar === 'close') {
      dispatch({
        type: "SIDEBAR_TOGGLE",
        payload: "open",
      })
    }
    else {
      alert("Something wronge happened!!!")
    }
  }
  return (
    <>
      <div className={state.theme === "dark" ? "dark" : "light"}>
        <div className="sidebar-section">
          <nav className={state.sidebar === "open" ? "sidebar" : "sidebar close"}
          >
            <header>
              <div className="image-text">
                <span className="image">
                  <img
                    src={state.theme === "light" ? logoDark : logoLight}
                    alt="logo"
                  />
                </span>
                <div className="text header-text">
                  <nobr><span className="main">Profile<i style={state.theme === "light" ? { color: '#1B1B1B', fontWeight: '700' } : { color: '#ADB4D7', fontWeight: '700' }}>X</i></span></nobr>
                </div>
              </div>
              <i className="bx bx-chevron-right toggle"
                onClick={toggleSidebar}
              />
            </header>
            <div className="menu-bar m-0">
              <div className="menu">
                <ul className="menu-links">
                  <li className={state.section === "introduction" ? 'list-items active' : 'list-items'} title="Introduction"
                    onClick={() => {
                      dispatch({
                        type: "SHOW_SECTION",
                        payload: "introduction",
                      });
                    }}
                  >
                    <a>
                      <i className="bx bx-id-card icons" />
                      <span className="text nav-text">Introduction</span>
                    </a>
                  </li>
                  <li className={state.section === "socials" ? 'list-items active' : 'list-items'} title="Socials"
                    onClick={() => {
                      dispatch({
                        type: "SHOW_SECTION",
                        payload: "socials",
                      });
                    }}
                  >
                    <a>
                      <i className="bx bx-link icons" />
                      <span className="text nav-text">Socials</span>
                    </a>
                  </li>
                  <li className={state.section === "skills" ? 'list-items active' : 'list-items'} title="Skills"
                    onClick={() => {
                      dispatch({
                        type: "SHOW_SECTION",
                        payload: "skills",
                      });
                    }}
                  >
                    <a>
                      <i className="bx bxs-bolt icons" />
                      <span className="text nav-text">Skills</span>
                    </a>
                  </li>
                  <li className={state.section === "badges" ? 'list-items active' : 'list-items'} title="Badges"
                    onClick={() => {
                      dispatch({
                        type: "SHOW_SECTION",
                        payload: "badges",
                      });
                    }}
                  >
                    <a>
                      <i className="bx bxs-award icons" />
                      <span className="text nav-text">Badges</span>
                    </a>
                  </li>
                  <li className={state.section === "support" ? 'list-items active' : 'list-items'} title="Support"
                    onClick={() => {
                      dispatch({
                        type: "SHOW_SECTION",
                        payload: "support",
                      });
                    }}
                  >
                    <a>
                      <i className="bx bx-happy-alt icons" />
                      <span className="text nav-text">Support</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bottom-content">
                <li className="" title="Go Back Home">
                  <Link to="/" >
                    <i className="bx bx-log-out icons" />
                    <nobr><span className="text nav-text">Go Home</span></nobr>
                  </Link>
                </li>
                <li className="" style={{ cursor: 'pointer' }} title="Toggle Theme"
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
                  <div className="moon-sun" >
                    {
                      state.theme === "dark" ?
                        <i className="bx bx-moon icons moon" />
                        :
                        state.theme === "light" ?
                          <i className="bx bx-sun icons sun" />
                          :
                          <></>
                    }
                  </div>
                  <nobr><span className=" text nav-text">
                    {
                      state.theme === "dark" ?
                        <>Dark Mode</>
                        :
                        state.theme === "light" ?
                          <>Light Mode</>
                          :
                          <></>
                    }
                  </span>
                  </nobr>
                </li>
              </div>
            </div>
          </nav>
        </div>
        <div className="main-section" style={state.sidebar === 'open' ? { marginLeft: '250px', transition: 'all 0.2s ease' } : { marginLeft: '78px', transition: 'all 0.2s ease' }}>

          <div className="row">
            <div className="col-12 col-md-6 pe-0">
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
            <div className="col-12 col-md-6 ps-0">
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
                          copyMarkdown(renderedMarkdownRef.current.innerText);
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
                      <Preview ref={previewRef} />
                      :
                      <RenderedMarkdown ref={renderedMarkdownRef} />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Main
