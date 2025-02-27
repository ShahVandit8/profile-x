import React, { useState, useEffect, useRef } from 'react';
import useApp from '../../Context/AppContext.js';
import Modal from "./Modal";
import Split from 'react-split'

import logoDark from '../../assets/images/logo/logo-dark.png'
import logoLight from '../../assets/images/logo/logo-light.png'
import { Link } from 'react-router-dom';
import LeftContent from './LeftContent.js';
import RightContent from './RightContent.js';

let TurndownService = require("turndown").default;

const Main = () => {

  const { state, dispatch } = useApp()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const previewRef = useRef(null);
  const renderedMarkdownRef = useRef(null);

  const [copyStatus, setCopyStatus] = useState("Copy");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  var turndownService = new TurndownService();
  turndownService.addRule("pRemoval", {
    filter: 'p',
    replacement: function (content) {
      return '\n\n' + content + '\n\n'
    }
  });

  const copyMarkdown = async (copyText) => {
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
                  <li className={state.section === "introduction" ? 'list-items active' : 'list-items'}
                    onClick={() => {
                      dispatch({
                        type: "SHOW_SECTION",
                        payload: "introduction",
                      });
                    }}
                  >
                    <a>
                      <i className="lni lni-user icons" />
                      <span className="text nav-text">Introduction</span>
                      <span className={state.sidebar === "open" ? "d-none" : "menu-tooltip"}>Introduction</span>
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
                      <i className="lni lni-link icons" />
                      <span className="text nav-text">Socials</span>
                      <span className={state.sidebar === "open" ? "d-none" : "menu-tooltip"}>Socials</span>
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
                      <i className="lni lni-bolt-alt icons" />
                      <span className="text nav-text">Skills</span>
                      <span className={state.sidebar === "open" ? "d-none" : "menu-tooltip"}>Skills</span>
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
                      <i className="lni lni-shield icons" />
                      <span className="text nav-text">Badges</span>
                      <span className={state.sidebar === "open" ? "d-none" : "menu-tooltip"}>Badges</span>
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
                      <i className="lni lni-heart icons" />
                      <span className="text nav-text">Support</span>
                      <span className={state.sidebar === "open" ? "d-none" : "menu-tooltip"}>Support</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bottom-content">
                <li className="">
                  <Link to="/" >
                    <a>
                      <i className="lni lni-exit icons" />
                      <nobr><span className="text nav-text">Go Home</span></nobr>
                      <span className={state.sidebar === "open" ? "d-none" : "menu-tooltip"}><nobr>Go Back Home</nobr></span>
                    </a>
                  </Link>
                </li>
                <li className="" style={{ cursor: 'pointer' }}
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
          <div>
            {
              isMobile ? (
                <div className='row'>
                  <div className="col-12 pe-0">
                    <LeftContent />
                  </div>
                  <div className="col-12 ps-0">
                    <RightContent copyMarkdown={copyMarkdown} copyStatus={copyStatus} ref={{ renderedMarkdownRef, previewRef }} />
                  </div>
                </div>
              ) :
                (
                  <Split className="split" minSize={500} snapOffset={0} gutterSize={5}>
                    <LeftContent />
                    <RightContent copyMarkdown={copyMarkdown} copyStatus={copyStatus} ref={{ renderedMarkdownRef, previewRef }} />
                  </Split>
                )
            }
          </div>
        </div>
      </div >
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Main
