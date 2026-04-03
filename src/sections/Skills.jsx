import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { react, js, java, tailwind, html, css, firebase, php, python, git, github, figma, sql } from "../assets/images";

const skillsList = [react, html, css, js, tailwind, firebase, php, python, java, sql, github, git, figma];

const skillCategories = [
  {
    title: "Framework",
    skills: [{ img: react, label: "React.js" }]
  },
  {
    title: "Frontend",
    skills: [
      { img: html, label: "HTML" },
      { img: css, label: "CSS" },
      { img: js, label: "JavaScript" },
      { img: tailwind, label: "Tailwind" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { img: firebase, label: "Firebase" },
      { img: php, label: "PHP" },
      { img: python, label: "Python" },
      { img: java, label: "Java" },
      { img: sql, label: "MySQL" }
    ]
  },
  {
    title: "Tools & Design",
    skills: [
      { img: github, label: "GitHub" },
      { img: git, label: "GIT" },
      { img: figma, label: "Figma" }
    ]
  }
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!hoveredSkill) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsList.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [hoveredSkill]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} id="skills" className="w-full bg-white dark:bg-gradient-to-br dark:from-primary dark:via-secondary dark:to-primary transition-colors duration-300">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-container flex flex-col py-20 md:py-24"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-14 md:mb-16">
          <h2 className="text-5xl md:text-6xl font-black font-clash-display text-coralY dark:bg-gradient-to-r dark:from-coralY dark:via-orange-400 dark:to-coralY dark:bg-clip-text dark:text-transparent mb-4 transition-all duration-300">
            My <span>Skills</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-500 font-montserrat text-sm md:text-base lg:text-lg font-light max-w-2xl transition-colors duration-300">
            Proficient in modern technologies and frameworks for building scalable web applications.
          </p>
        </motion.div>

        {/* Skills Grid with Preview */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Skills Categories */}
          <div className="lg:col-span-2">
            <div className="space-y-8 md:space-y-10">
              {skillCategories.map((category, catIndex) => (
                <motion.div key={catIndex} variants={itemVariants}>
                  {/* Category Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white font-poppins mb-5 md:mb-6 flex items-center gap-3 transition-colors duration-300">
                    <div className="w-8 md:w-10 h-1 bg-gradient-to-r from-coralY to-transparent rounded-full"></div>
                    {category.title}
                  </h3>

                  {/* Skills */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.08 }}
                        onMouseEnter={() => setHoveredSkill(skill.img)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group cursor-pointer"
                      >
                        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-4 hover:border-coralY/50 dark:hover:border-coralY/50 transition-all duration-300 h-full flex flex-col items-center gap-3 hover:bg-gray-50 dark:hover:bg-white/10 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-coralY/10">
                          <div className="p-3 rounded-lg bg-orange-100 dark:bg-gradient-to-br dark:from-coralY/20 dark:to-orange-400/20 group-hover:bg-orange-200 dark:group-hover:from-coralY/40 dark:group-hover:to-orange-400/40 transition-all duration-300">
                            <img 
                              src={skill.img} 
                              alt={skill.label}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <p className="text-xs md:text-sm font-poppins text-gray-900 dark:text-white text-center group-hover:text-coralY transition-colors duration-300">
                            {skill.label}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skill Preview */}
          <motion.div variants={itemVariants} className="flex items-center justify-center">
            <div className="sticky lg:top-24 w-full">
              <div className="bg-gradient-to-br from-coralY/20 to-orange-500/10 rounded-2xl p-8 border border-coralY/20 backdrop-blur-sm">
                <p className="text-sm font-poppins text-coralY text-center mb-4 tracking-widest">CURRENT SKILL</p>
                <motion.div
                  key={hoveredSkill || currentIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center"
                >
                  <img
                    src={hoveredSkill || skillsList[currentIndex]}
                    alt="Skill"
                    className="w-40 h-40 object-contain filter drop-shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
