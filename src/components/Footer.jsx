import React from "react";
import { github, linkedin } from "../assets";
import { socialLinks } from "../constants/social-links";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="flex justify-center gap-6 items-center">
        <a
          className="flex flex-col"
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin link" />
          <span>LinkedIn</span>
        </a>
        <a
          className="flex flex-col"
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github link" width={64} height={64} />
          <span>Github</span>
        </a>
      </div>
      <div className="text-xs ml-auto w-fit">
        <a href="https://storyset.com/technology">
          Technology illustrations by Storyset
        </a>
      </div>
    </footer>
  );
};

export default Footer;
