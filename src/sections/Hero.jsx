import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImage from "../assets/images/me.png";

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeSection, setActiveSection] = useState(
    window.location.hash ? window.location.hash.replace("#", "") : "home"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash ? window.location.hash.replace("#", "") : "home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const getNavLinkClasses = (section) => {
    const isActive = activeSection === section;
    return `font-poppins text-sm sm:text-base font-medium transition-colors duration-300 pb-1 border-b-[3px] ${
      isActive ? "text-white border-gold" : "text-white hover:text-gold/80 border-transparent"
    }`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden w-full bg-primary flex flex-col lg:min-h-screen"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-container w-full flex flex-col lg:flex-row lg:flex-1 items-center gap-8 sm:gap-12 lg:gap-16 px-5 sm:px-8 md:px-16 pt-20 sm:pt-24 pb-10 sm:pb-16 lg:pb-28 min-w-0"
      >
        {/* Left — Text Content */}
        <div className="flex-1 w-full min-w-0 text-center lg:text-left">
          <motion.p
            variants={itemVariants}
            className="text-gold font-poppins font-semibold text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-8"
          >
            Software Developer
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-4 sm:mb-6 max-w-full break-words"
          >
            Joshua Meredores
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-poppins text-white text-sm sm:text-base md:text-lg font-medium tracking-[0.08em] sm:tracking-[0.15em] uppercase max-w-2xl mx-auto lg:mx-0 mb-5 sm:mb-8 leading-relaxed"
          >
            Building modern web applications with clean code and intuitive design
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 mb-5 sm:mb-8"
          >
            <span className="text-gold font-poppins font-bold text-[11px] sm:text-sm tracking-[0.12em] sm:tracking-[0.2em] uppercase break-all sm:break-normal">
              joshuemeredores@gmail.com · 09093575240
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-poppins text-text/80 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            Passionate about creating seamless user experiences across the full
            stack. Proficient in React, Python, and modern web technologies —
            ready to build systems that scale.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-8 sm:mt-10">
            <a
              href="#project"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 bg-gold text-primary font-poppins font-semibold text-sm rounded-full hover:bg-gold/90 transition-colors duration-300"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/Joshua_Meredores.pdf"
              download="JOSH_MEREDORES.pdf"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 border border-gold/40 text-gold font-poppins font-semibold text-sm rounded-full hover:bg-gold/10 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v10m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              View CV
            </a>
          </motion.div>
        </div>

        {/* Right — Profile Photo */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-[280px] sm:max-w-xs lg:flex-1 lg:max-w-none flex justify-center lg:justify-end min-w-0 shrink-0"
        >
          <div className="relative w-full">
            <div className="absolute -inset-3 border border-gold/20 rounded-2xl" />
            <div className="absolute -inset-1.5 border border-gold/10 rounded-2xl" />
            <img
              src={profileImage}
              alt="Joshua Meredores"
              className="relative w-full aspect-square object-cover rounded-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Navigation — Home only (page 1) */}
      <nav id="hero-bottom-nav" className="relative hidden md:block w-full border-t border-white/10 bg-primary/90 backdrop-blur-xl">
        <div className="max-container px-8 sm:px-16">
          <ul className="flex items-center justify-start gap-8 sm:gap-12 py-5 sm:py-6">
            <li>
              <a href="#home" className={getNavLinkClasses("home")}>Home</a>
            </li>
            <li>
              <a href="#skills" className={getNavLinkClasses("skills")}>Skills</a>
            </li>
            <li>
              <a href="#project" className={getNavLinkClasses("project")}>Project</a>
            </li>
            <li>
              <a href="#contact-us" className={getNavLinkClasses("contact-us")}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Hero;
