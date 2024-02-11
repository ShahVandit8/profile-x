import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Main from './Main'

const Navbar = (props) => {

    const {page, setpage, nextPage, previousPage} = props
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
                    <li className={page == 1 ? 'active' : ''} onClick={() => setpage(1)}>
                        <a>
                            Introduction
                        </a>
                    </li>
                    <li className={page == 2 ? 'active' : ''} onClick={() => setpage(2)}>
                        <a>
                            Skills
                        </a>
                    </li>
                    <li className={page == 3 ? 'active' : ''} onClick={() => setpage(3)}>
                        <a>
                            Socials
                        </a>
                    </li>
                    <li className={page == 4 ? 'active' : ''} onClick={() => setpage(4)}>
                        <a>
                            Badges
                        </a>
                    </li>
                    <li className={page == 5 ? 'active' : ''} onClick={() => setpage(5)}>
                        <a>
                            Support
                        </a>
                    </li>
                </ul>
            </div>
            <div id="center" className="main center">
                <Main page={page} setpage={setpage} nextPage={nextPage} previousPage={previousPage} />
            </div>
        </>

    )
}

export default Navbar
