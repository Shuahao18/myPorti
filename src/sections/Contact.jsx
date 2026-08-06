import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={ref}
      id="contact-us"
      className="relative overflow-hidden w-full bg-[#f8f5ef] px-6 py-32 sm:px-10 lg:px-16"
    >
      <div className="section-bg-pattern absolute inset-0 pointer-events-none" />
      <div className="absolute inset-x-0 top-6 hidden md:block">
        <h1 className="mx-auto w-full text-center text-[clamp(180px,10vw,260px)] font-black uppercase tracking-[0.35em] text-[#111111] opacity-10">
          CONTACT
        </h1>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-container mx-auto grid gap-16 xl:grid-cols-[1.05fr_0.95fr] items-center relative"
      >
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#b98c2f] font-semibold">
            <span className="w-9 h-9 rounded-full bg-[#f7e6c0]/80 border border-[#b98c2f]/20 flex items-center justify-center text-[10px] font-black text-[#b98c2f]">
              LET'S
            </span>
            Talk to me
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-[#111111] max-w-3xl">
            Build something bold together.
          </h2>

          <p className="max-w-2xl text-base sm:text-lg leading-8 text-[#555555]">
            I design smooth, modern web experiences and custom backend systems for growing teams. Share your idea and I’ll help turn it into a clean, premium product.
          </p>
        </div>

        <div className="relative z-10">
          <div className="absolute -top-10 -right-10 hidden lg:block">
            <div className="h-32 w-32 rounded-full bg-[#fddc8f]/20 blur-3xl" />
          </div>
          <div className="absolute -bottom-10 left-4 hidden lg:block">
            <div className="h-32 w-32 rounded-full bg-[#ffd88e]/20 blur-3xl" />
          </div>

          <form
            action="https://formsubmit.co/joshuemeredores@gmail.com"
            method="POST"
            className="relative overflow-hidden rounded-[48px] border border-[#f1c66f]/20 bg-white/95 p-10 shadow-[0_40px_120px_rgba(17,17,17,0.12)] backdrop-blur-sm sm:p-12 space-y-10"
          >
            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="absolute -top-8 right-8 hidden xl:block">
              <div className="h-16 w-16 rounded-full border border-[#f1c66f]/30 bg-[#f8e8c5]/70" />
            </div>

            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.35em] text-[#b98c2f] font-semibold mb-3">
                Contact Form
              </p>
              <h3 className="text-3xl font-bold text-[#111111] leading-tight">
                Let’s make your next project shine.
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <div className="mb-3 text-sm uppercase tracking-[0.35em] text-[#b98c2f] font-semibold">
                  Your Name
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full rounded-full border border-[#efe5dc] bg-[#fbf4eb] px-6 py-5 text-base text-[#111111] outline-none shadow-sm shadow-[#f7d99e]/40 transition focus:border-[#b98c2f] focus:ring-2 focus:ring-[#b98c2f]/15"
                />
              </label>

              <label className="block">
                <div className="mb-3 text-sm uppercase tracking-[0.35em] text-[#b98c2f] font-semibold">
                  Email Address
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  required
                  className="w-full rounded-full border border-[#efe5dc] bg-[#fbf4eb] px-6 py-5 text-base text-[#111111] outline-none shadow-sm shadow-[#f7d99e]/40 transition focus:border-[#b98c2f] focus:ring-2 focus:ring-[#b98c2f]/15"
                />
              </label>
            </div>

            <label className="block">
              <div className="mb-3 text-sm uppercase tracking-[0.35em] text-[#b98c2f] font-semibold">
                Message
              </div>
              <textarea
                rows="8"
                name="message"
                placeholder="Tell me about your project"
                required
                className="w-full rounded-[40px] border border-[#efe5dc] bg-[#fbf4eb] px-6 py-6 text-base text-[#111111] outline-none shadow-sm shadow-[#f7d99e]/40 transition focus:border-[#b98c2f] focus:ring-2 focus:ring-[#b98c2f]/15"
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-coralY via-orange-400 to-coralY px-12 py-5 text-base font-semibold text-white shadow-[0_18px_60px_rgba(255,166,1,0.25)] transition hover:shadow-[0_22px_80px_rgba(255,166,1,0.35)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
