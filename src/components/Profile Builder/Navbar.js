import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
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
                    <li>
                        <a href="" target="_blank">
                            Introduction
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            Socials
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            Badges
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            Support
                        </a>
                    </li>
                </ul>
            </div>
            <div id="center" className="main center">
                <Outlet />
            </div>
        </>

    )
}

export default Navbar
