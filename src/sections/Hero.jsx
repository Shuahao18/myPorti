import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImage from "../assets/images/joshua.png"; // Adjust path if necessary

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to false so it triggers again when scrolling back
    threshold: 0.2, // Fires when 20% of the section is visible
  });

  return (
    <section
      id="home"
      ref={ref}
      className="w-full flex xl:flex-row flex-col  max-container justify-center min-h-screen "
    >
      {/* Left side (Image) */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex-1 w-full xl:w-1/3 flex justify-center items-center xl:min-h-screen 
                   max-xl:py-40 max-sm:py-10 z-0"
      >
        {/* Background shape */}
        <div className="absolute bg-coralY max-sm:w-[280px] max-sm:h-[280px] max-sm:mb-9 max-sm:mr-9 
                      rounded-md w-[450px] h-[500px] opacity-70 translate-x-10 translate-y-10 z-10 bg">
        </div>

        {/* Profile Image */}
        <img
          src={profileImage}
          alt="profile"
          className="object-cover w-[300px] h-[300px] rounded-md z-10
                    sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[500px]"
        />
      </motion.div>

      {/* Right side (Text) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative xl:w-2/3 flex flex-col justify-center place-items-end
                   w-full max-xl:padding-y pt-28 max-sm:pt-10 max-sm:items-center"
      >
        <h1 className="mt-10  text-[70px] text-center max-sm:text-[55px] max-sm:leading-[45px] 
                       max-sm:mt-4 font-bold font-clash-display text-text">
          JOSHUA MEREDORES
        </h1>
        <h3 className="text-4xl max-sm:text-[25px] max-sm:leading-[30px] font-inter text-seText font-bold max-sm:mt-2">
          Web | Developer
        </h3>
        <h3 className="text-2xl font-clash-display text-seText font-bold mt-0 lg:mt-44 max-sm:text-[25px] max-sm:leading-[30px] max-sm:mt-2">
          Let’s connect!
        </h3> 
        <p className="text-2xl font-intern text-seText max-sm:text-[18px] max-sm:leading-[25px] max-sm:mt-1">
          joshuemeredores@gmail.com
        </p>
        <p className="text-2xl font-intern text-seText max-sm:text-[18px] max-sm:leading-[25px] max-sm:mt-1">
          +63 0909 357 5240
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
