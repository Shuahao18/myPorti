import { react } from "../assets/images"; // Import images

const Skills = () => {
  return (
    <section id="skills" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          My <span className="text-coral-red">Skills</span>
        </h2>

        {/* Main Skills Container */}
        <div className="mt-8 flex flex-col gap-6 bg-slate-400 p-10 rounded-lg">
          
          {/* Section Title and First Row */}
          <div className="flex flex-col">
            <h1 className="text-white font-bold mb-4">Framework</h1>

            {/* First Row of Images */}
            <div className="flex flex-row gap-4">
              <div className="flex flex-row items-center bg-gray-600 p-4 rounded-md w-64 gap-4">
                <img src={react} alt="React" className="w-[102px] h-[102px]" />
                <h2 className="text-white">React.js</h2>
              </div>

              <div className="flex flex-row items-center bg-gray-600 p-4 rounded-md w-64 gap-4">
                <img src={react} alt="Vue" className="w-[102px] h-[102px]" />
                <h2 className="text-white">Vue.js</h2>
              </div>
            </div>
          </div>

          {/* Second Row (Under the Same Main Container) */}
          <div className="flex flex-col">
            <h1 className="text-white font-bold mt-6 mb-4">Front-end</h1>

            {/* Second Row of Images */}
            <div className="flex flex-row gap-4">
              <div className="flex flex-row items-center bg-gray-600 p-4 rounded-md w-64 gap-4">
                <img src={react} alt="React" className="w-[102px] h-[102px]" />
                <h2 className="text-white">React.js</h2>
              </div>

              <div className="flex flex-row items-center bg-gray-600 p-4 rounded-md w-64 gap-4">
                <img src={react} alt="Vue" className="w-[102px] h-[102px]" />
                <h2 className="text-white">Vue.js</h2>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
