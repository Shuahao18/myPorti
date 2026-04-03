import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectCard } from "../components";
import { projects } from "../constants";

const Project = () => {
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
    <section ref={ref} id="project" className="w-full bg-white dark:bg-primary transition-colors duration-300">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-container py-20"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-clash-display text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Sample <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-slate-gray font-montserrat text-lg max-w-2xl transition-colors duration-300">
            A selection of my recent work showcasing full-stack development capabilities and design excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ translateY: -10 }}
            >
              <div className="group h-full bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-coralY/50 transition-all duration-300 hover:shadow-2xl hover:shadow-coralY/20">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-b from-coralY/20 to-transparent">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={project.imgURL}
                    alt={project.describe}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>

                {/* Content Container */}
                <div className="p-8">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins mb-2 transition-colors duration-300">
                    {project.describe}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-slate-gray font-montserrat leading-relaxed mb-6 transition-colors duration-300">
                    {project.backfeed}
                  </p>

                  {/* Tech Stack */}
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="mb-6">
                      <p className="text-xs font-poppins font-semibold text-coralY tracking-widest mb-3">
                        TECH STACK
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="inline-block px-3 py-1.5 text-xs font-poppins font-semibold text-white bg-coralY/80 hover:bg-coralY rounded-full transition-all duration-300 shadow-md"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* View Project Link */}
                  {project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-coralY font-semibold font-poppins group/btn hover:text-coralY transition-colors"
                    >
                      View Project
                      <svg className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                  ) : (
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-coralY font-semibold font-poppins group/btn"
                    >
                      View Project
                      <svg className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Project;
