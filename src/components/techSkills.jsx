import { star } from "../assets/icons";

const techSkills = ({ imgURL1, imgURL2, framework, frontend}) => {
  return (
    <div className='flex flex-col w-full'>
     
      <h1 className="">Framework</h1>

        <div className='mt-8 flex flex-wrap justify-start gap-2 bg-slate-500 w-full max-w-[13rem]'>
          <img src={imgURL1} alt={framework} className='w-24 h-24 sm:w-[102px] sm:h-[102px] bg-gray-600' />
          <img src={imgURL2} alt={frontend} className='w-24 h-24 sm:w-[102px] sm:h-[102px] bg-gray-600' />
  
          <h2 className='flex justify-center items-center'>React</h2>
        </div>




     
     
     
    </div>
  );
};

export default techSkills;