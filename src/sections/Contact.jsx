import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

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
    <footer
      ref={ref}
      id="contact-us" 
      className='w-full py-24 px-8 sm:px-16 bg-white dark:bg-black transition-colors duration-300'
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className='flex justify-between items-start gap-16 flex-wrap max-lg:flex-col'
      >
        {/* Left Side - Logo & Social Media */}
        <motion.div variants={itemVariants} className='flex flex-col items-start flex-1'>
          <h1 className="text-gray-900 dark:text-white text-5xl font-bold font-clash-display mb-2 transition-colors duration-300">Joshua</h1>
          <p className="text-xs font-poppins text-coralY tracking-widest mb-4">FULL STACK DEVELOPER</p>
          <p className='mt-4 text-base leading-7 font-montserrat text-gray-600 dark:text-slate-gray sm:max-w-sm transition-colors duration-300'>
            Let's collaborate on amazing web projects. I'm passionate about creating innovative solutions that drive results.
          </p>
          <div className='flex items-center gap-4 mt-8'>
            {socialMedia.map((icon) => (
              <motion.a
                whileHover={{ scale: 1.15, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                href={icon.link}
                key={icon.alt}
                target="_blank"
                rel="noopener noreferrer"
                className='flex justify-center items-center w-12 h-12 bg-orange-100 dark:bg-gradient-to-br dark:from-coralY/20 dark:to-orange-400/20 hover:bg-orange-200 dark:hover:from-coralY/40 dark:hover:to-orange-400/40 border border-orange-300 dark:border-coralY/20 hover:border-orange-400 dark:hover:border-coralY/50 rounded-full transition-all duration-300'
              >
                <img src={icon.src} alt={icon.alt} width={20} height={20} className="dark:brightness-200" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Center - Contact Us Form */}
        <div className='flex-1 flex justify-center'>
          <div className='w-full max-w-md'>
          <h4 className='font-montserrat text-4xl leading-normal font-bold mb-6 text-gray-900 dark:text-white text-center transition-colors duration-300'>
              Let’s Work
              <br />
            <span className='block'>Together</span>
        </h4>

            <div className='mb-4'>
              <label className='block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2 transition-colors duration-300'>
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coralY/30 dark:focus:ring-gray-500 transition-colors duration-300 sm:w-full md:w-96 lg:w-full"
                placeholder="Your Name"
                required
              />

            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2 transition-colors duration-300'>
                Email
              </label>
              <input
                type='email'
                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coralY/30 dark:focus:ring-gray-500 transition-colors duration-300'
                placeholder='Your Email'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2 transition-colors duration-300'>
                Message
              </label>
              <textarea
                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coralY/30 dark:focus:ring-gray-500 transition-colors duration-300'
                placeholder='Your Message'
                rows='4'
                required
              ></textarea>
            </div>
            <button className='w-full py-2 bg-coralY dark:bg-coralY text-secondary dark:text-black rounded-md hover:bg-orange-500 dark:hover:bg-orange-400 transition-colors duration-300 font-semibold'>
              Send Message
            </button>
          </div>
        </div>

        {/* Right Side - Get in Touch */}
        <motion.div variants={itemVariants} className='flex-1 flex justify-end'>
          <div className='w-full max-w-md space-y-6'>
            <div>
              <h4 className='font-clash-display font-bold text-2xl mb-4 text-gray-900 dark:text-white transition-colors duration-300'>
                Get in <span className='text-gradient'>Touch</span>
              </h4>
              <div className='space-y-4'>
                <div>
                  <p className='text-xs font-poppins text-coralY tracking-widest mb-2'>EMAIL</p>
                  <a href='mailto:joshumbay5@gmail.com' className='text-gray-900 dark:text-white hover:text-coralY transition-colors duration-300'>
                    joshumbay5@gmail.com
                  </a>
                </div>
                <div>
                  <p className='text-xs font-poppins text-coralY tracking-widest mb-2'>PHONE</p>
                  <a href='tel:+639093575240' className='text-gray-900 dark:text-white hover:text-coralY transition-colors duration-300'>
                    +63 909 357 5240
                  </a>
                </div>
                <div>
                  <p className='text-xs font-poppins text-coralY tracking-widest mb-2'>LOCATION</p>
                  <p className='text-gray-900 dark:text-white transition-colors duration-300'>Philippines</p>
                </div>
              </div>
            </div>

            <div className='w-full h-64 rounded-xl overflow-hidden border border-gray-300 dark:border-white/10 transition-colors duration-300'>
              <iframe
                title='Google Maps Location'
                className='w-full h-full border-none'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.425940472202!2d121.1503651971476!3d14.74854359222731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x342e5a8c8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2sMetro%20Manila!5e0!3m2!1sen!2sph!4v1234567890'
                width='100%'
                height='100%'
                style={{ border: '0' }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* Footer Bottom Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className='flex justify-between text-gray-600 dark:text-slate-gray mt-20 pt-8 border-t border-gray-300 dark:border-white/10 max-sm:flex-col max-sm:items-center max-sm:text-center gap-4 transition-colors duration-300'
      >
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat text-sm'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={16}
            height={16}
            className='m-0 dark:filter dark:brightness-200'
          />
          <p>Copyright © 2025 Joshua Meredores. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Contact;
