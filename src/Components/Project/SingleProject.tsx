const SingleProject = ({ title, description, imageUrl }) => {
  return (
    <div className="w-1/2 flex flex-col">
      <h2 className="text-3xl font-bold">{title}</h2>
      <h2 className="text-l">{description}</h2>
      <video autoPlay muted playsInline loop className="rounded-lg">
        <source src="https://firebasestorage.googleapis.com/v0/b/orchlon-portfolio.appspot.com/o/Simulator%20Screen%20Recording%20-%20iPhone%2015%20Pro%20-%202024-10-20%20at%2017.20.40.mp4?alt=media&token=b18b5d7a-cc6f-4f79-b1c4-1699a5fa378e" />
        Your browser does not support the video tag...
      </video>
    </div>
  );
};

export default SingleProject;
