import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Main from './Main'

import useApp from '../../Context/AppContext'

const Navbar = () => {

    const { state, dispatch } = useApp()

    return (
        <>
            <div className="header" >
                <Link className="navbar-brand" style={{ float: 'right', marginTop: '10px' }} to="/">
                    <span className="nav-title ">Profile<i style={{ color: '#ADB4D7', fontWeight: '700' }}>X</i></span>
                    {/* <img src={logoWhite} className="nav-logo" alt="Logo" /> */}
                </Link>
            </div>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner diagonal part-1" />
                <div className="spinner horizontal" />
                <div className="spinner diagonal part-2" />
            </label>
            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                    <li className="side-logo">
                        <Link className="navbar-brand" style={{ marginTop: '10px'}} to="/">
                            <span style={{ fontWeight: "normal" }} className="nav-title ">Profile<i style={{ color: '#ADB4D7', fontWeight: '700' }}>X</i></span>
                        </Link>
                    </li>
                    <li className={state.section === "introduction" ? 'active' : ''}
                     onClick={() => {
                        dispatch({
                          type: "SHOW_SECTION",
                          payload: "introduction",
                        });
                      }}
                     >
                        <a>
                            Introduction
                        </a>
                    </li>
                    <li className={state.section === "skills" ? 'active' : ''} 
                    onClick={() => {
                        dispatch({
                          type: "SHOW_SECTION",
                          payload: "skills",
                        });
                      }}
                    >
                        <a>
                            Skills
                        </a>
                    </li>
                    <li className={state.section === "socials" ? 'active' : ''} 
                    onClick={() => {
                        dispatch({
                          type: "SHOW_SECTION",
                          payload: "socials",
                        });
                      }}
                    >
                        <a>
                            Socials
                        </a>
                    </li>
                    <li className={state.section === "badges" ? 'active' : ''} 
                    onClick={() => {
                        dispatch({
                          type: "SHOW_SECTION",
                          payload: "badges",
                        });
                      }}
                    >
                        <a>
                            Badges
                        </a>
                    </li>
                    <li className={state.section === "support" ? 'active' : ''} 
                    onClick={() => {
                        dispatch({
                          type: "SHOW_SECTION",
                          payload: "support",
                        });
                      }}
                    >
                        <a>
                            Support
                        </a>
                    </li>
                </ul>
            </div>
            <div id="center" className="main center">
                <Main  />
            </div>
        </>

    )
}

export default Navbar
