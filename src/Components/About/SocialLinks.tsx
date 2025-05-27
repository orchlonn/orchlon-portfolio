import { FaInstagram, FaLinkedin, FaGithub, FaSpotify } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-2">
      <a
        className="font-medium leading-snug text-slate-200"
        href="https://github.com/orchlonn"
        target="_blank"
      >
        <FaGithub size="25" />
      </a>
      <a
        className="font-medium leading-snug text-slate-200"
        href="https://www.linkedin.com/in/orchlonc"
        target="_blank"
      >
        <FaLinkedin size="25" />
      </a>
      <a
        className="font-medium leading-snug text-slate-200"
        href="https://www.instagram.com/orchlonnn"
        target="_blank"
      >
        <FaInstagram size="25" />
      </a>
      <a
        className="font-medium leading-snug text-slate-200"
        href="https://open.spotify.com/user/kn0i2ausybyiihjcwhkhywgv8"
        target="_blank"
      >
        <FaSpotify size="25" />
      </a>
    </div>
  );
};

export default SocialLinks;
