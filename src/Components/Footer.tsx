"use client";
import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-400 mx-auto border-t border-[#1a1a25] mt-20">
      <div className="flex space-x-4 justify-center items-center my-4 mt-8">
        <a
          href="https://github.com/orchlonn"
          target="_blank"
          className="hover:text-[#a78bfa] transition-colors"
        >
          <GitHubLogoIcon width={20} height={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/orchlonc/"
          target="_blank"
          className="hover:text-[#a78bfa] transition-colors"
        >
          <LinkedInLogoIcon width={20} height={20} />
        </a>
      </div>
      <div className="flex justify-center items-center mb-10">
        <div className="text-sm text-center font-mono">
          &copy; {new Date().getFullYear()} Oscar Chinbat. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
