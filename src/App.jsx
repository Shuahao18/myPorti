import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  About,
  // Services,
  Service,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-2 '>
        <Hero />
      </section>
      <section className='padding'>
        <About />
      </section>
      <section className='padding'>
        <Service />
      </section>
      <section className='padding'>
        <SuperQuality />
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
