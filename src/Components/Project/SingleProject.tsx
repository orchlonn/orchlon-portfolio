import BorderButton from "../BorderButton";

const SingleProject = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-3 h-[25rem] w-1/5 bg-slate-800 rounded-[30px] p-5 transition-all duration-500 ease-in-out hover:bg-transparent hover:border-slate-700 border border-transparent">
      <div className="h-[12rem] w-full bg-white rounded-[27px]"></div>
      <p className="text-2xl font-bold text-slate-50">{title}</p>
      <div className="flex gap-4 my-2">
        <BorderButton buttonTitle="Github" />
        <a className="bg-teal-300 text-black px-4 py-2 rounded-md hover:bg-[#F5F5F5] transition-[background-color,color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform cursor-pointer">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
