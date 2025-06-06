import SocialLinks from "./SocialLinks";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HomeLeftSide = ({ setSection }: { setSection: any }) => {
  const Navbar = ({ index, title }: { index: number; title: string }) => {
    return (
      <a
        className="text-[28px] font-medium cursor-pointer"
        onClick={() => {
          setSection(index);
        }}
      >
        {title}
      </a>
    );
  };
  return (
    <div className="xl:w-1/2 mb-10">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        Oscar Chinbat
      </h1>
      <p className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Full Stack software engineer
      </p>
      <p className="mt-4 max-w-xs leading-normal text-slate-400">
        Creating pixel-perfect, engaging, and accessible web and mobile
        applications.
      </p>
      <div className="flex flex-col gap-3 my-[30%]">
        <Navbar index={1} title="/about" />
        <Navbar index={2} title="/experience" />
        <Navbar index={3} title="/projects" />
      </div>
      <SocialLinks />
    </div>
  );
};

export default HomeLeftSide;
