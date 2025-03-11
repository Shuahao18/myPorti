import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    
    <section
    id="about"
    className='max-container relative -mt-60'>
      
      <div className='bg-primary top-80  '>
      <h3 className='font-palanquin text-center text-4xl font-bold m-0  '>
        What I Can Provide?
      </h3>
    

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 '>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            backName={review.backName}
            feedback={review.feedback}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
