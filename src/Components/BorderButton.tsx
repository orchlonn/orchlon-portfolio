'use client';
const BorderButton = ({ buttonTitle, onPress }: { buttonTitle: string; onPress?: () => void }) => {
  return (
    <a 
      onClick={onPress}
      className="border border-teal-300 text-teal-300 p-2 rounded-md px-4 py-2 hover:border-transparent hover:bg-[#F5F5F5] hover:text-black transition-[background-color,color,border] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform cursor-pointer tracking-wide"
    >
      {buttonTitle}
    </a>
  );
};

export default BorderButton;