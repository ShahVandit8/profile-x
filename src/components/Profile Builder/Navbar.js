import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="header" >
                <Link className="navbar-brand" style={{float: 'right', marginTop: '10px'}} to="/">
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
                        Jelena Jovanovic <span>Web Developer</span>
                    </li>
                    <li>
                        <a href="https://vanila.io" target="_blank">
                            Company
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/plavookac" target="_blank">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/plavookac" target="_blank">
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg"
                            target="_blank"
                        >
                            YouTube
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/plavookac/" target="_blank">
                            Linkedin
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
