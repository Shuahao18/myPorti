import { Nav } from "./components";
import {
  Project,
  Contact,
  Hero,
  About,
  Skills,
  Service,
  
} from "./sections";

const App = () => {
  return (
    <main className='relative '>
      <Nav />
      <section className='xl:padding-2 bg-primary '>
        <Hero />
      </section>
      <section className='padding '>
        <About />
      </section>
      <section className='bg-secondary padding'>
        <Service />
      </section>
      <section className='padding bg-primary'>
        <Skills />
      </section>
      <section className='bg-pale-blue padding'>
        <Project />
      </section>
   
      <section className=' bg-black padding-x padding-t pb-8'>
        <Contact />
      </section>
    </main>
  );
};

export default App;
