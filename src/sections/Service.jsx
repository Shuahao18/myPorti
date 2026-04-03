import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReviewCard } from "../components";
import { reviews } from "../constants";

const Service = () => {
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
      id="services"
      className="w-full relative py-24 bg-white dark:bg-secondary transition-colors duration-300"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-container"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-7xl md:text-8xl font-black font-clash-display text-gray-900 dark:text-white mb-4 transition-colors duration-300 leading-tight">
            What I Can
            <br />
            <span className="bg-gradient-to-r from-coralY via-orange-400 to-coralY bg-clip-text text-transparent">Provide?</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-montserrat text-lg font-light tracking-wide max-w-3xl mx-auto transition-colors duration-300">
            Premium web development services tailored to bring your vision to life with excellence and innovation.
          </p>
        </motion.div>

        {/* Services Grid - Staggered Layout */}
        <motion.div 
          variants={containerVariants}
          className="relative max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-start">
            {/* First Card - Left Side */}
            <motion.div
              variants={itemVariants}
              whileHover={{ translateY: -20 }}
              className="md:mt-0"
            >
              <div className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                  style={{
                    backgroundImage: `url(${reviews[0].imgURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90 group-hover:from-black/40 group-hover:via-black/70 group-hover:to-black/95 transition-all duration-300" />

                <motion.div 
                  className="relative h-full flex flex-col justify-between p-8 z-10"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-coralY/25 backdrop-blur-md border border-coralY/50 group-hover:bg-coralY/40 group-hover:scale-110 transition-all duration-300">
                    <img 
                      src={reviews[0].imgURL} 
                      alt={reviews[0].backName}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white font-clash-display leading-tight tracking-tight">
                      {reviews[0].backName}
                    </h3>
                    <p className="text-gray-200 font-montserrat text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-40 overflow-hidden">
                      {reviews[0].feedback}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Middle Card - Center (Larger) */}
            <motion.div
              variants={itemVariants}
              whileHover={{ translateY: -20 }}
              className="md:mt-8"
            >
              <div className="group relative h-96 md:h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-3xl transition-all duration-300 md:h-[450px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                  style={{
                    backgroundImage: `url(${reviews[1].imgURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90 group-hover:from-black/40 group-hover:via-black/70 group-hover:to-black/95 transition-all duration-300" />

                <motion.div 
                  className="relative h-full flex flex-col justify-between p-8 z-10"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-coralY/25 backdrop-blur-md border border-coralY/50 group-hover:bg-coralY/40 group-hover:scale-110 transition-all duration-300">
                    <img 
                      src={reviews[1].imgURL} 
                      alt={reviews[1].backName}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-4xl font-black text-white font-clash-display leading-tight tracking-tight">
                      {reviews[1].backName}
                    </h3>
                    <p className="text-gray-200 font-montserrat text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-48 overflow-hidden">
                      {reviews[1].feedback}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Third Card - Right Side */}
            <motion.div
              variants={itemVariants}
              whileHover={{ translateY: -20 }}
              className="md:mt-0"
            >
              <div className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                  style={{
                    backgroundImage: `url(${reviews[2].imgURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90 group-hover:from-black/40 group-hover:via-black/70 group-hover:to-black/95 transition-all duration-300" />

                <motion.div 
                  className="relative h-full flex flex-col justify-between p-8 z-10"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-coralY/25 backdrop-blur-md border border-coralY/50 group-hover:bg-coralY/40 group-hover:scale-110 transition-all duration-300">
                    <img 
                      src={reviews[2].imgURL} 
                      alt={reviews[2].backName}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white font-clash-display leading-tight tracking-tight">
                      {reviews[2].backName}
                    </h3>
                    <p className="text-gray-200 font-montserrat text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-40 overflow-hidden">
                      {reviews[2].feedback}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Service;
