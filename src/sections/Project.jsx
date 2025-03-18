import { ProjectCard } from "../components";
import { projects } from "../constants";


const Project = () => {
  return (
    <section 
    id="project"
    className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
       Sample
        <span className='text-coral-red'> Projects</span>
  
      </h3>
      

      <div className='mt-24 flex-1 grid grid-cols-2 justify-evenly items-center gap-10'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgURL={project.imgURL}
            describe={project.describe} // Changed from 'customerName' since you had 'backName'
            backfeed={project.backfeed}
            imgURL1={project.imgURL1}
            imgURL2={project.imgURL2}
            imgURL3={project.imgURL3}
           
        
          />
        ))}
      </div>

      
    </section>
  );
};

export default Project;
