const SectionHeader = ({ title }: { title: string }) => {
  return (
    <h1 className="flex section-header text-2xl font-bold items-center">
      /{title}
      <span className="nav-indicator mr-4 h-[1px] w-32 bg-slate-600 transition-all ml-3"></span>
    </h1>
  );
};

export default SectionHeader;
