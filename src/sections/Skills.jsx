import { useState, useEffect } from "react";
import { react, js, java, tailwind, html, css, firebase, php, python, git, github, figma, sql } from "../assets/images"; // Import images

const skillsList = [react, html, css, js, tailwind, firebase, php, python, java, sql, github, git, figma];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!hoveredSkill) {
      // Start cycling images every 2 seconds
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsList.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [hoveredSkill]);

  return (
    <section id="skills" className="max-container max-sm:mt-12 relative">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-humane font-bold text-text">My Skills</h2>

        {/* Hover Image Display */}
        <div className="absolute bottom-[90px] right-10 transition-opacity duration-300">
          <img
            src={hoveredSkill || skillsList[currentIndex]}
            alt="Hovered Skill"
            className="w-[200px] h-[200px] object-contain opacity-100"
          />
        </div>

        {/* Main Skills Container */}
        <div className="mt-8 flex flex-col gap-6 bg-text p-10 rounded-lg">
          {/* Frameworks */}
          <div>
            <h1 className="text-primary font-bold mt-6 mb-4">Framework</h1>
            <div className="flex flex-wrap justify-start gap-4">
              
              <SkillCard imgSrc={react} label="React.js" setHoveredSkill={setHoveredSkill} />

            </div>
          </div>

          {/* Frontend Skills */}
    
<div>
  <h1 className="text-primary font-bold mt-6 mb-4">Front End</h1>
  <div className="flex flex-wrap justify-start gap-4 sm:grid sm:grid-cols-2">
    <SkillCard imgSrc={html} label="HTML" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={css} label="CSS" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={js} label="JavaScript" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={tailwind} label="Tailwind" setHoveredSkill={setHoveredSkill} />
  </div>
</div>

{/* Backend Skills */}
<div>
  <h1 className="text-primary font-bold mt-6 mb-4">Back End</h1>
  <div className="flex flex-wrap justify-start gap-4">
    <SkillCard imgSrc={firebase} label="Firebase" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={php} label="PHP" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={python} label="Python" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={java} label="Java" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={sql} label="MySQL" setHoveredSkill={setHoveredSkill} />
  </div>
</div>

{/* Other Skills */}
<div>
  <h1 className="text-primary font-bold mt-6 mb-4">Others</h1>
  <div className="flex flex-wrap justify-start gap-4">
    <SkillCard imgSrc={github} label="GitHub" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={git} label="GIT" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={figma} label="Figma" setHoveredSkill={setHoveredSkill} />
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

// Reusable Skill Card Component
const SkillCard = ({ imgSrc, label, setHoveredSkill }) => {
  return (
    <div
      className="flex items-center bg-white rounded-md min-w-[120px]  max-w-fit px-4 py-2 shadow-md cursor-pointer"
      onMouseEnter={() => setHoveredSkill(imgSrc)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <img src={imgSrc} alt={label} className="w-[50px] h-[50px] bg-slate-500 rounded" />
      <h2 className="text-zinc-950 whitespace-nowrap">{label}</h2>
    </div>
  );
};


export default Skills;
