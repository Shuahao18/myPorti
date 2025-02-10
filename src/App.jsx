import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  About,
  Skills,
  Service,
  Subscribe,
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-2 '>
        <Hero />
      </section>
      <section className='padding bg-slate-200'>
        <About />
      </section>
      <section className='bg-pale-blue padding'>
        <Service />
      </section>
      <section className='padding'>
        <Skills />
      </section>
      {/* <section className='padding-x py-10'>
        <Services />
      </section> */}
    
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
