import React, { useState, useEffect, useRef } from 'react';
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

  const [input, setInput] = useState("")

  useEffect(() => {
    var turndownService = new TurndownService();
    let htmlOfElement = introductionRef.current.innerHTML;
    setRenderedMarkdown((renderedMarkdown) => ({
      ...renderedMarkdown,
      "introduction": turndownService.turndown(htmlOfElement),
    }));
  }, [])


  return (
    <div className="row">
      <div className="col-12 col-md-6 pe-0">
        <div className="left-content">
          {
            state.section === "introduction" ?
              <Introduction />
              :
              state.section === "skills" ?
                <Skills />
                :
                state.section === "socials" ?
                  <Socials />
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
              <button className="btn btn-sm nonactive-btn" style={{ float: 'right' }} type="button">
                <i class="fa-solid fa-copy me-2"></i>
                Copy
              </button>
            </div>
          </nav>
          <div className='content p-3'>
            {
              state.renderMode === "preview" ?
                <Preview ref={introductionRef} />
                :
                <div className="markdown-container">
                  {renderedMarkdown.introduction ? (
                    <p className="text-xs whitespace-pre-line break-all" style={{ "white-space": "pre-line", "word-break": "break-all"}}>
                      {renderedMarkdown.introduction}
                    </p>
                  ) : null}
                </div>
            }
          </div>

        </div>
        {/* <textarea className="textarea" /> */}
      </div>

    </div >
  )
}

export default Main
