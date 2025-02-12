import { react, js, java, tailwind, html, css, firebase, php, python, git , github, figma, sql } from "../assets/images"; // Import images

const Skills = () => {
  return (
    <section id="skills" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          My <span className="text-coral-red">Skills</span>
        </h2>

        {/* Main Skills Container */}
        <div className="mt-8 flex flex-col gap-6 bg-slate-400 p-10 rounded-lg">
          
          {/* Frameworks */}
          <div>
            <h1 className="text-white font-bold mb-4 text-center sm:text-left md:text-left">Framework</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols gap-4">
              <SkillCard imgSrc={react} label="React.js" />
              
            </div>
          </div>

          {/* Frontend Skills */}
          <div>
            <h1 className="text-white font-bold mt-6 mb-4">Front End</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <SkillCard imgSrc={html} label="HTML" />
              <SkillCard imgSrc={css} label="CSS" />
              <SkillCard imgSrc={js} label="JavaScript" />
              <SkillCard imgSrc={tailwind} label="Tailwind" />
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h1 className="text-white font-bold mt-6 mb-4">Back End</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <SkillCard imgSrc={firebase} label="Firebase" />
              <SkillCard imgSrc={php} label="PHP" />
              <SkillCard imgSrc={python} label="Python" />
              <SkillCard imgSrc={java} label="Java" />
              <SkillCard imgSrc={sql} label="MySQL" />
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h1 className="text-white font-bold mt-6 mb-4">Others</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
              <SkillCard imgSrc={github} label="GitHub" />
              <SkillCard imgSrc={git} label="GIT" />
              <SkillCard imgSrc={figma} label="Figma" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable Skill Card Component
const SkillCard = ({ imgSrc, label }) => {
  return (
    <div className="flex flex-row items-center bg-white rounded-md w-full md:w-52 h-20 gap-4 p-2 shadow-md">
      <img src={imgSrc} alt={label} className="w-[70px] h-[50px] bg-slate-500 m-2 rounded" />
      <h2 className="text-zinc-950">{label}</h2>
    </div>
  );
};

export default Skills;
