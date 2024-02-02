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
                <div className="ud-footer-widgets">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="ud-widget">
                                    <Link className="navbar-brand" to="/">
                                        <span className="nav-title">Profile<i style={{ color: '#ADB4D7', fontWeight: '700' }}>X</i></span>
                                        {/* <img src={logoWhite} className="nav-logo" alt="Logo" /> */}
                                    </Link>
                                    <p className="ud-widget-desc">
                                        Brilliant Platform to Build Professional Resume Faster.
                                    </p>
                                    <ul className="ud-widget-socials">
                                        <li>
                                            <a href="https://twitter.com/MusharofChy">
                                                <i className="lni lni-facebook-filled" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/MusharofChy">
                                                <i className="lni lni-twitter-filled" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/MusharofChy">
                                                <i className="lni lni-instagram-filled" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/MusharofChy">
                                                <i className="lni lni-linkedin-original" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                                <div className="ud-widget">
                                    <h5 className="ud-widget-title">About Us</h5>
                                    <ul className="ud-widget-links">
                                        <li>
                                            <a href="javascript:void(0)">Home</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Features</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">About</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Testimonial</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                                <div className="ud-widget">
                                    <h5 className="ud-widget-title">Features</h5>
                                    <ul className="ud-widget-links">
                                        <li>
                                            <a href="javascript:void(0)">How it works</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Privacy policy</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Terms of service</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Refund policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                                <div className="ud-widget">
                                    <h5 className="ud-widget-title">Our Products</h5>
                                    <ul className="ud-widget-links">
                                        <li>
                                            <a
                                                href="https://lineicons.com/"
                                                rel="nofollow noopner"
                                                target="_blank"
                                            >
                                                Lineicons
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://ecommercehtml.com/"
                                                rel="nofollow noopner"
                                                target="_blank"
                                            >
                                                Ecommerce HTML
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://ayroui.com/"
                                                rel="nofollow noopner"
                                                target="_blank"
                                            >
                                                Ayro UI
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://graygrids.com/"
                                                rel="nofollow noopner"
                                                target="_blank"
                                            >
                                                Plain Admin
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ud-footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <ul className="ud-footer-bottom-left">
                                    <li>
                                        <a href="javascript:void(0)">Privacy policy</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Support policy</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Terms of service</a>
                                    </li>
                                </ul>
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
