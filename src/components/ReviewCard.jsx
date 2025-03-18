import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, backName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[100px] h-[100px]'
      />
       <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
        {backName}
      </h3>
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
       
      
      </div>
     
    </div>
  );
};

export default ReviewCard;
