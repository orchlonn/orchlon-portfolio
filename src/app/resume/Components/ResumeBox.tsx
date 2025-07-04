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
      className={`flex flex-col gap-3 sm:gap-4 h-auto sm:h-[12rem] bg-slate-800 rounded-[15px] p-4 sm:p-5 transition-all duration-500 ease-in-out hover:bg-transparent hover:border-slate-700 border border-transparent justify-center items-center text-slate-50 ${className}`}
    >
      <p className="text-xl sm:text-2xl font-bold text-center">{title}</p>
      <p className="text-sm sm:text-base text-center leading-relaxed">
        {description}
      </p>
      <BorderButton buttonTitle="View PDF" onPress={onPress} />
    </div>
  );
};

export default ResumeBox;
