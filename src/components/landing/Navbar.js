import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import useApp from '../../Context/AppContext.js';

const Navbar = () => {

    const { state, dispatch } = useApp()


    useEffect(() => {
        const handleScroll = () => {
            const udHeader = document.querySelector(".ud-header");
            const sticky = udHeader.offsetTop;
            const logo = document.querySelector(".nav-logo");

            if (window.pageYOffset > sticky) {
                udHeader.classList.add("sticky");
            } else {
                udHeader.classList.remove("sticky");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <>
                {/* ====== Header Start ====== */}
                <header className="ud-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <Link className="navbar-brand" to="/">
                                        <span className="nav-title">Profile<i style={{ color: '#ADB4D7', fontWeight: '700' }}>X</i></span>
                                    </Link>
                                    <button
                                        className="navbar-toggler"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarNavAltMarkup"
                                        aria-controls="navbarNavAltMarkup"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="toggler-icon"> </span>
                                        <span className="toggler-icon"> </span>
                                        <span className="toggler-icon"> </span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <ul id="nav" className="navbar-nav mx-auto">
                                            <li className="nav-item">
                                                <a className="ud-menu-scroll" href="#home">
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="ud-menu-scroll" href="#features">
                                                    Features
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="ud-menu-scroll" href="#about">
                                                    About
                                                </a>
                                            </li>
                                            <li className="nav-item d-inline-block d-sm-none">
                                                <Link
                                                    className="ud-main-btn ud-white-btn text-white"
                                                    to="/create-profile"
                                                >
                                                    Build Profile
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="navbar-btn d-none d-sm-inline-block">
                                        <Link
                                            className="ud-main-btn ud-white-btn"
                                            to="/create-profile"
                                        >
                                            Build Profile
                                        </Link>
                                    </div>
                                    <div>
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
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* ====== Header End ====== */}
            </>
        </>
    );
};

export default Navbar;
