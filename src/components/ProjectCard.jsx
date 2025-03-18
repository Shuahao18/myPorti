
const ProjectCard = ({ imgURL,imgURL1,imgURL2, imgURL3, imgURL4, imgURL5, imgURL6, describe, rating, backfeed }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='customer'
        className=' object-fill w-[900px] h-400px]'
      />
       <h3 className='mt-1 font-humane text-3xl text-center font-bold'>
        {describe}
      </h3>
      <p className='mt-6 max-w-sm text-center info-text'>{backfeed}</p>
     
      <div className='mt-3 flex justify-center items-center gap-2.5'>
       
         <div className="grid grid-cols-3 gap-10 items-center justify-center"> 
         <img
           src={imgURL1}
           alt='customer'
           className=' object-fill w-[70px] h-50px]'
         />
          <img
           src={imgURL2}
           alt='customer'
           className=' object-fill w-[70px] h-100px]'
         />

         <img
           src={imgURL3}
           alt='customer'
           className=' object-fill w-[70px] h-100px]'
         />

          

         </div>
      
      </div>

      <div className='mt-3 flex justify-center items-center gap-2.5'>
       
       <div className="grid grid-cols-3 gap-10 items-center justify-center"> 
       <img
         src={imgURL4}
         alt='customer'
         className=' object-fill w-[70px] h-50px]'
       />
        <img
         src={imgURL5}
         alt='customer'
         className=' object-fill w-[70px] h-100px]'
       />

       <img
         src={imgURL6}
         alt='customer'
         className=' object-fill w-[70px] h-100px]'
       />

        

       </div>
    
    </div>
   
     
    </div>
  );
};

export default ProjectCard;
