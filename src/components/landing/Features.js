import React from 'react'
import useApp from '../../Context/AppContext'

const Features = () => {

    const { state } = useApp();

    return (
        <>
            {/* ====== Features Start ====== */}
            <section className="feature-section py-5" id="features">
                <div className="container-xl feature-container">
                    <div className="row align-items-center">
                        <div
                            className="col-12 col-md-6 text-center text-md-start mb-5 mb-md-0 wow slideInLeft"
                            data-wow-duration="1s"
                        >
                            <h2 className="custom-heading">
                                List all your <span className="text-brand">skills</span>
                            </h2>
                            <p className="custom-text">
                                Select from over 60 core languages, frameworks, backend technologies and web 3 tech.
                            </p>
                        </div>

                        {/* Right Side: Skills Icons */}
                        <div
                            className="col-12 col-md-6 wow slideInRight"
                            data-wow-duration="1s"
                        >
                            {/* Row 1 */}
                            <div className="row mb-3 justify-content-md-end justify-content-center">
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/html5-colored.svg"
                                        alt="C icon"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/css3-colored.svg"
                                        alt="HTML5"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/javascript-colored.svg"
                                        alt="JavaScript"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/bootstrap-colored.svg"
                                        alt="Tailwind CSS"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/tailwindcss-colored.svg"
                                        alt="TypeScript"
                                        className="custom-icon-img"
                                    />
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="row mb-3 justify-content-md-end justify-content-center">
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/react-colored.svg"
                                        alt="PHP"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/angularjs-colored.svg"
                                        alt="Vue JS"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/kotlin-colored.svg"
                                        alt="Supabase"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/python-colored.svg"
                                        alt="Figma"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/c-colored.svg"
                                        alt="React JS"
                                        className="custom-icon-img"
                                    />
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="row mb-3 justify-content-md-end justify-content-center">
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/typescript-colored.svg"
                                        alt="Nuxt JS"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/php-colored.svg"
                                        alt="Nest JS"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/flutter-colored.svg"
                                        alt="Angular JS"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/vuejs-colored.svg"
                                        alt="Babel"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/svelte-colored.svg"
                                        alt="Python"
                                        className="custom-icon-img"
                                    />
                                </div>
                            </div>

                            {/* Row 4 */}
                            <div className="row mb-3 justify-content-md-end justify-content-center">
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/fastapi-colored.svg"
                                        alt="Firebase"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/ethereum-colored.svg"
                                        alt="Flutter"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/solana-colored.svg"
                                        alt="Express JS"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/metamask-colored.svg"
                                        alt="Gatsby"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/photoshop-colored.svg"
                                        alt="GraphQL"
                                        className="custom-icon-img"
                                    />
                                </div>
                            </div>

                            {/* Row 5 */}
                            <div className="row justify-content-md-end justify-content-center">
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/googlecloud-colored.svg"
                                        alt="Bootstrap"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/netlify-colored.svg"
                                        alt="Swift"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/docker-colored.svg"
                                        alt="Dart"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/tensorflow-colored.svg"
                                        alt="Svelte"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/skills/git-colored.svg"
                                        alt="SaaS"
                                        className="custom-icon-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-section pt-5">
                <div className="container-xl feature-container">
                    <div className="row align-items-center flex-row-reverse">
                        <div
                            className="col-12 col-md-6 text-center text-md-end mb-5 mb-md-0 wow slideInRight"
                            data-wow-duration="1s"
                        >
                            <h2 className="custom-heading">
                                Add all your <span className="text-brand">socials</span>
                            </h2>
                            <p className="custom-text">
                                Add links to all of your social profiles and blogs in seconds.
                            </p>
                        </div>
                        <div
                            className="col-12 col-md-6 wow slideInLeft"
                            data-wow-duration="1s"
                        >
                            {/* Row 1 */}
                            <div className="row mb-3 justify-content-md-start justify-content-center">
                                <div className="col-auto img-icon">
                                    {
                                        state.theme === 'dark' ?
                                            <img
                                                src="icons/socials/github-dark.svg"
                                                alt="C icon"
                                                className="custom-icon-img"
                                            /> :
                                            <img
                                                src="icons/socials/github.svg"
                                                alt="C icon"
                                                className="custom-icon-img"
                                            />
                                    }
                                </div>
                                <div className="col-auto img-icon">
                                    {
                                        state.theme === 'dark' ?
                                            <img
                                                src="icons/socials/twitter-dark.svg"
                                                alt="C icon"
                                                className="custom-icon-img"
                                            /> :
                                            <img
                                                src="icons/socials/twitter.svg"
                                                alt="C icon"
                                                className="custom-icon-img"
                                            />
                                    }
                                </div>
                                <div className="col-auto img-icon">
                                    {
                                        state.theme === 'dark' ?
                                            <img
                                                src="icons/socials/devdotto-dark.svg"
                                                alt="C icon"
                                                className="custom-icon-img"
                                            /> :
                                            <img
                                                src="icons/socials/devdotto.svg"
                                                alt="C icon"
                                                className="custom-icon-img"
                                            />
                                    }
                                </div>
                                <div className="col-auto img-icon">
                                    {
                                        state.theme === 'dark' ?
                                            <img
                                                src="icons/socials/codepen-dark.svg"
                                                alt="codepen icon"
                                                className="custom-icon-img"
                                            /> :
                                            <img
                                                src="icons/socials/codepen.svg"
                                                alt="codepen icon"
                                                className="custom-icon-img"
                                            />
                                    }
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="row mb-3 justify-content-md-start justify-content-center">
                                <div className="col-auto img-icon">
                                    {
                                        state.theme === 'dark' ?
                                            <img
                                                src="icons/socials/codesandbox-dark.svg"
                                                alt="codesandbox icon"
                                                className="custom-icon-img"
                                            /> :
                                            <img
                                                src="icons/socials/codesandbox.svg"
                                                alt="codesandbox icon"
                                                className="custom-icon-img"
                                            />
                                    }
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/socials/stackoverflow.svg"
                                        alt="stackoverflow"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/socials/linkedin.svg"
                                        alt="Vue JS"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/socials/facebook.svg"
                                        alt="Vue JS"
                                        className="custom-icon-img"
                                    />
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="row mb-3 justify-content-md-start justify-content-center">
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/socials/instagram.svg"
                                        alt="Vue JS"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    {
                                        state.theme === 'dark' ?
                                            <img
                                                src="icons/socials/threads-dark.svg"
                                                alt="codesandbox icon"
                                                className="custom-icon-img"
                                            /> :
                                            <img
                                                src="icons/socials/threads.svg"
                                                alt="codesandbox icon"
                                                className="custom-icon-img"
                                            />
                                    }
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/socials/dribbble.svg"
                                        alt="Dribble"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/socials/behance.svg"
                                        alt="Babel"
                                        className="custom-icon-img"
                                    />
                                </div>
                            </div>

                            {/* Row 4 */}
                            <div className="row mb-3 justify-content-md-start justify-content-center">
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/socials/hashnode.svg"
                                        alt="Firebase"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    {
                                        state.theme === 'dark' ?
                                            <img
                                                src="icons/socials/medium-dark.svg"
                                                alt="codesandbox icon"
                                                className="custom-icon-img"
                                            /> :
                                            <img
                                                src="icons/socials/medium.svg"
                                                alt="codesandbox icon"
                                                className="custom-icon-img"
                                            />
                                    }
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/socials/youtube.svg"
                                        alt="Express JS"
                                        className="custom-icon-img"
                                    />
                                </div>
                                <div className="col-auto img-icon">
                                    <img
                                        src="icons/socials/discord.svg"
                                        alt="Discord"
                                        className="custom-icon-img"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="feature-section py-5">
                <div className="feature-container align-items-center justify-content-center mb-5">
                    <div className="snippet-container">
                        <div className='wow fadeInUp'>
                            <h2 className="custom-heading">
                                Copy your <span className="text-brand">snippet</span>
                            </h2>
                            <p className="custom-text">
                                When you're done, copy your profile code and you're ready to go!
                            </p>
                        </div>
                        <div className="code-box wow fadeInUp">
                            <pre>
                                <code>
                                    <span className="line-number">1 </span> <span className="red"># Hello 👋 I am Vandit Shah</span>{"\n"}
                                    <span className="line-number">2 </span>{"\n"}
                                    <span className="line-number">3 </span> <span className="red">## Full Stack Web Developer</span>{"\n"}
                                    <span className="line-number">4 </span> {"\n"}
                                    <span className="line-number">5 </span> - 🌍 I'm from India, Living in Toronto, Canada{"\n"}
                                    <span className="line-number">6 </span> - 📫 Reach me at {" "}
                                    <span className="blue">[shahvandit8@gmail.com](mailto:shahvandit8@gmail.com)</span>{"\n"}
                                    <span className="line-number">7 </span> - 👨‍💻 Check out my portfolio at{" "}
                                    <span className="blue">[MyPortfolio](http://vandit-shah.me)</span>{"\n"}
                                    <span className="line-number">8 </span> - 🔭 I'm currently working on{" "}
                                    <span className="blue">[ProfileX](www.profile-x.vandit-shah.me)</span>{"\n"}
                                    <span className="line-number">11</span> - 🌱 I'm currently learning Blockchain and Next.js{"\n"}
                                    <span className="line-number">12</span> - 💬 Ask me about MERN Stack{"\n"}
                                    <span className="line-number">13</span> - ⚡ Fun fact about me: I am a secret ninja 🥷{"\n"}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== Features End ====== */}
        </>
    )
}

export default Features
