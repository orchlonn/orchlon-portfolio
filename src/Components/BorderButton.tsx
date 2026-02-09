"use client";
const BorderButton = ({
  buttonTitle,
  onPress,
  link,
}: {
  buttonTitle: string;
  onPress?: () => void;
  link?: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      onClick={onPress}
      className="border border-[#8b5cf6]/50 text-[#a78bfa] p-2 rounded-md px-4 py-2 hover:bg-[#8b5cf6] hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 cursor-pointer tracking-wide font-mono text-sm"
    >
      {buttonTitle}
    </a>
  );
};

export default BorderButton;
