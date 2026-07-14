import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImage from "../assets/images/joshua.png";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } 
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 1, ease: [0.25, 0.4, 0.25, 1] } 
    },
  };

  // Stats data
  const stats = [
    { value: "3+", label: "Projects Completed" },
    { value: "25+", label: "Technologies" },
    { value: "2+", label: "Years Experience" },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="w-full min-h-screen bg-white dark:bg-gradient-to-br dark:from-primary dark:via-primary dark:to-secondary transition-colors duration-500 pt-16 md:pt-20 lg:pt-0 overflow-hidden"
    >
      <div className="max-container w-full flex xl:flex-row flex-col gap-12 md:gap-16 lg:gap-20 justify-center items-center py-12 lg:py-0">
        {/* Left side - Profile Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative flex-1 w-full max-xl:max-w-sm max-sm:max-w-xs mx-auto flex justify-center items-center xl:min-h-screen 
                     max-xl:py-12 max-sm:py-8 z-0 order-2 xl:order-1"
        >
          {/* Soft glowing gradient background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] rounded-full 
                            bg-gradient-to-br from-coralY/30 via-orange-500/20 to-coralY/10 
                            blur-3xl animate-pulse-glow" />
          </div>
          
          {/* Secondary glow ring */}
          <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[440px] md:h-[440px] 
                          rounded-full border border-coralY/20 animate-float" />

          {/* Profile Image with enhanced styling */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative z-20"
          >
            <div className="relative">
              {/* Image container with subtle border glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-coralY/50 to-orange-500/30 
                              rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              
              <img
                src={profileImage}
                alt="Joshua Meredores - Full Stack Developer"
                className="relative object-cover w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] 
                           md:w-[420px] md:h-[420px] lg:w-[440px] lg:h-[440px] 
                           rounded-2xl z-20 shadow-2xl shadow-coralY/20 
                           transition-all duration-500 hover:shadow-coralY/40"
              />
            </div>
          </motion.div>

        </motion.div>

        {/* Right side - Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative flex-1 w-full flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10
                     pt-4 sm:pt-8 md:pt-12 lg:pt-0 items-center text-center xl:items-start xl:text-left xl:pl-8 
                     space-y-6 sm:space-y-8 order-1 xl:order-2"
        >
          {/* Name with premium typography */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-clash-display 
                       text-coralY leading-[0.9] tracking-tight"
          >
            <span className="block">JOSHUA</span>
            <span className="block">MEREDORES</span>
          </motion.h1>

          {/* Full Stack Developer with gradient */}
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins
                       bg-gradient-to-r from-coralY via-orange-400 to-coralY 
                       bg-clip-text text-transparent"
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 font-montserrat text-base sm:text-lg 
                       max-w-md leading-relaxed"
          >
            Building modern web applications with clean code and intuitive design. 
            Passionate about creating seamless user experiences.
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-20 h-0.5 bg-gradient-to-r from-coralY to-transparent rounded-full"
          />

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center xl:justify-start gap-8 sm:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-black font-clash-display text-coralY">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            {/* Primary button - View Projects */}
            <motion.a
              href="#project"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-2 px-8 py-4 
                        bg-gradient-to-r from-coralY to-orange-500 
                        text-black font-semibold font-poppins rounded-full
                        shadow-lg shadow-coralY/25 hover:shadow-coralY/40 
                        transition-all duration-300"
            >
              View Projects
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.a>

            {/* Secondary button - Download CV */}
            <motion.a
              href="/JOSHUA%20UMBAY%20MEREDORES%201%20(3).pdf"
              download
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-2 px-8 py-4 
                        border-2 border-coralY text-coralY font-semibold font-poppins rounded-full
                        hover:bg-coralY/10 transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v10m0 0l-4-4m4 4l4-4M4 20h16"
                />
              </svg>
              Download CV
            </motion.a>
          </motion.div>

          {/* Contact info - subtle */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4 text-sm text-gray-500 dark:text-gray-400"
          >
            <a 
              href="mailto:joshumbay5@gmail.com"
              className="hover:text-coralY transition-colors duration-300"
            >
              joshumbay5@gmail.com
            </a>
            <span className="hidden sm:block text-gray-600">•</span>
            <span>+63 0909 357 5240</span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
