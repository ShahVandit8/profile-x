import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import logoWhite from "../../assets/images/logo/logo-white.png";
import logoBlue from "../../assets/images/logo/logo-blue.png";

const Navbar = () => {
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

            // === logo change
            //   if (udHeader.classList.contains("sticky")) {
            //     logo.src = "./assets/images/logo/logo-blue.png";
            //   } else {
            //     logo.src = "./assets/images/logo/logo-white.png";
            //   }
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
                                        {/* <img src={logoWhite} className="nav-logo" alt="Logo" /> */}
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
                                                    Create Profile
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="navbar-btn d-none d-sm-inline-block">
                                        <Link
                                            className="ud-main-btn ud-white-btn"
                                            to="/create-profile"
                                        >
                                            Create Profile
                                        </Link>
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
