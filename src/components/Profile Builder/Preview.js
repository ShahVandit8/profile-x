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
                    state.socials.hashnode.linkSuffix.trim().length)
                    ? (<h3>Socials</h3>)
                    : (<></>)
            }
        </div>
    )
}
)

export default Preview
