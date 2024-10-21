const SingleProject = ({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) => {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <h2 className="text-l mt-1">{description}</h2>
      </div>
      <video
        autoPlay
        muted
        playsInline
        loop
        className="rounded-lg"
        preload="https://media.geeksforgeeks.org/wp-content/cdn- 
              uploads/20190710102234/download3.png"
      >
        <source src={imageUrl} />
        Your browser does not support the video tag...
      </video>
    </div>
  );
};

export default SingleProject;
