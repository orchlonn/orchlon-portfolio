"use client";
import BorderButton from "@/Components/BorderButton";

const ResumeBox = ({
  description,
  title,
  onPress,
}: {
  description: string;
  title: string;
  onPress: () => void;
}) => {
  return (
    <div className="flex flex-col gap-4 h-[12rem] w-1/5 bg-slate-800 rounded-[15px] p-5 transition-all duration-500 ease-in-out hover:bg-transparent hover:border-slate-700 border border-transparent justify-center items-center text-slate-50">
      <p className="text-2xl font-bold">{title}</p>
      <p className="text-l text-center">{description}</p>
      <BorderButton buttonTitle="View PDF" onPress={onPress} />
    </div>
  );
};

export default ResumeBox;
