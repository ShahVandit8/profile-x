import React, { forwardRef } from 'react'
import useApp from '../../Context/AppContext'

const Preview = forwardRef(({ }, ref) => {

    const { state } = useApp()

    return (
        <div className="preview-container" ref={ref}>
            {!state.introduction.name ? null : (
                <h1>Hello 👋 I am {state.introduction.name}</h1>
            )}
            {state.introduction.subtitle ? (
                <h2>{state.introduction.subtitle}</h2>
            ) : null}
            {state.introduction.longDescription ? (
                <p>
                    {state.introduction.longDescription}
                </p>
            ) : null}
            <ul>

                {/* Location */}
                {state.introduction.location ? (
                    <li>
                        🌍&nbsp; I&apos;m from {state.introduction.location}
                    </li>
                ) : null}

                {/* Email */}
                {state.introduction.email ? (
                    <li>
                        📫&nbsp; Reach me at{" "}
                        <a href={`mailto:${state.introduction.email}`}>
                            {state.introduction.email}
                        </a>
                    </li>
                ) : null}

                {/* Portfolio */}
                {
                    state.introduction.portfolioLink ? (
                        <li>
                            👨‍💻&nbsp; Check out my portfolio at{" "}
                            <a
                                href={`http://${state.introduction.portfolioLink}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                MyPortfolio
                            </a>
                        </li>
                    ) : null}

                {/* Resume */}
                {state.introduction.resumeLink ? (
                    <li>
                        📄&nbsp; Check out my resume at{" "}
                        <a
                            href={`http://${state.introduction.resumeLink}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            MyResume
                        </a>
                    </li>
                ) : null}

                {/* Current Project */}
                {state.introduction.workingOnTitle && state.introduction.workingOnLink.length === 0 ?
                    (<li>
                        🔭&nbsp; I&apos;m currently working on{" "}
                        {state.introduction.workingOnTitle}
                    </li>)
                    :
                    state.introduction.workingOnTitle &&
                        state.introduction.workingOnLink ? (
                        <li>
                            🔭&nbsp; I&apos;m currently working on{" "}
                            <a
                                href={`http://${state.introduction.workingOnLink}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {state.introduction.workingOnTitle}
                            </a>
                        </li>
                    ) :
                        state.introduction.workingOnTitle.length === 0 && state.introduction.workingOnLink ?
                            (<li>
                                🔭&nbsp; I&apos;m currently working on{" "}
                                <a
                                    href={`http://${state.introduction.workingOnLink}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    MyProject
                                </a>
                            </li>)
                            :
                            null
                }
                {state.introduction.learning ? (
                    <li>
                        🌱&nbsp; I&apos;m currently learning {state.introduction.learning}
                    </li>
                ) : null}

                {state.introduction.askmeabout ? (
                    <li>
                        💬&nbsp; Ask me about {state.introduction.askmeabout}
                    </li>
                ) : null}

                {state.introduction.funfact ? (
                    <li>
                        ⚡&nbsp; Fun fact about me {state.introduction.funfact}
                    </li>
                ) : null}
            </ul>

            {
                (state.socials.github.linkSuffix.trim().length ||
                    state.socials.twitter.linkSuffix.trim().length ||
                    state.socials.threads.linkSuffix.trim().length ||
                    state.socials.hashnode.linkSuffix.trim().length ||
                    state.socials.medium.linkSuffix.trim().length ||
                    state.socials.devdotto.linkSuffix.trim().length ||
                    state.socials.linkedin.linkSuffix.trim().length ||
                    state.socials.twitch.linkSuffix.trim().length ||
                    state.socials.youtube.linkSuffix.trim().length ||
                    state.socials.discord.linkSuffix.trim().length ||
                    state.socials.instagram.linkSuffix.trim().length ||
                    state.socials.facebook.linkSuffix.trim().length ||
                    state.socials.dribbble.linkSuffix.trim().length ||
                    state.socials.behance.linkSuffix.trim().length ||
                    state.socials.codesandbox.linkSuffix.trim().length ||
                    state.socials.codepen.linkSuffix.trim().length ||
                    state.socials.stackoverflow.linkSuffix.trim().length
                )
                    ? (<h3>Socials</h3>)
                    : (<></>)
            }

            {
                state.socials.github.linkSuffix ? (
                    <a href={`https://www.github.com/` + state.socials.github.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.theme === "dark" ? state.socials.github.darkPath : state.socials.github.path} alt="github" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.twitter.linkSuffix ? (
                    <a href={`https://www.x.com/` + state.socials.twitter.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.theme === "dark" ? state.socials.twitter.darkPath : state.socials.twitter.path} alt="twitter" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.devdotto.linkSuffix ? (
                    <a href={`https://www.dev.to/` + state.socials.devdotto.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.theme === "dark" ? state.socials.devdotto.darkPath : state.socials.devdotto.path} alt="devdotto" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.codepen.linkSuffix ? (
                    <a href={`https://www.codepen.io/` + state.socials.codepen.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.theme === "dark" ? state.socials.codepen.darkPath : state.socials.codepen.path} alt="codepen" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.codesandbox.linkSuffix ? (
                    <a href={`https://www.codesandbox.io/u/` + state.socials.codesandbox.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.theme === "dark" ? state.socials.codesandbox.darkPath : state.socials.codesandbox.path} alt="codesandbox" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.stackoverflow.linkSuffix ? (
                    <a href={`https://www.stackoverflow.com/user/` + state.socials.stackoverflow.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.socials.stackoverflow.path} alt="stackoverflow" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.linkedin.linkSuffix ? (
                    <a href={`https://www.linkedin.com/in/` + state.socials.linkedin.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.socials.linkedin.path} alt="linkedin" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.facebook.linkSuffix ? (
                    <a href={`https://www.facebook.com/` + state.socials.facebook.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.socials.facebook.path} alt="facebook" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.instagram.linkSuffix ? (
                    <a href={`https://www.instagram.com/` + state.socials.instagram.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.socials.instagram.path} alt="instagram" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.threads.linkSuffix ? (
                    <a href={`https://www.threads.net/@` + state.socials.threads.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.theme === "dark" ? state.socials.threads.darkPath : state.socials.threads.path} alt="threads" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.dribbble.linkSuffix ? (
                    <a href={`https://www.dribbble.com/` + state.socials.dribbble.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.socials.dribbble.path} alt="dribbble" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.behance.linkSuffix ? (
                    <a href={`https://www.behance.com/` + state.socials.behance.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.socials.behance.path} alt="behance" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.hashnode.linkSuffix ? (
                    <a href={`https://` + state.socials.hashnode.linkSuffix + `.hashnode.dev`} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.socials.hashnode.path} alt="hashnode" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.medium.linkSuffix ? (
                    <a href={`https://www.medium.com/` + state.socials.medium.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.theme === "dark" ? state.socials.medium.darkPath : state.socials.medium.path} alt="medium" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.youtube.linkSuffix ? (
                    <a href={`https://www.youtube.com/@` + state.socials.youtube.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.socials.youtube.path} alt="youtube" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.discord.linkSuffix ? (
                    <a href={`https://www.discord.com/user/` + state.socials.discord.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.socials.discord.path} alt="discord" />
                    </a>
                ) : (<></>)
            }
            {
                state.socials.twitch.linkSuffix ? (
                    <a href={`https://www.twitch.tv/` + state.socials.twitch.linkSuffix} target="_blank" rel="noreferrer">
                        <img height="30" width="30" style={{ marginRight: "10px" }} src={state.socials.twitch.path} alt="twitch" />
                    </a>
                ) : (<></>)
            }

            {
                (state.support.buymeacoffee.linkSuffix.trim().length ||
                    state.support.kofi.linkSuffix.trim().length
                )
                    ? (<h3>Support</h3>)
                    : (<></>)
            }

            {
                state.support.buymeacoffee.linkSuffix ? (
                    <a href={`https://www.buymeacoffee.com/` + state.support.buymeacoffee.linkSuffix} target="_blank" rel="noreferrer">
                        <img width="150" style={{ marginRight: "10px" }} src={state.support.buymeacoffee.previewIMG} alt="buymeacoffee" />
                    </a>
                ) : (<></>)
            }
            {
                state.support.kofi.linkSuffix ? (
                    <a href={`https://ko-fi.com/` + state.support.kofi.linkSuffix} target="_blank" rel="noreferrer">
                        <img width="150" style={{ marginRight: "10px" }} src={state.support.kofi.previewIMG} alt="kofi" />
                    </a>
                ) : (<></>)
            }
        </div>
    )
}
)

export default Preview
