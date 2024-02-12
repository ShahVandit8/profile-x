import React, { useState } from 'react'
import "../../styles/profilebuilder.css"
import "../../styles/icons.css"
import Navbar from './Navbar'

const CreateProfile = () => {

  const [page, setpage] = useState(1)

  const nextPage = () => {
    setpage(page => page + 1)
  }

  const previousPage = () => {
    setpage(page => page - 1)
  }

  const introductionDefaultValues = {
    name: "",
    shortDescription: "",
    longDescription: "",
    location: "",
    portfolioTitle: "",
    portfolioLink: "",
    email: "",
    workingOnTitle: "",
    workingOnLink: "",
    learning: "",
    collaborateOn: "",
    additionalInfo: ""
  }

  const skillsDefaultValues = {
    core: [],
    frontend: [],
    backend: [],
    other: [],
    software: [],
    web3: [],
    cloud: []
  }

  const socialsDefaultValues = {
    behance: { prefix: "https://www.behance.com/", suffix: "", path: "" },
    codepen: { prefix: "https://www.codepen.io/", suffix: "", path: "" },
    codesandbox: { prefix: "https://codesandbox.io/u/", suffix: "", path: "" },
    devdotto: { prefix: "https://www.dev.to/", suffix: "", path: "" },
    discord: { prefix: "https://discord.com/users/", suffix: "", path: "" },
    dribbble: { prefix: "https://www.dribbble.com/", suffix: "", path: "" },
    facebook: { prefix: "https://www.facebook.com/", suffix: "", path: "" },
    github: { prefix: "https://www.github.com/", suffix: "", path: "" },
    hashnode: { prefix: "https://", suffix: "", suffixTwo: ".hashnode.dev", path: "" },
    instagram: { prefix: "http://www.instagram.com/", suffix: "", path: "" },
    linkedin: { prefix: "https://www.linkedin.com/in/", suffix: "", path: "" },
    medium: { prefix: "http://www.medium.com/", suffix: "", path: "" },
    polywork: { prefix: "https://www.polywork.com/", suffix: "", path: "" },
    rss: { prefix: "https://", suffix: "", path: "" },
    stackoverflow: { prefix: "https://www.stackoverflow.com/users/", suffix: "", path: "" },
    threads: { prefix: "https://www.threads.net/@", suffix: "", path: "" },
    twitch: { prefix: "https://www.twitch.tv/", suffix: "", path: "" },
    twitter: { prefix: "https://www.x.com/", suffix: "", path: "" },
    youtube: { prefix: "https://www.youtube.com/@", suffix: "", path: "" }
  }

  const badgeDefaultValues = {
    cardStyle: { selected: false, titleColor: "", textColor: "", iconColor: "", backgroundColor: "" },
    githubCommitsGraph: { selected: false },
    githubFollowers: { selected: false },
    githubStatsCard: { selected: false, stars: true, commits: true, prs: true, issues: true, contribs: true, privateCommits: true },
    githubStreak: { selected: false },
    githubVisits: { selected: false },
    reposCard: { selected: false, repoOne: "", repoTwo: null, repoThree: null, reporFour: null },
    topLangsCard: { selected: false },
    twitchStatus: { selected: false },
    twitterFollowers: { selected: false }
  }

  const supportDefaultValues = {
    buymeacoffee: {prefix: "https://www.buymeacoffee.com/", suffix: "", path: "", previewImg: "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"},
    kofi: {prefix: "https://www.ko-fi.com/", suffix: "", path: "", previewImg: "https://storage.ko-fi.com/cdn/kofi2.png?v=3"}
  }

  const ProfileDefaultValues = {
    section: '',
    renderMode: '',
    modal: false,
    introduction: introductionDefaultValues,
    skills: skillsDefaultValues,
    socials: socialsDefaultValues,
    badges: badgeDefaultValues,
  }

  return (
    <div className="profile-container">
      <Navbar page={page} setpage={setpage} nextPage={nextPage} previousPage={previousPage} />
    </div>
  )
}

export default CreateProfile
