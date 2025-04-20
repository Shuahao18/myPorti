import { me } from "../assets/images";

const About = () => {
  return (
    <section 
      id="about-us"
      className="w-full relative flex max-xl:flex-col-reverse gap-2 lg:gap-10 max-container scroll-mt-20 pt-20 pb-20 z-0 overflow-x: hidden;">
      
      {/* Left Section (Text) */}
      <div className="flex-1 flex flex-col justify-start z-10">
<h1
  className="
    font-humane capitalize lg:text-8xl 
    text-[30px] sm:top-16 lg:absolute lg:top-20
    md:absolute md:top-40 md:text-[60px] font-bold text-center
    max-sm:absolute max-sm:top-0 max-sm:left-10 max-sm:-translate-x-1/2 max-sm:z-20
  "
>
  Hel<span className="text-coral-yellow">lo!</span>
</h1>
 

        {/* Large "ABOUT ME" Text (Fixed for Small Screens) */}
        <div className="absolute max-sm:relative flex justify-center items-center -z-10 w-full">
  <h1 className="font-palanquin lg:text-[290px] text-8xl md:text-[200px] 
                 lg:bottom-4 bottom-36 md:bottom-32 absolute lg:relative 
                 font-bold text-lightGray opacity-10 pointer-events-none 
                 leading-none text-center md:left-1/2 md:-translate-x-1/2">
    ABOUT ME
  </h1>
</div>


        {/* Main Description */}
        <div className="space-y-6 mt-10 md:grid md:grid-cols-2 md:max-w-xl md:ml-0 md:mr-auto">
        <p className="info-text text-left sm:text-left text-2xl md:absolute md:bottom-14
               absolute 
               max-sm:top-10 max-sm:text-xs
               lg:bottom-20 lg:top-auto lg-text-4xl
               lg:max-w-lg md:max-w-sm">
    I'm Joshua, a passionate web developer creating responsive websites
    and building applications with innovative designs. I'm a starter
    developer with savvy skills in front-end web development, ensuring
    satisfactory projects for clients.
  </p>
  <p className="absolute top-80 max-sm:top-[420px] max-sm:right-[1px] mt-10 lg:max-w-lg md:max-w-sm info-text text-center sm:text-left max-sm:text-xs">
    Our dedication to detail <span className="hidden max-sm:inline"><br /></span>
    and excellence ensures<span className="hidden max-sm:inline"><br /></span> your satisfaction.
  </p>
</div>

      </div>

      {/* Right Section (Image & Facebook Link) */}
      <div className="relative flex-1 flex justify-center items-center z-10">
        <img
          src={me}  
          alt="About Me"
          width={500}
          height={400}
          className="max-w-full object-contain h-[500px] md:h-[600px] md:top-20 md:relative md:left-40 lg:h-[700px] relative bottom-30 max-sm:relative max-sm:left-24 max-sm:pt-10 "
        />

        {/* Rotated Facebook Link (Fixed for Small Screens) */}
        <p
          className="absolute -right-40 bottom-40 max-sm:relative max-sm:right-0 max-sm:bottom-0 max-sm:mt-4 lg:max-w-lg max-sm:text-sm info-text text-center"
          style={{
            transform: "rotate(-90deg)",
            whiteSpace: "nowrap",
          }}
        >
          <span className="sm:inline hidden">www.facebook.com/Shua.meredores.16</span>
          <span className="sm:hidden">www.facebook.com/Shua.meredores.16</span>
        </p>
      </div>
    </section>
  );
};

export default About;