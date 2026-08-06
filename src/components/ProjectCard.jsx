const ProjectCard = ({ imgURL, techStack = [], describe, backfeed }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='project preview'
        className='w-full max-w-full h-auto sm:h-[500px] lg:h-[400px] object-cover'
      />
      <h3 className='mt-1 font-poppins text-3xl text-center font-bold'>
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
              className='object-fill w-14 h-14 sm:w-[70px] sm:h-[70px]'
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
