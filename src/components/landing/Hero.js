import React, { useEffect } from "react";
import useApp from '../../Context/AppContext.js';


import hero from "../../assets/images/landing/hero.png";
import dotshape from "../../assets/images/landing/dotted-shape.svg";
import dotshapedark from "../../assets/images/landing/dotted-shape-dark.svg";
import mockdark from "../../assets/images/landing/mock-dark.png";
import mocklight from "../../assets/images/landing/mock-light.png";

import { Link } from "react-router-dom";

const Hero = () => {

    const { state, dispatch } = useApp()

    return (
        <div>
            <>
                {/* ====== Hero Start ====== */}
                <section className="ud-hero" id="home">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div
                                    className="ud-hero-content wow slideInLeft"
                                    data-wow-delay=".2s"
                                >
                                    <h1 className="ud-hero-title">
                                        Create a stunning <br />
                                        <i style={{ color: '#ADB4D7' }}>GitHub</i> profile in minutes
                                    </h1>
                                    <p className="ud-hero-desc">
                                        Generate Readme.md for your profile and show off your skills, experience and projects.
                                    </p>
                                    <ul className="ud-hero-buttons">
                                        <li>
                                            <Link
                                                to="/create-profile"
                                                className="ud-main-btn ud-white-btn"
                                            >
                                                Get Started
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href="https://github.com/uideck/play-bootstrap"
                                                rel="nofollow noopener"
                                                target="_blank"
                                                className="ud-main-btn ud-link-btn"
                                            >
                                                <i class="fa-brands fa-github"></i> &nbsp;
                                                GitHub
                                                {/* <i className="lni lni-arrow-right" /> */}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="ud-hero-image wow fadeInUp"
                                    data-wow-delay=".25s"
                                >
                                    <img src={state.theme === "dark" ? mocklight : mockdark} alt="hero-image" />
                                    <img src={state.theme === "dark" ? dotshape : dotshapedark} alt="shape" className="shape shape-1" />
                                    <img src={state.theme === "dark" ? dotshape : dotshapedark} alt="shape" className="shape shape-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ====== Hero End ====== */}
            </>
        </div>
    );
};

export default Hero;
