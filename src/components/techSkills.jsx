import { star } from "../assets/icons";

const techSkills = ({ imgURL1, imgURL2, framework, frontend}) => {
  return (
    <div className='flex flex-col w-full'>
     
      <h1 className="">Framework</h1>

        <div className='mt-8 flex justify-start gap-2 bg-slate-500 w-52 '>
          <img src={imgURL1} alt={framework} className='w-[102px] h-[102px] bg-gray-600' />
          <img src={imgURL2} alt={frontend} className='w-[102px] h-[102px] bg-gray-600' />
  
          <h2 className='flex justify-center items-center'>React</h2>
        </div>




     
     
     
    </div>
  );
};

export default techSkills;