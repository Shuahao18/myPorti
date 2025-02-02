import { me } from "../assets/images";

const About = () => {
  return (
    <section 
      id="about-us"
      className="relative flex max-xl:flex-col-reverse gap-10 max-container scroll-mt-20 pt-20 pb-20 z-0">
      
      {/* Left Section (Text) */}
      <div className="flex-1 flex flex-col justify-start z-10">
        <h1 className="font-palanquin capitalize text-8xl max-sm:text-[40px] font-bold">
          Hel<span className="text-coral-yellow">lo!</span>
        </h1>

        {/* Large "ABOUT ME" Text (Fixed for Small Screens) */}
        <div className="absolute max-sm:relative flex justify-center items-center -z-10">
          <h1 className="font-palanquin text-[290px] max-sm:text-[80px] font-bold text-lightGray opacity-10 pointer-events-none leading-none">
            ABOUT ME
          </h1>
        </div>

        {/* Main Description */}
        <div className="space-y-6 mt-10">
          <p className="absolute max-sm:relative bottom-24 max-sm:bottom-0 lg:max-w-lg info-text text-center sm:text-left">
            I'm Joshua, a passionate web developer creating responsive websites
            and building applications with innovative designs. I'm a starter
            developer with savvy skills in front-end web development, ensuring
            satisfactory projects for clients.
          </p>
          <p className="absolute max-sm:relative top-80 max-sm:top-0 mt-10 lg:max-w-lg info-text text-center sm:text-left">
            Our dedication to detail and excellence ensures your satisfaction.
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
          className="max-w-full object-contain max-sm:h-[300px] max-sm:relative max-sm:left-24"
        />

        {/* Rotated Facebook Link (Fixed for Small Screens) */}
        <p
          className="absolute -right-40 bottom-40 max-sm:relative max-sm:right-0 max-sm:bottom-0 max-sm:mt-4 lg:max-w-lg info-text text-center"
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



// import { me } from "../assets/images";

// const About = () => {
//   return (
//     <section 
//       id="about-us"
//       className="relative flex max-xl:flex-col-reverse gap-10 max-container scroll-mt-20 pt-20 pb-20 z-0"
//     >
//       <div className="flex-1 flex flex-col justify-start z-10 relative">
//         <h1 className="font-palanquin capitalize max-sm:text-[50px] text-8xl font-bold">
//           Hel<span className="text-coral-yellow">lo!</span>
//         </h1>

//         <div className="absolute justify-center items-center w-full -z-10 leading-none">
//           <h1 className="font-palanquin text-[290px] max-sm:text-[60px] font-bold text-lightGray opacity-10 pointer-events-none leading-none">
//             ABOUT ME
//           </h1>
//         </div>

//         {/* Main Description */}
//         <div className="space-y-6 mt-10 relative">
//           <p className="absolute bottom-24 lg:max-w-lg info-text max-sm:static leading-none">
//             I'm Joshua, a passionate web developer creating responsive websites
//             and building applications with innovative designs. I'm a starter
//             developer with savvy skills in front-end web development, ensuring
//             satisfactory projects for clients.
//           </p>
//           <p className="absolute top-80 mt-10 lg:max-w-lg info-text max-sm:static leading-none">
//             Our dedication to detail and excellence ensures your satisfaction.
//           </p>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="relative flex-1 flex justify-center items-center z-10">
//         <img
//           src={me}
//           alt="About Me"
//           width={500}
//           height={400}
//           className="max-w-full object-contain max-sm:h-80"
//         />
//         <p
//           className="absolute -right-40 bottom-40 lg:max-w-lg info-text max-sm:-right-10 max-sm:bottom-10 "
//           style={{
//             transform: "rotate(-90deg)", 
//             whiteSpace: "nowrap",      
//           }}
//         >
//           www.facebook.com/Shua.meredores.16  
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;
