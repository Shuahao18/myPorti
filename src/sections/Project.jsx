import { ProjectCard } from "../components";
import { projects } from "../constants";

const Project = () => {
  return (
    <section id="project" className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Sample <span className="text-coral-red">Projects</span>
      </h3>

      <div className="mt-24 grid grid-cols-2 justify-evenly items-center gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgURL={project.imgURL}
            describe={project.describe}
            backfeed={project.backfeed}
            techStack={project.techStack} // Pass an array instead of individual props
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
