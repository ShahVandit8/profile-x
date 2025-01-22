export const initialState = {
    theme: "dark",
    section: "introduction",
    renderMode: "preview",
    sidebar: "open",
    // Introduction State
    introduction: {
        name: "",
        subtitle: "",
        longDescription: "",
        location: "",
        portfolioLink: "",
        email: "",
        resumeLink: "",
        workingOnTitle: "",
        workingOnLink: "",
        learning: "",
        askmeabout: "",
        collaborateOn: "",
        funfact: "",
    },
    // Skills State
    skills: {
        core: [],
        frontend: [],
        backend: [],
        other: [],
        software: [],
        web3: [],
        cloud: [],
    },
    // Socials State
    socials: {
        github: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/github.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/github-dark.svg",
            linkPrefix: "https://www.github.com/",
            linkSuffix: "",
        },
        twitter: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/twitter.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/twitter-dark.svg",
            linkPrefix: "https://www.x.com/",
            linkSuffix: "",
        },
        threads: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/threads.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/threads-dark.svg",
            linkPrefix: "https://www.threads.net/@",
            linkSuffix: "",
        },
        hashnode: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/hashnode.svg",
            linkPrefix: "https://",
            linkSuffix: "",
            linkSuffixTwo: ".hashnode.dev",
        },
        medium: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/medium.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/medium-dark.svg",
            linkPrefix: "http://www.medium.com/",
            linkSuffix: "",
        },
        devdotto: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/devdotto.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/devdotto-dark.svg",
            linkPrefix: "https://www.dev.to/",
            linkSuffix: "",
        },
        linkedin: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/linkedin.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/linkedin-dark.svg",
            linkPrefix: "https://www.linkedin.com/in/",
            linkSuffix: "",
        },
        polywork: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/polywork.svg",
            linkPrefix: "https://www.polywork.com/",
            linkSuffix: "",
        },
        twitch: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/twitch.svg",
            linkPrefix: "https://www.twitch.tv/",
            linkSuffix: "",
        },
        youtube: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/youtube.svg",
            linkPrefix: "https://www.youtube.com/@",
            linkSuffix: "",
        },
        discord: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/discord.svg",
            linkPrefix: "https://discord.com/users/",
            linkSuffix: "",
        },
        instagram: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/instagram.svg",
            linkPrefix: "http://www.instagram.com/",
            linkSuffix: "",
        },
        facebook: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/facebook.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/facebook-dark.svg",
            linkPrefix: "https://www.facebook.com/",
            linkSuffix: "",
        },
        dribbble: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/dribbble.svg",
            linkPrefix: "https://www.dribbble.com/",
            linkSuffix: "",
        },
        behance: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/behance.svg",
            linkPrefix: "https://www.behance.com/",
            linkSuffix: "",
        },
        codesandbox: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/codesandbox.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/codesandbox-dark.svg",
            linkPrefix: "https://codesandbox.io/u/",
            linkSuffix: "",
        },
        codepen: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/codepen.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/codepen-dark.svg",
            linkPrefix: "https://www.codepen.io/",
            linkSuffix: "",
        },
        stackoverflow: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/stackoverflow.svg",
            linkPrefix: "https://www.stackoverflow.com/users/",
            linkSuffix: "",
        },
    },
    badges: {
        twitterFollowers: {
            selected: false,
        },
        githubFollowers: {
            selected: false,
        },
        githubVisits: {
            selected: false,
        },
        githubStatsCard: {
            selected: false,
            stars: true,
            commits: true,
            prs: true,
            issues: true,
            contribs: true,
            privateCommits: true,
        },
        githubCommitsGraph: {
            selected: false,
        },
        githubStreak: {
            selected: false,
        },
        twitchStatus: {
            selected: false,
        },
        topLangsCard: {
            selected: false,
        },
        reposCard: {
            selected: false,
            repoOne: "",
            repoTwo: null,
            repoThree: null,
            reporFour: null,
        },
        cardStyle: {
            selected: false,
            titleColor: "0891b2",
            titleColorEdit: false,
            textColor: "ffffff",
            textColorEdit: false,
            iconColor: "0891b2",
            iconColorEdit: false,
            bgColor: "1c1917",
            bgColorEdit: false,
            hideBorder: true,
            showIcons: true,
        },
    },
    support: "",
    popOutMenuOpen: false,
    modal: false,
};


const AppReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {

        case "POPULATE_STATE":
            return action.value

        case "SHOW_SECTION":
            return { ...state, section: action.payload }

        case "SELECT_RENDER_MODE":
            return { ...state, renderMode: action.payload }

        case "ADD_INTRODUCTION":
            return {
                ...state,
                introduction: {
                    ...state.introduction,
                    [payload.title]: payload.value,
                },
            };

        case "ADD_SOCIAL_PROFILE":
            return {
                ...state,
                socials: {
                    ...state.socials,
                    [action.payload.title]: {
                        ...state.socials[action.payload.title],
                        linkSuffix: action.payload.value,
                    },
                },
            };

        case "CHANGE_THEME":
            return { ...state, theme: payload };

        case "SIDEBAR_TOGGLE":
            return { ...state, sidebar: payload };

        default:
            throw new Error();
    }


}

export default AppReducer;