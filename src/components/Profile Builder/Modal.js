import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useApp from "../../Context/AppContext";

const Modal = ({ isOpen, onClose }) => {
    const { state } = useApp();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div>
                {
                    isMobile ? (
                        <div className="modal-container">
                            <div className="modal-content">
                                <h4 className="mx-auto">🎉 Success! Code Copied.</h4>
                                <p className="modal-p text-center">
                                    Your code is ready, and with just a few clicks, you'll have a sleek new GitHub profile.
                                </p>
                                <p className="modal-p text-center mt-2"><a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme"><u>Click Here</u></a> to know what to do next.</p>
                                <button onClick={onClose} className="btn btn-sm nonactive-btn w-25 mx-auto mt-2" style={{ float: 'right' }} type="button">
                                    Close
                                </button>
                            </div>
                        </div>
                    ) :
                        (
                            <div className="modal-container">
                                <div className="modal-header">
                                    <Link className="navbar-brand" style={{ marginTop: '10px' }} to="/">
                                        <span style={{ fontWeight: "normal" }} className="nav-title ">Profile<i style={{ color: '#ADB4D7', fontWeight: '700' }}>X</i></span>
                                    </Link>
                                    <button onClick={onClose} className="btn btn-sm nonactive-btn" style={{ float: 'right' }} type="button">
                                        Close
                                    </button>
                                </div>
                                <div className="modal-content">
                                    <div className="modal-left col-12 col-md-6">
                                        <h3>🎉 Success! Code Copied.</h3>
                                        <p className="modal-p">
                                            Your code is ready, and with just a few clicks, you'll have a sleek new GitHub profile.
                                        </p>
                                        <p className="modal-bold">Here&apos;s what to do next:</p>
                                        <ul className="modal-list">
                                            <li>On Github, click + New repository button on upper-right corner.</li>
                                            <li>Enter a repository name that matches your GitHub username.</li>
                                            <li>Check Public and select Initialize this repository with a README.</li>
                                            <li>Click Create repository to generate your profile README.</li>
                                            <li>In the repository, click Edit README to customize your profile.</li>
                                            <li>Paste the code you just copied, then click Commit Changes to save your new GitHub profile.</li>
                                        </ul>
                                        <a
                                            className="btn btn-sponsor nonactive-btn me-2 p-2"
                                            href="https://buymeacoffee.com/xK9lZSuHIj"
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            <img src="icons/support/buymeacoffee.svg" alt="buymeacoffe logo" />
                                            Buy me a coffee
                                        </a>
                                        <a
                                            className="btn btn-sponsor nonactive-btn p-2"
                                            href="https://github.com/ShahVandit8/profile-x"
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            <img
                                                src={state.theme === 'dark' ? 'icons/socials/github-dark.svg' : 'icons/socials/github.svg'}
                                                alt="Github Logo"
                                            />
                                            Star on Github
                                        </a>
                                    </div>
                                    <div className="modal-right col-12 col-md-6">
                                        <img src="https://i.ibb.co/xXNxsxx/how-to-use-profilex.gif" alt="" />
                                    </div>
                                </div>
                            </div>
                        )
                }

            </div>
        </div>
    );
};

export default Modal;
