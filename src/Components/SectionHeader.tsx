const SectionHeader = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex flex-col gap-2 w-full text-center mt-24 mb-5">
      <p className="text-gray-500 font-mono font-semibold text-sm uppercase tracking-widest">
        {desc}
      </p>
      <p className="text-[#a78bfa] text-xl font-bold neon-text-glow">{title}</p>
    </div>
  );
};

export default SectionHeader;
