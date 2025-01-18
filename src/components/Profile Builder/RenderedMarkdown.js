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

  // Add location (if available)
  if (state.introduction.location) {
    markdownContent.push(`- 🌍 I'm from ${state.introduction.location}`);
  }

  // Add email (if available)
  if (state.introduction.email) {
    markdownContent.push(`- 📫 Reach me at [${state.introduction.email}](mailto:${state.introduction.email})`);
  }

  // Add portfolio (if available)
  if (state.introduction.portfolioLink) {
    markdownContent.push(`- 👨‍💻 Check out my portfolio at [MyPortfolio](http://${state.introduction.portfolioLink})`);
  }

  // Add resume (if available)
  if (state.introduction.resumeLink) {
    markdownContent.push(`- 📄 Check out my resume at [MyResume](http://${state.introduction.resumeLink})`);
  }

  // Add working on (if available)
  if (state.introduction.workingOnTitle) {
    const link = state.introduction.workingOnLink ? `(${state.introduction.workingOnLink})` : "";
    markdownContent.push(`- 🔭 I'm currently working on [${state.introduction.workingOnTitle}]${link}`);
  }

  // Add learning (if available)
  if (state.introduction.learning) {
    markdownContent.push(`- 🌱 I'm currently learning ${state.introduction.learning}`);
  }

  // Add ask me about (if available)
  if (state.introduction.askmeabout) {
    markdownContent.push(`- 💬 Ask me about ${state.introduction.askmeabout}`);
  }

  // Add fun fact (if available)
  if (state.introduction.funfact) {
    markdownContent.push(`- ⚡ Fun fact about me: ${state.introduction.funfact}`);
  }

  // Join all the lines with a newline to form the final markdown content
  const finalMarkdown = markdownContent.join("\n\n");

  return (
    <div className="markdown-container" ref={ref}>
      <p>{finalMarkdown}</p>
    </div>
  );
});

export default RenderedMarkdown;
