import React from "react";

const Footer = () => {
  const footerStyle = {};
  return (
    <footer className="footer mt-10">
      <p>
        Created with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by Rajika Chathuranga |{" "}
        <a
          href="https://www.linkedin.com/in/rajika-chathuranga/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter blue_gradient cursor-pointer"
        >
          LinkedIn
        </a>
      </p>
      <p>
        Find this project on{" "}
        <a
          href="https://github.com/rajika97/promptium-ai-prompt-sharing-app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter blue_gradient cursor-pointer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
