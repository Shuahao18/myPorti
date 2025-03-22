const ProjectCard = ({ imgURL, techStack = [], describe, backfeed }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='project preview'
        className='object-fill sm:w-[760px] sm:h-[500px] lg:w-[900px] lg:h-[400px] '
      />
      <h3 className='mt-1 font-humane text-3xl text-center font-bold'>
        {describe}
      </h3>
      <p className='mt-6 max-w-sm text-center info-text'>{backfeed}</p>

      {/* Render tech stack images dynamically */}
      {techStack.length > 0 && (
        <div className='mt-3 grid grid-cols-3 gap-10 items-center justify-center'>
          {techStack.map((tech, index) => (
            <img
              key={index}
              src={tech}
              alt={`tech-${index}`}
              className='object-fill w-[70px] h-[70px]'
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
