import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer
    id="contact-us" 
    className='w-full py-16 px-10 bg-black'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        {/* Left Side - Logo & Social Media */}
        <div className='flex flex-col items-start flex-1'>
         <h1 className="text-white text-4xl">Nagi</h1>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>

            I'm Joshua, a passionate web developer creating responsive websites and building
             applications with innovative designs. I'm a starter developer with savvy skills 
             in front-end web development, ensuring satisfactory projects for clients.
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        {/* Center - Contact Us Form */}
        <div className='flex-1 flex justify-center'>
          <div className='w-full max-w-md'>
          <h4 className='font-montserrat text-4xl leading-normal font-bold mb-6 text-white text-center'>
              Let’s Work
              <br />
            <span className='block'>Together</span>
        </h4>

            <div className='mb-4'>
              <label className='block text-gray-300 text-sm font-medium mb-2'>
                Name
              </label>
              <input
                type='text'
                className='w-full px-4 py-2 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-500'
                placeholder='Your Name'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-300 text-sm font-medium mb-2'>
                Email
              </label>
              <input
                type='email'
                className='w-full px-4 py-2 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-500'
                placeholder='Your Email'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-300 text-sm font-medium mb-2'>
                Message
              </label>
              <textarea
                className='w-full px-4 py-2 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-500'
                placeholder='Your Message'
                rows='4'
                required
              ></textarea>
            </div>
            <button className='w-full py-2 bg-coralY text-secondary rounded-md hover:bg-gray-600 transition'>
              Send Message
            </button>
          </div>
        </div>

        {/* Right Side - Get in Touch */}
        <div className='flex-1 flex justify-end'>
          <div className='w-full max-w-md'>
            <h4 className='font-humane font-extrabold text-2xl leading-normal  mb-6 text-white text-left'>
              Get in Touch
            </h4>
         
            <div className='w-full h-64 rounded-lg overflow-hidden'>
            <iframe
    title='Google Maps Location'
    className='w-full h-full border-none'
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.425940472202!2d121.1503651971476!3d14.74854359222731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x123456789abcdef%3A0xabcdef123456789!2sYour%20Location!5e0!3m2!1sen!2sph!4vXXXXXXXXXX'
    width='100%'
    height='100%'
    style={{ border: '0' }}
    allowFullScreen=''
    loading='lazy'
    referrerPolicy='no-referrer-when-downgrade'
  ></iframe>

  
    </div>

          </div>
        </div>


      </div>

      {/* Footer Bottom Section */}
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
