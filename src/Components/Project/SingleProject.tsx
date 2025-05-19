const SingleProject = () => {
  return (
    <div className="flex flex-col gap-3 h-[25rem] w-1/5 bg-blue-300 rounded-[30px] p-5">
      <div className="h-[12rem] w-full bg-white rounded-[27px]"></div>
      <p className="text-2xl font-bold">
        AI Nomad Navigator - AI Travel Assistant
      </p>
      <div className="flex gap-4 my-2">
        <a className="border-2 border-teal-300 p-2 rounded-md px-4 py-2">
          Github
        </a>
        <a className="bg-red-200 px-4 py-2 rounded-md">Live Demo</a>
      </div>
    </div>
  );
};

export default SingleProject;
