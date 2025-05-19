const SectionHeader = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex flex-col gap-2 w-full text-center mt-10 mb-5">
      <p className="text-gray-400 font-semibold text-sm">{desc}</p>
      <p className="text-teal-300 text-xl	font-bold">{title}</p>
    </div>
  );
};

export default SectionHeader;
