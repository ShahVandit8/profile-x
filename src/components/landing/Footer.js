import React from 'react'

import { Link } from 'react-router-dom';

import footerShape1 from "../../assets/images/landing/footer-shape-1.svg";
import footerShape2 from "../../assets/images/landing/footer-shape-2.svg";
import footerShape3 from "../../assets/images/landing/footer-shape-3.svg";


const Footer = () => {
    return (
        <>
            {/* ====== Footer Start ====== */}
            <footer className="ud-footer wow fadeInUp" data-wow-delay=".15s">
                <div className="shape shape-1">
                    <img src={footerShape1} alt="shape" />
                </div>
                <div className="shape shape-2">
                    <img src={footerShape2} alt="shape" />
                </div>
                <div className="shape shape-3">
                    <img src={footerShape3} alt="shape" />
                </div>
                <div className="ud-footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="ud-widget">
                                    <Link className="navbar-brand" to="/">
                                        <span className="nav-title">Profile<i style={{ color: '#ADB4D7', fontWeight: '700' }}>X</i></span>
                                        {/* <img src={logoWhite} className="nav-logo" alt="Logo" /> */}
                                    </Link>
                                    <p className="ud-widget-desc">
                                        Brilliant Platform to Build GitHub Profile Faster.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <p className="ud-footer-bottom-right">
                                    Project Developed By &nbsp;
                                    <a href="https://github.com/ShahVandit8" rel="nofollow">
                                        Vandit Shah
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* ====== Footer End ====== */}
        </>
    )
}

export default Footer
