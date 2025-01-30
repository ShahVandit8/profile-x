import React from 'react'
import useApp from '../../Context/AppContext';
import aboutDark from "../../assets/images/landing/about-img.png";
import aboutLight from "../../assets/images/landing/about-light.png";

const About = () => {

    const { state } = useApp();

    return (
        <>
            {/* ====== About Start ====== */}
            <section id="about" className="ud-about">
                <div className="container">
                    <div className="ud-about-wrapper wow fadeInUp" data-wow-delay=".2s">
                        <div className="ud-about-content-wrapper">
                            <div className="ud-about-content">
                                <span className="tag">About Us</span>
                                <h2>Brilliant Platform to Build Professional GitHub Profile.</h2>
                                <p>
                                    ProfileX is a user-friendly platform for creating attractive GitHub profile READMEs. Customize your profile with templates, themes, and widgets. Stand out with ProfileX's advanced features. Try it today!
                                </p>
                                <p>
                                    Showcase your skills and projects with ProfileX's intuitive interface. Connect with the coding community and make a lasting impression. ProfileX: the ultimate GitHub profile README generator.
                                </p>
                            </div>
                        </div>
                        <div className="ud-about-image">
                            <img src={state.theme === "dark" ? aboutLight : aboutDark} className="about-img" alt="about-image" />
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== About End ====== */}
        </>
    )
}

export default About
