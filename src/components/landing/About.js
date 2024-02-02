import React from 'react'

import aboutImg from "../../assets/images/landing/about.svg";

const About = () => {
    return (
        <>
            {/* ====== About Start ====== */}
            <section id="about" className="ud-about">
                <div className="container">
                    <div className="ud-about-wrapper wow fadeInUp" data-wow-delay=".2s">
                        <div className="ud-about-content-wrapper">
                            <div className="ud-about-content">
                                <span className="tag">About Us</span>
                                <h2>Brilliant Platform to Build Professional Resume Faster.</h2>
                                <p>
                                    At <b>ResumeX</b>, we redefine resume-building with innovation and
                                    user-centric design, crafting personalized and impactful
                                    resumes for professionals seeking to stand out confidently.
                                </p>
                                <p>
                                    Committed to simplicity and excellence, we revolutionize
                                    talent presentation, making every career journey unique and
                                    successful at ResumeX.
                                </p>
                                <a href="javascript:void(0)" className="ud-main-btn">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="ud-about-image">
                            <img src={aboutImg} alt="about-image" />
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== About End ====== */}
        </>
    )
}

export default About
