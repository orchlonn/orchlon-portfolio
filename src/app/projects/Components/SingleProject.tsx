import BorderButton from "@/Components/BorderButton";
import Image, { StaticImageData } from "next/image";

const SingleProject = ({
  title,
  image,
  demoLink,
  githubLink,
  className = "",
}: {
  title: string;
  image: StaticImageData | string;
  demoLink: string;
  githubLink: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col gap-2 sm:gap-3 h-auto sm:h-[25rem] bg-slate-800 rounded-[30px] p-3 sm:p-5 transition-all duration-500 ease-in-out hover:bg-transparent hover:border-slate-700 border border-transparent ${className}`}
    >
      <div className="h-32 sm:h-48 md:h-[12rem] w-full relative rounded-[27px] overflow-hidden">
        <Image
          src={image}
          fill
          className="object-cover grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
          alt="Logo of the project"
        />
      </div>
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-50 text-center">
        {title}
      </p>
      <div className="flex gap-2 sm:gap-4 my-2">
        <BorderButton buttonTitle="Github" link={githubLink} />
        <a
          href={demoLink}
          target="_blank"
          className="bg-teal-300 text-black px-3 sm:px-4 py-2 rounded-md hover:bg-[#F5F5F5] transition-[background-color,color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform cursor-pointer text-center text-sm sm:text-base"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
