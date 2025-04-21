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

      

        {/* Main Skills Container */}
        <div className="mt-8 flex flex-col gap-6 bg-text p-10 rounded-lg">


 {/* Frameworks */}
 <div>
   <h1 className="text-primary font-bold mt-6 mb-4 text-center md:justify-center lg:text-left">Framework</h1>
   <div className="flex flex-wrap justify-start max-sm:justify-center md:justify-center lg:justify-start gap-4">
     
     <SkillCard imgSrc={react} label="React.js" setHoveredSkill={setHoveredSkill} />
   </div>
 </div>
 {/* Frontend Skills */}
    
<div>
  <h1 className="text-primary font-bold mt-6 mb-4 text-center md:justify-center lg:text-left">Front End</h1>
  <div className="flex flex-wrap justify-start max-sm:justify-center md:justify-center lg:justify-start gap-4 ">
    <SkillCard imgSrc={html} label="HTML" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={css} label="CSS" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={js} label="JavaScript" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={tailwind} label="Tailwind" setHoveredSkill={setHoveredSkill} />
  </div>
</div>

{/* Backend Skills */}
<div>
  <h1 className="text-primary font-bold mt-6 mb-4 text-center md:justify-center lg:text-left">Back End</h1>
  <div className="flex flex-wrap justify-start max-sm:justify-center md:justify-center lg:justify-start gap-4">
    <SkillCard imgSrc={firebase} label="Firebase" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={php} label="PHP" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={python} label="Python" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={java} label="Java" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={sql} label="MySQL" setHoveredSkill={setHoveredSkill} />
  </div>
</div>

{/* Other Skills */}
<div>
  <h1 className="text-primary font-bold mt-6 mb-4 text-center md:justify-center lg:text-left">Others</h1>
  <div className="flex flex-wrap justify-center md:justify-center lg:justify-start gap-4">
    <SkillCard imgSrc={github} label="GitHub" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={git} label="GIT" setHoveredSkill={setHoveredSkill} />
    <SkillCard imgSrc={figma} label="Figma" setHoveredSkill={setHoveredSkill} />
  </div>
</div>


<div className="flex justify-center sm:absolute sm:bottom-[90px] sm:align-center 
                md:relative md:bottom-1 md:left-1 md:right-1 
                lg:absolute lg:right-12 lg:left-auto lg:justify-end 
                transition-opacity duration-300">
                        <img
                          src={hoveredSkill || skillsList[currentIndex]}
                          alt="Hovered Skill"
                          className="w-[200px] h-[200px] object-contain opacity-100"
                        />
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
      className="flex items-center bg-white rounded-md px-2 py-1 gap-2 shadow-md cursor-pointer 
                 min-w-[90px] min-h-[60px] max-w-fit sm:min-w-[120px] sm:px-4 sm:py-2"
      onMouseEnter={() => setHoveredSkill(imgSrc)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <img src={imgSrc} alt={label} className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-slate-500 rounded" />
      <h2 className="text-zinc-950 font-humane text-sm font-bold sm:text-base">{label}</h2>
    </div>
  );
};




export default Skills;
