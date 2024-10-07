export default function Home() {
  return (
    <div className='h-screen w-screen bg-[#111729] flex flex-row px-[15vw] pt-32 text-white'>
      <div className='w-1/2'>
        <h1 className=''>Oscar Chinbat</h1>
        <p className="">Full Stack software engineer</p>
        <p className="">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
      </div>
      <div className="w-1/2">
        <p className="">
          I am a junior studying Computer Science at Central Washington
          University with a strong passion for software engineering. I have
          completed three internships, where I gained valuable experience in
          mobile app development, taking projects from concept to final product.
          My primary tools include React Native, Expo, Node.js, NextJS, and
          Firebase, which I use to build custom iOS, Android, and web
          applications.
        </p>

        {/* Work Experience Section */}
        <div className="flex">
          <div className="w-1/5">2024 - Present</div>
          <div className="w-4/5">
            <p>Software Engineer Internship</p>
            <p>Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
            <div className="flex gap-5">
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>React Native</p>
              <p>Expo</p>
              <p>Firebase</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
