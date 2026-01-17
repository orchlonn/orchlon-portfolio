"use client";
import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-300 mx-auto">
      <div className="flex space-x-4 justify-center items-center my-2 mt-10">
        {/* Social Media Icons */}
        <a
          href="https://github.com/orchlonn"
          target="_blank"
          className="hover:text-highlight-orange"
        >
          <GitHubLogoIcon width={20} height={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/orchlonc/"
          target="_blank"
          className="hover:text-highlight-orange"
        >
          <LinkedInLogoIcon width={20} height={20} />
        </a>
      </div>
      {/* Name and Date */}
      <div className="flex justify-center items-center mb-10">
        <div className="text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Oscar Chinbat. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
