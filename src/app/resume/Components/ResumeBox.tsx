"use client";
import BorderButton from "@/Components/BorderButton";

const ResumeBox = ({
  description,
  title,
  onPress,
  className = "",
}: {
  description: string;
  title: string;
  onPress: () => void;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col gap-3 sm:gap-4 h-auto sm:h-[12rem] bg-[#1a1a25] rounded-2xl p-4 sm:p-5 transition-all duration-500 ease-in-out hover:border-[#8b5cf6]/30 hover:shadow-[0_0_30px_rgba(0,255,85,0.1)] border border-[#1a1a25] justify-center items-center text-slate-50 ${className}`}
    >
      <p className="text-xl sm:text-2xl font-bold text-center">{title}</p>
      <p className="text-sm sm:text-base text-center leading-relaxed text-slate-400">
        {description}
      </p>
      <BorderButton buttonTitle="View PDF" onPress={onPress} />
    </div>
  );
};

export default ResumeBox;
