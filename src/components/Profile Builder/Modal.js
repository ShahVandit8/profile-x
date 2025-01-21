import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <Link className="navbar-brand" style={{ marginTop: '10px' }} to="/">
                        <span style={{ fontWeight: "normal" }} className="nav-title ">Profile<i style={{ color: '#ADB4D7', fontWeight: '700' }}>X</i></span>
                    </Link>
                    <button onClick={onClose} className="clbtn btn-close">
                        Close
                    </button>
                </div>
                <div className="modal-content raw">
                    <div className="modal-left col-6">
                        <h2>🎉 Success! Code Copied.</h2>
                        <p className="modal-p">
                        Your code is ready, and with just a few clicks, you'll have a sleek new GitHub profile.
                        </p>
                        <p className="modal-bold">Here&apos;s what to do next:</p>
                        <ul className="modal-list">
                            <li>Visit your GitHub profile (e.g., https://www.github.com/[YourName])</li>
                            <li>
                                Click the{" "}
                                <svg
                                    className="modal-icon"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    ></path>
                                </svg>{" "}
                                button on [YourName]/ReadMe.md.
                            </li>
                            <li>Paste your code into the &apos;Edit file&apos; text editor.</li>
                            <li>Click the &apos;Preview&apos; tab to preview your new profile.</li>
                            <li>Click &apos;Commit Changes&apos; to save your new GitHub profile.</li>
                        </ul>
                        <a
                            className="btn btn-sponsor"
                            href="https://buymeacoffee.com/xK9lZSuHIj"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src="https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/29170826/buy-me-a-coffee-logo-F1878A1EB2-seeklogo.com.png" alt="" />
                            Buy me a coffee
                        </a>
                    </div>
                    <div className="modal-right col-6">
                        <img src="https://i.ibb.co/xXNxsxx/how-to-use-profilex.gif" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
