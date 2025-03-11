import { ProjectCard } from "../components";
import { projects } from "../constants";


const Project = () => {
  return (
    <section 
    id="Project"
    className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-coral-red'> Customers</span>
        Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='mt-24 flex-1 grid grid-cols-2 justify-evenly items-center gap-14'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgURL={project.imgURL}
            describe={project.describe} // Changed from 'customerName' since you had 'backName'
            backfeed={project.backfeed}
            imgURL1={project.imgURL}
        
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
