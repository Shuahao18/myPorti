import { me } from "../assets/images";

const About = () => {
  return (
    
    <section 
    id="about-us"
    className="relative flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container pt-20 pb-20">
     
      <div className="flex-1 flex flex-col justify-start z-10">
        <h1 className="font-palanquin capitalize text-8xl lg:max-w-lg font-bold">
          Hel<span className="text-coral-yellow">lo!</span>
        </h1>

        <div className="absolute  justify-center items-center -z-10">
        <h1 className="font-palanquin text-[290px] max-sm:text-[100px] font-bold text-lightGray opacity-10 pointer-events-none leading-none">
          ABOUT ME
        </h1>
      </div>

        {/* Main Description */}
        <div className="space-y-6 mt-10">
          <p className="lg:max-w-lg info-text">
            I'm Joshua, a passionate web developer creating responsive websites
            and building applications with innovative designs. I'm a starter
            developer with savvy skills in front-end web development, ensuring
            satisfactory projects for clients.
          </p>
          <p className="lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex-1 flex justify-center items-center z-10">
        <img
          src={me}
          alt="About Me"
          width={570}
          height={522}
          className="max-w-full object-contain"
        />
      </div>
    </section>
  );
};

export default About;
