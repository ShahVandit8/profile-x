import React, { forwardRef } from "react";
import useApp from "../../Context/AppContext";

const RenderedMarkdown = forwardRef(({ }, ref) => {
  const { state } = useApp();

  // Start with an empty array to hold markdown lines
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
  const socialList = [];
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
    const link = state.introduction.workingOnLink ? `(${state.introduction.workingOnLink})` : "";
    introductionList.push(`- 🔭 I'm currently working on [${state.introduction.workingOnTitle}]${link}`);
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

  introductionList.push("")

  allLists.push(introductionList.join("\n"));

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
      </a>`
    );
  }

  if (state.socials.twitter.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.x.com/${state.socials.github.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.twitter.darkPath}" alt="Twitter" />
      </picture>
    </a>`
    );
  }

  if (state.socials.devdotto.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.dev.to/${state.socials.devdotto.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.devdotto.darkPath}" alt="devdotto" />
      </picture>
      </a>`
    );
  }

  if (state.socials.codepen.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.codepen.io/${state.socials.codepen.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.codepen.darkPath}" alt="codepen" />
      </picture>
      </a>`
    );
  }

  if (state.socials.codesandbox.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.codesandbox.io/u/${state.socials.codesandbox.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.codesandbox.darkPath}" alt="codesandbox" />
      </picture>
      </a>`
    );
  }

  if (state.socials.stackoverflow.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.stackoverflow.com/user/${state.socials.stackoverflow.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.stackoverflow.path}" alt="stackoverflow" />
      </picture>
      </a>`
    );
  }

  if (state.socials.linkedin.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.linkedin.com/in/${state.socials.linkedin.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.linkedin.path}" alt="linkedin" />
      </picture>
      </a>`
    );
  }

  if (state.socials.facebook.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.facebook.com/${state.socials.facebook.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.facebook.path}" alt="facebook" />
      </picture>
      </a>`
    );
  }

  if (state.socials.instagram.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.instagram.com/${state.socials.instagram.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.instagram.path}" alt="instagram" />
      </picture>
      </a>`
    );
  }

  if (state.socials.threads.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.threads.net/@${state.socials.threads.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.threads.darkPath}" alt="threads" />
      </picture>
      </a>`
    );
  }

  if (state.socials.dribbble.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.dribbble.com/${state.socials.dribbble.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.dribbble.path}" alt="dribbble" />
      </picture>
      </a>`
    );
  }

  if (state.socials.behance.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.behance.com/${state.socials.behance.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.behance.path}" alt="behance" />
      </picture>
      </a>`
    );
  }

  if (state.socials.hashnode.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://${state.socials.hashnode.linkSuffix}.hashnode.dev" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.hashnode.path}" alt="hashnode" />
      </picture>
      </a>`
    );
  }

  if (state.socials.medium.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.medium.com/${state.socials.medium.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.medium.darkPath}" alt="medium" />
      </picture>
      </a>`
    );
  }

  if (state.socials.youtube.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.youtube.com/@${state.socials.youtube.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.youtube.path}" alt="youtube" />
      </picture>
      </a>`
    );
  }

  if (state.socials.discord.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.discord.com/user/${state.socials.discord.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.discord.path}" alt="discord" />
      </picture>
      </a>`
    );
  }

  if (state.socials.twitch.linkSuffix.trim().length) {
    socialList.push(
      `<a href="https://www.twitch.tv/${state.socials.twitch.linkSuffix}" target="_blank" rel="noreferrer">
      <picture>
      <img height="30" width="30" src="${state.socials.twitch.path}" alt="twitch" />
      </picture>
      </a>`
    );
  }

  socialList.push("")

  allLists.push(socialList.join("\n"));


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


  // Now join the lists with a single line break
  const finalListMarkdown = allLists.join("\n");

  // Join everything (name, subtitle, long description and list) with double line breaks
  const finalMarkdown = [
    ...markdownContent,
    finalListMarkdown
  ].join("\n\n");

  return (
    <div className="markdown-container" ref={ref}>
      <p>{finalMarkdown}</p> {/* Using <pre> to retain markdown formatting */}
    </div>
  );
});

export default RenderedMarkdown;
