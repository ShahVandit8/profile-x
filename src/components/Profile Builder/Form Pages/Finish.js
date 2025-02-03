import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import useApp from "../../../Context/AppContext";

const FinishSection = () => {
    const { state, dispatch } = useApp();
    const [stars, setStars] = useState(0);
    const [forks, setForks] = useState(0);
    const githubUsername = "shahvandit8";
    const repoName = "profile-x";

    useEffect(() => {
        fetch(`https://api.github.com/repos/${githubUsername}/${repoName}`)
            .then((res) => res.json())
            .then((data) => {
                setStars(data.stargazers_count || 0);
                setForks(data.forks_count || 0);
            });
    }, []);

    return (
        <>
            <div className="headbar">
                <h3>Finished</h3>
                <p>Congratulations!! your profile is ready 💯</p>
                <div className=" d-flex justify-content-between mt-3">
                    <button
                        onClick={() => {
                            dispatch({
                                type: "SHOW_SECTION",
                                payload: "support",
                            });
                        }}
                        className="btn btn-sm section-btn me-2" type="button">
                        <i class="fa-solid fa-arrow-left me-2"></i>
                        Previous section
                    </button>
                </div>
            </div>

            <div className="finish-section  d-flex align-items-center justify-content-center">
                <div className="fs-content text-center">
                    <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />
                    <div className="finish-heading mb-3">
                        <h2 className="mb-3">Profile Created Successfully! 🎉</h2>
                        <p className="mb-3">Your profile setup is complete. You can now copy your Markdown code from the top right corner.</p>
                    </div>
                    <br />
                    <div className="cta-box p-3 rounded">
                        <h6>If you like the app, show your support! ❤️</h6>
                        <div className="support-buttons d-flex justify-content-center flex-column flex-lg-row">
                            <a
                                href={`https://github.com/${githubUsername}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="support-btn d-flex align-items-center mb-2 mb-lg-0"
                            >
                                <img src={state.theme === "dark" ? "icons/socials/github-dark.svg" : "icons/socials/github.svg"} alt="github" className='form-icon me-2' />
                                Follow @{githubUsername}
                            </a>
                            <a
                                href={`https://github.com/${githubUsername}/${repoName}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="support-btn d-flex align-items-center mb-2 mb-lg-0"
                            >
                                <i className="bx bx-star form-icon me-2" style={{ fontSize: "20px" }}></i> Star ({stars})
                            </a>
                            <a
                                href={`https://github.com/${githubUsername}/${repoName}/fork`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="support-btn d-flex align-items-center"
                            >
                                <i className="bx bx-git-repo-forked form-icon me-2" style={{ fontSize: "20px" }}></i> Fork ({forks})
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FinishSection;
