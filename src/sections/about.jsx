import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import me from "../assets/images/Me.png";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section 
      ref={ref}
      id="about-us"
      className="w-full relative flex max-xl:flex-col-reverse gap-12 max-container scroll-mt-20 py-20 z-0 overflow-x-hidden bg-white dark:bg-secondary transition-colors duration-300"
    >
      
      {/* Left Section (Text) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex-1 flex flex-col justify-start z-10 px-4 sm:px-0"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-10 md:mb-12">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-clash-display text-gray-900 dark:text-white mb-6 leading-none transition-colors duration-300">
            Hey, I'm
            <br />
            <span className="text-gradient">Joshua</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-coralY to-transparent rounded-full"></div>
        </motion.div>

        {/* Main Bio */}
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-slate-gray font-montserrat leading-relaxed mb-12 max-w-3xl transition-colors duration-300"
        >
          I'm a passionate <span className="text-coralY font-semibold">Full Stack Developer</span> with a commitment to crafting 
          responsive, beautiful applications that drive results. I specialize in modern tech stacks including <span className="text-coralY font-semibold">Python</span>, React, 
          Node.js, and Tailwind CSS, building innovative solutions that exceed expectations.
        </motion.p>

        {/* Stats */}
        <motion.div 
          variants={itemVariants}
          className="mb-12 py-8 md:py-10 border-y border-gray-200 dark:border-white/10 transition-colors duration-300"
        >
          <div>
            <p className="text-4xl md:text-5xl font-bold text-coralY font-clash-display mb-2">2+</p>
            <p className="text-xs md:text-sm text-gray-600 dark:text-slate-gray font-poppins tracking-wider uppercase transition-colors duration-300">Projects Completed</p>
          </div>
        </motion.div>

        {/* Key Points */}
        <motion.div variants={itemVariants} className="space-y-5 md:space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-3 h-3 rounded-full bg-coralY mt-1.5 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-gray-700 dark:text-slate-gray font-montserrat leading-relaxed transition-colors duration-300">Expertise in React, Tailwind CSS, and modern JavaScript</p>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-3 h-3 rounded-full bg-coralY mt-1.5 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-gray-700 dark:text-slate-gray font-montserrat leading-relaxed transition-colors duration-300">Responsive design with pixel-perfect attention to detail</p>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-3 h-3 rounded-full bg-coralY mt-1.5 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-gray-700 dark:text-slate-gray font-montserrat leading-relaxed transition-colors duration-300">Performance optimization and accessibility best practices</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
        transition={{ duration: 0.9 }}
        className="relative flex-1 flex justify-center items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-coralY/20 to-orange-500/10 rounded-2xl blur-3xl"></div>
        
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={me + "?v=" + Date.now()}  
          alt="Joshua - Full Stack Web Developer"
          className="relative w-full max-w-md object-cover rounded-2xl shadow-2xl ring-4 ring-coralY/20 hover:ring-coralY/50 transition-all duration-300"
        />

        {/* Social Link */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="https://facebook.com/Shua.meredores.16" target="_blank" rel="noopener noreferrer"
             className="inline-block bg-white dark:bg-primary border border-coralY/30 px-4 py-2 rounded-full text-xs font-poppins text-coralY hover:bg-coralY/10 dark:hover:bg-coralY/10 hover:border-coralY transition-all duration-300">
            facebook.com/Shua.meredores.16
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;