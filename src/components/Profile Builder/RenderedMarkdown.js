import React, { forwardRef } from "react";
import useApp from "../../Context/AppContext";

const RenderedMarkdown = forwardRef(({}, ref) => {
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

  if(state.socials.github.linkSuffix.trim().length ||
  state.socials.twitter.linkSuffix.trim().length ||
  state.socials.threads.linkSuffix.trim().length ||
  state.socials.hashnode.linkSuffix.trim().length){
    socialList.push(`### Social`)
  }

  allLists.push(socialList);

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
