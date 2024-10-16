import Link from "next/link";

const HomeLeftSide = ({ setSection }) => {
  return (
    <div className="w-1/2">
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
        <a
          className="text-[28px] font-medium"
          href=""
          onClick={() => {
            setSection(0);
          }}
        >
          /home
        </a>
        <a className="text-[28px] font-medium" href="">
          /about
        </a>
        <a
          className="text-[28px] font-medium"
          onClick={() => {
            setSection(1);
          }}
        >
          /experience
        </a>
        <a className="text-[28px] font-medium" href="">
          /projects
        </a>
      </div>
    </div>
  );
};

export default HomeLeftSide;
