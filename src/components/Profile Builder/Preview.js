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

            <div
                className={`d-flex flex-wrap gap-2 ${state.badges.githubFollowers.selected ||
                    state.badges.twitterFollowers.selected || state.badges.twitchStatus.selected
                    ? "mb-4"
                    : "mb-0"
                    }`}
            >
                {state.badges.githubFollowers.selected ? (
                    <a href={`https://github.com/${state.socials.github.linkSuffix}`}><img
                        src={`https://img.shields.io/github/followers/${state.socials.github.linkSuffix}?logo=github&style=for-the-badge&color=${state.badges.cardStyle.iconColor}&labelColor=${state.badges.cardStyle.bgColor}`}
                        className="img-fluid"
                        alt='Github' />
                    </a>
                ) : null}
                {state.badges.twitterFollowers.selected ? (
                    <a href={`https://x.com/${state.socials.twitter.linkSuffix}`}>
                        <img
                            src={`https://img.shields.io/twitter/follow/${state.socials.twitter.linkSuffix}?logo=x&style=for-the-badge&color=${state.badges.cardStyle.iconColor}&labelColor=${state.badges.cardStyle.bgColor}`}
                            className="img-fluid"
                            alt='Twitter' />
                    </a>
                ) : null}
                {state.badges.twitchStatus.selected ? (
                    <a href={`${state.socials.twitch.linkPrefix}${state.socials.twitch.linkSuffix}`}>
                        <img
                            src={`https://img.shields.io/twitch/status/${state.socials.twitch.linkSuffix}?logo=twitch&style=for-the-badge&color=${state.badges.cardStyle.iconColor}&labelColor=${state.badges.cardStyle.bgColor}&label=TWITCH+STATUS`}
                            className="img-fluid"
                            alt='' />
                    </a>
                ) : null}
            </div>


            {
                (state.skills.core.length ||
                    state.skills.frontend.length ||
                    state.skills.backend.length ||
                    state.skills.software.length ||
                    state.skills.web3.length ||
                    state.skills.cloud.length ||
                    state.skills.other.length
                )
                    ? (<h3>Skills</h3>)
                    : (<></>)
            }


            <div
                className={`d-flex flex-wrap gap-1.5 ${state.skills.core.length < 1 &&
                    state.skills.frontend.length < 1 &&
                    state.skills.backend.length < 1 &&
                    state.skills.other.length < 1 &&
                    state.skills.software.length < 1 &&
                    state.skills.web3.length < 1 &&
                    state.skills.cloud.length < 1
                    ? "mb-0"
                    : "mb-0"
                    }`}
            >
                {/* Icons Display */}
                {Object.values(state.skills).some((arr) => arr.length > 0) ? (
                    <div className="d-flex gap-1.5 flex-wrap">
                        {Object.values(state.skills)
                            .flat()
                            .map((icon) => {
                                return (
                                    <div key={`${icon.path}`} className="position-relative m-1">
                                        <a
                                            href={`${icon.link}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {icon.darkPath ? (
                                                <img
                                                    src={
                                                        state.theme === "dark"
                                                            ? `https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/skills/${icon.iTag}-colored-dark.svg`
                                                            : `https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/skills/${icon.iTag}-colored.svg`
                                                    }
                                                    alt={`${icon.name}`}
                                                    width="36"
                                                    height="36"
                                                />
                                            ) : (
                                                <img
                                                    src={`https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/skills/${icon.iTag}-colored.svg`}
                                                    alt={`${icon.name}`}
                                                    width="36"
                                                    height="36"
                                                />
                                            )}
                                        </a>
                                    </div>
                                );
                            })}
                    </div>
                ) : null}
            </div>

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
                    <a href={`https://www.medium.com/@` + state.socials.medium.linkSuffix} target="_blank" rel="noreferrer">
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
                    <a href={`https://www.discord.com/users/` + state.socials.discord.linkSuffix} target="_blank" rel="noreferrer">
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
            <br />

            <div className="mb-2">
                {
                    (state.badges.githubCommitsGraph.selected ||
                        state.badges.githubStatsCard.selected ||
                        state.badges.githubStreak.selected ||
                        state.badges.githubVisits.selected ||
                        state.badges.reposCard.selected ||
                        state.badges.topLangsCard.selected ||
                        state.badges.twitchStatus.selected
                    )
                        ? (<h3>Badges</h3>)
                        : (<></>)
                }
                {
                    state.badges.githubStatsCard.selected ||
                        state.badges.githubCommitsGraph.selected ||
                        state.badges.githubStreak.selected ||
                        state.badges.topLangsCard.selected ? (
                        <p className="font-bold text-white">My GitHub Stats</p>
                    ) : null}

                {state.badges.githubStatsCard.selected ? (
                    <><a
                        href={`http://www.github.com/${state.socials.github.linkSuffix}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={`https://github-readme-stats.vercel.app/api?username=${state.socials.github.linkSuffix
                                }&hide=${state.badges.githubStatsCard.stars ? "" : "stars,"}${state.badges.githubStatsCard.commits ? "" : "commits,"
                                }${state.badges.githubStatsCard.prs ? "" : "prs,"}${state.badges.githubStatsCard.issues ? "" : "issues,"
                                }${state.badges.githubStatsCard.contribs ? "" : "contribs"}${state.badges.githubStatsCard.privateCommits
                                    ? "&count_private=true"
                                    : ""
                                }&title_color=${state.badges.cardStyle.titleColor
                                }&text_color=${state.badges.cardStyle.textColor}&icon_color=${state.badges.cardStyle.iconColor
                                }&bg_color=${state.badges.cardStyle.bgColor
                                }&hide_border=true&border_radius=0&show_icons=true`}
                            className="object-scale-down" alt="GitHub Stats"
                        />
                    </a>
                        <br />
                    </>
                ) : null}

                {state.badges.githubStreak.selected ? (
                    <a
                        href={`http://www.github.com/${state.socials.github.linkSuffix}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={`https://streak-stats.demolab.com/?user=${state.socials.github.linkSuffix
                                }&stroke=${state.badges.cardStyle.textColor
                                }&background=${state.badges.cardStyle.bgColor
                                }&ring=${state.badges.cardStyle.titleColor
                                }&fire=${state.badges.cardStyle.titleColor
                                }&currStreakNum=${state.badges.cardStyle.textColor
                                }&currStreakLabel=${state.badges.cardStyle.titleColor
                                }&sideNums=${state.badges.cardStyle.textColor
                                }&sideLabels=${state.badges.cardStyle.textColor
                                }&dates=${state.badges.cardStyle.textColor}&hide_border=true`}
                            className="object-scale-down" alt="GitHub Streak"
                        />
                    </a>
                ) : null}

                {state.badges.githubCommitsGraph.selected ? (
                    <a
                        href={`http://www.github.com/${state.socials.github.linkSuffix}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            width="90%"
                            src={`https://github-readme-activity-graph.vercel.app/graph?username=${state.socials.github.linkSuffix}&bg_color=${state.badges.cardStyle.bgColor}&color=${state.badges.cardStyle.textColor}&line=${state.badges.cardStyle.iconColor}&point=${state.badges.cardStyle.textColor}&area_color=${state.badges.cardStyle.bgColor}&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph`}
                            alt='Github Commit Graph' />
                    </a>
                ) : null}

                {state.badges.topLangsCard.selected ? (
                    <a
                        href={`http://www.github.com/${state.socials.github.linkSuffix}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${state.socials.github.linkSuffix}&langs_count=10&title_color=${state.badges.cardStyle.titleColor}&text_color=${state.badges.cardStyle.textColor}&icon_color=${state.badges.cardStyle.iconColor}&bg_color=${state.badges.cardStyle.bgColor}&hide_border=true&locale=en&custom_title=Top%20%Languages`}
                            alt='Github Top Languages' />
                    </a>
                ) : null}

                {state.badges.reposCard.selected ? (
                    <>
                        <p className="mt-2 font-bold text-white">Top Repositories</p>
                        <div className="grid grid-cols-2 gap-4">
                            {state.badges.reposCard.repoOne ? (
                                <a
                                    href={`https://www.github.com/${state.socials.github.linkSuffix}/${state.badges.reposCard.repoOne}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={`https://github-readme-stats.vercel.app/api/pin/?username=${state.socials.github.linkSuffix}&repo=${state.badges.reposCard.repoOne}&title_color=${state.badges.cardStyle.titleColor}&text_color=${state.badges.cardStyle.textColor}&icon_color=${state.badges.cardStyle.iconColor}&bg_color=${state.badges.cardStyle.bgColor}&hide_border=true&locale=en`}
                                        alt='' />
                                </a>
                            ) : (
                                <span className="text-sm">
                                    Please enter a repository name.
                                </span>
                            )}

                            {state.badges.reposCard.repoTwo ? (
                                <a
                                    href={`https://www.github.com/${state.socials.github.linkSuffix}/${state.badges.reposCard.repoTwo}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={`https://github-readme-stats.vercel.app/api/pin/?username=${state.socials.github.linkSuffix}&repo=${state.badges.reposCard.repoTwo}&title_color=${state.badges.cardStyle.titleColor}&text_color=${state.badges.cardStyle.textColor}&icon_color=${state.badges.cardStyle.iconColor}&bg_color=${state.badges.cardStyle.bgColor}&hide_border=true&locale=en`}
                                        alt='' />
                                </a>
                            ) : null}

                            {state.badges.reposCard.repoThree ? (
                                <a
                                    href={`https://www.github.com/${state.socials.github.linkSuffix}/${state.badges.reposCard.repoThree}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={`https://github-readme-stats.vercel.app/api/pin/?username=${state.socials.github.linkSuffix}&repo=${state.badges.reposCard.repoThree}&title_color=${state.badges.cardStyle.titleColor}&text_color=${state.badges.cardStyle.textColor}&icon_color=${state.badges.cardStyle.iconColor}&bg_color=${state.badges.cardStyle.bgColor}&hide_border=true&locale=en`}
                                        alt='' />
                                </a>
                            ) : null}

                            {state.badges.reposCard.repoFour ? (
                                <a
                                    href={`https://www.github.com/${state.socials.github.linkSuffix}/${state.badges.reposCard.repoFour}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={`https://github-readme-stats.vercel.app/api/pin/?username=${state.socials.github.linkSuffix}&repo=${state.badges.reposCard.repoFour}&title_color=${state.badges.cardStyle.titleColor}&text_color=${state.badges.cardStyle.textColor}&icon_color=${state.badges.cardStyle.iconColor}&bg_color=${state.badges.cardStyle.bgColor}&hide_border=true&locale=en`}
                                        alt='' />
                                </a>
                            ) : null}
                        </div>
                    </>
                ) : null}

            </div>

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
