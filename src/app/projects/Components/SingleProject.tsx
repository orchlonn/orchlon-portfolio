import BorderButton from "@/Components/BorderButton";
import Image, { StaticImageData } from "next/image";

const SingleProject = ({
  title,
  image,
  demoLink,
  githubLink,
}: {
  title: string;
  image: StaticImageData | string;
  demoLink: string;
  githubLink: string;
}) => {
  return (
    <div className="flex flex-col gap-3 h-[25rem] w-1/5 bg-slate-800 rounded-[30px] p-5 transition-all duration-500 ease-in-out hover:bg-transparent hover:border-slate-700 border border-transparent">
      <div className="h-[12rem] w-full relative rounded-[27px] overflow-hidden">
        <Image
          src={image}
          fill
          className="object-cover grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
          alt="Logo of the project"
        />
      </div>
      <p className="text-2xl font-bold text-slate-50">{title}</p>
      <div className="flex gap-4 my-2">
        <BorderButton buttonTitle="Github" link={githubLink} />
        <a
          href={demoLink}
          target="_blank"
          className="bg-teal-300 text-black px-4 py-2 rounded-md hover:bg-[#F5F5F5] transition-[background-color,color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform cursor-pointer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
