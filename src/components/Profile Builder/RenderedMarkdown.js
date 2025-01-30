import React, { forwardRef } from "react";
import useApp from "../../Context/AppContext";

const RenderedMarkdown = forwardRef(({ }, ref) => {
  const { state } = useApp();

  let markdownContent = [];

  // Add name and subtitle (if available)
  if (state.introduction.name) {
    markdownContent.push(`# Hello 👋 I am ${state.introduction.name}`);
  }
  if (state.introduction.subtitle) {
    markdownContent.push(`## ${state.introduction.subtitle}`);
  }

  // Add long description (if available)
  if (state.introduction.longDescription) {
    markdownContent.push(state.introduction.longDescription);
  }

  // Add location (if available) and other list items with single line breaks
  const allLists = [];

  const introductionList = [];
  const badgefollowList = [];
  const skillsList = [];
  const socialList = [];
  const badgeList = [];
  const supportList = [];

  if (state.introduction.location) {
    introductionList.push(`- 🌍 I'm from ${state.introduction.location}`);
  }

  if (state.introduction.email) {
    introductionList.push(`- 📫 Reach me at [${state.introduction.email}](mailto:${state.introduction.email})`);
  }

  if (state.introduction.portfolioLink) {
    introductionList.push(`- 👨‍💻 Check out my portfolio at [MyPortfolio](http://${state.introduction.portfolioLink})`);
  }

  if (state.introduction.resumeLink) {
    introductionList.push(`- 📄 Check out my resume at [MyResume](http://${state.introduction.resumeLink})`);
  }

  if (state.introduction.workingOnTitle) {
    if (state.introduction.workingOnLink) {
      const link = state.introduction.workingOnLink ? `(${state.introduction.workingOnLink})` : "";
      introductionList.push(`- 🔭 I'm currently working on [${state.introduction.workingOnTitle}]${link}`);
    }
    else {
      introductionList.push(`- 🔭 I'm currently working on ${state.introduction.workingOnTitle}`);
    }
  }

  if (state.introduction.learning) {
    introductionList.push(`- 🌱 I'm currently learning ${state.introduction.learning}`);
  }

  if (state.introduction.askmeabout) {
    introductionList.push(`- 💬 Ask me about ${state.introduction.askmeabout}`);
  }

  if (state.introduction.funfact) {
    introductionList.push(`- ⚡ Fun fact about me: ${state.introduction.funfact}`);
  }

  introductionList.push(" ")

  allLists.push(introductionList.join("\n"));

  if (state.badges.githubFollowers.selected) {
    badgefollowList.push(
      `<a href="${state.socials.github.linkPrefix}${state.socials.github.linkSuffix}" target="_blank" rel="noreferrer"><img
                  src="https://img.shields.io/github/followers/${state.socials.github.linkSuffix}?logo=github&style=for-the-badge&color=${state.badges.cardStyle.iconColor}&labelColor=${state.badges.cardStyle.bgColor}" /></a> &nbsp;`
    )
  }

  if (state.badges.twitterFollowers.selected) {
    badgefollowList.push(
      `<a href="${state.socials.twitter.linkPrefix}${state.socials.twitter.linkSuffix}" target="_blank" rel="noreferrer"><img
                  src="https://img.shields.io/twitter/follow/${state.socials.twitter.linkSuffix}?logo=x&style=for-the-badge&color=${state.badges.cardStyle.iconColor}&labelColor=${state.badges.cardStyle.bgColor}" /></a> &nbsp;`

    )
  }

  if (state.badges.twitchStatus.selected) {
    badgefollowList.push(
      `<a href="${state.socials.twitch.linkPrefix}${state.socials.twitch.linkSuffix}" target="_blank" rel="noreferrer"><img
                  src="https://img.shields.io/twitch/status/${state.socials.twitch.linkSuffix}?logo=twitch&style=for-the-badge&color=${state.badges.cardStyle.iconColor}&labelColor=${state.badges.cardStyle.bgColor}&label=TWITCH+STATUS" /></a> &nbsp;`
    )
  }

  allLists.push(badgefollowList.join("\n"));

  if (state.skills.core.length >= 1 ||
    state.skills.frontend.length >= 1 ||
    state.skills.backend.length >= 1 ||
    state.skills.other.length >= 1 ||
    state.skills.software.length >= 1 ||
    state.skills.web3.length >= 1 ||
    state.skills.cloud.length >= 1) {
    skillsList.push(`### Skills`);
    skillsList.push("");
  }

  if (state.skills.core.length >= 1 ||
    state.skills.frontend.length >= 1 ||
    state.skills.backend.length >= 1 ||
    state.skills.other.length >= 1 ||
    state.skills.software.length >= 1 ||
    state.skills.web3.length >= 1 ||
    state.skills.cloud.length >= 1) {
    if (Object.values(state.skills).some((arr) => arr.length > 0)) {
      Object.values(state.skills).flat().forEach((icon) => {
        if (icon.darkPath) {
          skillsList.push(
            `<a href="${icon.link}" target="_blank" rel="noreferrer"><picture>
              <img height="36" width="36" src="${icon.darkPath}" alt="${icon.name}" />
              </picture></a> &nbsp;`
          );
        }
        else {
          skillsList.push(
            `<a href="${icon.link}" target="_blank" rel="noreferrer"><picture>
              <img height="36" width="36" src="${icon.path}" alt="${icon.name}" />
              </picture></a> &nbsp;`
          );
        }
      });
    }
  }

  skillsList.push("")
  allLists.push(skillsList.join("\n"));


  if (state.socials.github.linkSuffix.trim().length ||
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
    state.socials.stackoverflow.linkSuffix.trim().length) {
    socialList.push(`### Social`)
    socialList.push("")
  }

  if (state.socials.github.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.github.com/${state.socials.github.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.github.darkPath}" alt="github" />
      </picture>
      </a> &nbsp;`
    );
  }

  if (state.socials.twitter.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.x.com/${state.socials.github.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.twitter.darkPath}" alt="Twitter" />
      </picture>
    </a> &nbsp;`
    );
  }

  if (state.socials.devdotto.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.dev.to/${state.socials.devdotto.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.devdotto.darkPath}" alt="devdotto" />
      </picture>
      </a> &nbsp;`
    );
  }

  if (state.socials.codepen.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.codepen.io/${state.socials.codepen.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.codepen.darkPath}" alt="codepen" />
      </picture>
      </a> &nbsp;`
    );
  }

  if (state.socials.codesandbox.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.codesandbox.io/u/${state.socials.codesandbox.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.codesandbox.darkPath}" alt="codesandbox" />
      </picture>
      </a> &nbsp;`
    );
  }

  if (state.socials.stackoverflow.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.stackoverflow.com/user/${state.socials.stackoverflow.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.stackoverflow.path}" alt="stackoverflow" />
      </picture>
      </a> &nbsp;`
    );
  }

  if (state.socials.linkedin.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.linkedin.com/in/${state.socials.linkedin.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.linkedin.path}" alt="linkedin" />
      </picture>
      </a> &nbsp;`
    );
  }

  if (state.socials.facebook.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.facebook.com/${state.socials.facebook.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.facebook.path}" alt="facebook" />
      </picture>
      </a> &nbsp;`
    );
  }

  if (state.socials.instagram.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.instagram.com/${state.socials.instagram.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.instagram.path}" alt="instagram" />
      </picture>
      </a> &nbsp;`
    );
  }

  if (state.socials.threads.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.threads.net/@${state.socials.threads.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.threads.darkPath}" alt="threads" />
      </picture>
      </a> &nbsp;`
    );
  }

  if (state.socials.dribbble.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.dribbble.com/${state.socials.dribbble.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.dribbble.path}" alt="dribbble" />
      </picture>
      </a> &nbsp;`
    );
  }

  if (state.socials.behance.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.behance.com/${state.socials.behance.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.behance.path}" alt="behance" />
      </picture>
      </a> &nbsp;`
    );
  }

  if (state.socials.hashnode.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://${state.socials.hashnode.linkSuffix}.hashnode.dev" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.hashnode.path}" alt="hashnode" />
      </picture>
      </a> &nbsp;`
    );
  }

  if (state.socials.medium.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.medium.com/@${state.socials.medium.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.medium.darkPath}" alt="medium" />
      </picture>
      </a> &nbsp;`
    );
  }

  if (state.socials.youtube.linkSuffix.trim().length) {
    socialList.push(
      `<a class="margin-right: 10px" href="https://www.youtube.com/@${state.socials.youtube.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.youtube.path}" alt="youtube" />
      </picture>
      </a> &nbsp;`
    );
  }

  if (state.socials.discord.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.discord.com/users/${state.socials.discord.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.discord.path}" alt="discord" />
      </picture>
      </a> &nbsp;`
    );
  }

  if (state.socials.twitch.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.twitch.tv/${state.socials.twitch.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.twitch.path}" alt="twitch" />
      </picture>
      </a> &nbsp;`
    );
  }

  socialList.push("")

  allLists.push(socialList.join("\n"));

  if (state.badges.githubCommitsGraph.selected ||
    state.badges.githubStatsCard.selected ||
    state.badges.githubStreak.selected ||
    state.badges.reposCard.selected ||
    state.badges.topLangsCard.selected) {
    badgeList.push("### Badges")
  }

  if (state.badges.githubStatsCard.selected ||
    state.badges.githubCommitsGraph.selected ||
    state.badges.githubStreak.selected ||
    state.badges.topLangsCard.selected) {
    badgeList.push(`#### My GitHub Stats`);
    badgeList.push(" ")
  }

  if (state.badges.githubStatsCard.selected) {
    badgeList.push(
      `<a
                      href="http://www.github.com/${state.socials.github.linkSuffix
      }"><img src="https://github-readme-stats.vercel.app/api?username=${state.socials.github.linkSuffix
      }&hide=${state.badges.githubStatsCard.stars ? "" : "stars,"
      }${state.badges.githubStatsCard.commits ? "" : "commits,"}${state.badges.githubStatsCard.prs ? "" : "prs,"
      }${state.badges.githubStatsCard.issues ? "" : "issues,"}${state.badges.githubStatsCard.contribs ? "" : "contribs"
      }${state.badges.githubStatsCard.privateCommits
        ? "&count_private=true"
        : ""
      }&title_color=${state.badges.cardStyle.titleColor
      }&text_color=${state.badges.cardStyle.textColor}&icon_color=${state.badges.cardStyle.iconColor
      }&bg_color=${state.badges.cardStyle.bgColor
      }&hide_border=true&show_icons=true" alt="${state.socials.github.linkSuffix
      }'s GitHub stats" /></a> <br/>`
    );
  }

  if (state.badges.githubStreak.selected) {
    badgeList.push("<br/>")
    badgeList.push(
      `<a href="http://www.github.com/${state.socials.github.linkSuffix}"><img
          src="https://streak-stats.demolab.com/?user=${state.socials.github.linkSuffix
      }&stroke=${state.badges.cardStyle.textColor
      }&background=${state.badges.cardStyle.bgColor
      }&ring=${state.badges.cardStyle.titleColor
      }&fire=${state.badges.cardStyle.titleColor
      }&currStreakNum=${state.badges.cardStyle.textColor
      }&currStreakLabel=${state.badges.cardStyle.titleColor
      }&sideNums=${state.badges.cardStyle.textColor
      }&sideLabels=${state.badges.cardStyle.textColor
      }&dates=${state.badges.cardStyle.textColor}&hide_border=true" /></a> <br/>`
    );
  }

  if (state.badges.githubCommitsGraph.selected) {
    badgeList.push("<br/>")
    badgeList.push(
      `<a href="http://www.github.com/${state.socials.github.linkSuffix}"><img width="75%" src="https://github-readme-activity-graph.vercel.app/graph?username=${state.socials.github.linkSuffix}&bg_color=${state.badges.cardStyle.bgColor}&color=${state.badges.cardStyle.textColor}&line=${state.badges.cardStyle.iconColor}&point=${state.badges.cardStyle.textColor}&area_color=${state.badges.cardStyle.bgColor}&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph" /></a> <br/>`
    );
  }

  if (state.badges.topLangsCard.selected) {
    badgeList.push("<br/>")
    badgeList.push(
      `<a href="https://github.com/${state.socials.github.linkSuffix}" align="left"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${state.socials.github.linkSuffix}&langs_count=10&title_color=${state.badges.cardStyle.titleColor}&text_color=${state.badges.cardStyle.textColor}&icon_color=${state.badges.cardStyle.iconColor}&bg_color=${state.badges.cardStyle.bgColor}&hide_border=true&locale=en&custom_title=Top%20%Languages" alt="Top Languages" /></a> <br/>`
    );
  }

  if (state.badges.reposCard.selected) {
    badgeList.push(" ")
    badgeList.push('#### Top Repositories')
    badgeList.push(" ")
  }

  if (state.badges.reposCard.selected) {
    if (state.badges.reposCard.repoOne) {
      badgeList.push(`<div><a style="margin-bottom: 10px" href="https://github.com/${state.socials.github.linkSuffix}/${state.badges.reposCard.repoOne}" ><img  width="40%" src="https://github-readme-stats.vercel.app/api/pin/?username=${state.socials.github.linkSuffix}&repo=${state.badges.reposCard.repoOne}&title_color=${state.badges.cardStyle.titleColor}&text_color=${state.badges.cardStyle.textColor}&icon_color=${state.badges.cardStyle.iconColor}&bg_color=${state.badges.cardStyle.bgColor}&hide_border=true&locale=en" /></a></div>`)
    }
    if (state.badges.reposCard.repoTwo) {
      badgeList.push(`<div><a style="margin-bottom: 10px" href="https://github.com/${state.socials.github.linkSuffix}/${state.badges.reposCard.repoTwo}" ><img width="40%" src="https://github-readme-stats.vercel.app/api/pin/?username=${state.socials.github.linkSuffix}&repo=${state.badges.reposCard.repoTwo}&title_color=${state.badges.cardStyle.titleColor}&text_color=${state.badges.cardStyle.textColor}&icon_color=${state.badges.cardStyle.iconColor}&bg_color=${state.badges.cardStyle.bgColor}&hide_border=true&locale=en" /></a></div>`)
    }
    if (state.badges.reposCard.repoThree) {
      badgeList.push(`<div><a style="margin-bottom: 10px" href="https://github.com/${state.socials.github.linkSuffix}/${state.badges.reposCard.repoThree}" ><img width="40%" src="https://github-readme-stats.vercel.app/api/pin/?username=${state.socials.github.linkSuffix}&repo=${state.badges.reposCard.repoThree}&title_color=${state.badges.cardStyle.titleColor}&text_color=${state.badges.cardStyle.textColor}&icon_color=${state.badges.cardStyle.iconColor}&bg_color=${state.badges.cardStyle.bgColor}&hide_border=true&locale=en" /></a></div>`)
    }
    if (state.badges.reposCard.repoFour) {
      badgeList.push(`<div><a style="margin-bottom: 10px" href="https://github.com/${state.socials.github.linkSuffix}/${state.badges.reposCard.repoFour}" ><img width="40%" src="https://github-readme-stats.vercel.app/api/pin/?username=${state.socials.github.linkSuffix}&repo=${state.badges.reposCard.repoFour}&title_color=${state.badges.cardStyle.titleColor}&text_color=${state.badges.cardStyle.textColor}&icon_color=${state.badges.cardStyle.iconColor}&bg_color=${state.badges.cardStyle.bgColor}&hide_border=true&locale=en" /></a></div>`)
    }
  }

  badgeList.push(" ")
  allLists.push(badgeList.join("\n"));


  if (state.support.buymeacoffee.linkSuffix.trim().length ||
    state.support.kofi.linkSuffix.trim().length
  ) {
    supportList.push("### Support")
    supportList.push("")
  }

  if (state.support.buymeacoffee.linkSuffix.trim().length) {
    supportList.push(
      `<a href="https://www.buymeacoffee.com/${state.support.buymeacoffee.linkSuffix}" style="margin-right:10px" target="_blank" rel="noreferrer">
      <picture>
      <img width="150" src="${state.support.buymeacoffee.previewIMG}" alt="buymeacoffee" />
      </picture>
      </a>`
    );
  }

  if (state.support.kofi.linkSuffix.trim().length) {
    supportList.push(
      `<a href="https://ko-fi.com/${state.support.kofi.linkSuffix}" style="margin-right:10px" target="_blank" rel="noreferrer">
      <picture>
      <img width="150" src="${state.support.kofi.previewIMG}" alt="kofi" />
      </picture>
      </a>`
    );
  }

  allLists.push(supportList.join("\n"));

  const finalListMarkdown = allLists.join("\n");


  const finalMarkdown = [
    ...markdownContent,
    finalListMarkdown
  ].join("\n\n");

  return (
    <div className="markdown-container" ref={ref}>
      <p>{finalMarkdown}</p>
    </div>
  );
});

export default RenderedMarkdown;
