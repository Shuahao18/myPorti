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
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!hoveredSkill) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % skillsList.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [hoveredSkill]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} id="skills" className="relative overflow-hidden w-full bg-white border-t border-gray-200">
      <div className="section-bg-pattern absolute inset-0 pointer-events-none" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-container px-5 sm:px-8 md:px-16 py-16 sm:py-20 md:py-28"
      >
        {/* Section Label */}
        <motion.p
          variants={itemVariants}
          className="text-gold font-poppins font-semibold text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-6"
        >
          Technical Expertise
        </motion.p>

        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-14 md:mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-5 leading-tight">
            My Skills
          </h2>
          <p className="font-poppins text-gray-700 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            Proficient in modern technologies and frameworks for building scalable web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-10 md:space-y-12">
              {skillCategories.map((category, catIndex) => (
                <motion.div key={catIndex} variants={itemVariants}>
                  <h3 className="text-gold font-poppins font-semibold text-xs tracking-[0.25em] uppercase mb-5 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-gold flex items-center justify-center text-[10px] font-bold">
                      {catIndex + 1}
                    </span>
                    {category.title}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.04 }}
                        onMouseEnter={() => setHoveredSkill(skill.img)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group cursor-pointer"
                      >
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-gold/40 transition-all duration-300 h-full flex flex-col items-center gap-3 hover:bg-gray-100">
                          <div className="p-3 rounded-full border border-gray-300 group-hover:border-gold/60 transition-all duration-300">
                            <img
                              src={skill.img}
                              alt={skill.label}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <p className="text-xs md:text-sm font-poppins text-gray-900 text-center group-hover:text-gold transition-colors duration-300">
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

          {/* Skill Preview — hidden on small mobile, shown from sm up */}
          <motion.div variants={itemVariants} className="hidden sm:flex items-start justify-center">
            <div className="sticky top-28 w-full">
              <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
                <p className="text-gold font-poppins text-[10px] tracking-[0.3em] uppercase text-center mb-6">
                  Current Skill
                </p>
                <motion.div
                  key={hoveredSkill || currentIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center"
                >
                  <div className="w-36 h-36 rounded-full border border-gold/30 flex items-center justify-center">
                    <img
                      src={hoveredSkill || skillsList[currentIndex]}
                      alt="Skill"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
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
