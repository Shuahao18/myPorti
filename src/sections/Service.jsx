import { arrowRight } from "../assets/icons";
import { skills } from "../assets/images";
import { Button } from "../components";

const service = () => {
  return (
    <section
    id="service"
     className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 flex flex-col gap-10 justify-start items-start'>
          <h5 className="text-4xl"
          >PERSONAL</h5>
          
          <h1 className="text-8xl">
          SKILLS</h1>
        
        <img
          src={skills}
          alt='Shoe Promotion'
          width={253}
          height={50}
          className=''
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
          joshua a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default service;
