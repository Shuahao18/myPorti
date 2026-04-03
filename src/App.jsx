import { Nav } from "./components";
import {
  Project,
  Contact,
  Hero,
  Skills,
  Service,
} from "./sections";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <main className='relative bg-white dark:bg-primary transition-colors duration-300'>
        <Nav />
        <section className='xl:padding-2 bg-white dark:bg-primary'>
          <Hero />
        </section>
        <section className='bg-white dark:bg-gradient-to-b dark:from-secondary dark:to-primary padding'>
          <Service />
        </section>
        <section className='padding bg-gray-50 dark:bg-primary'>
          <Skills />
        </section>
        <section className='bg-white dark:bg-gradient-to-b dark:from-primary dark:to-secondary padding'>
          <Project />
        </section>
        <section className='bg-primary padding-x padding-t pb-8'>
          <Contact />
        </section>
      </main>
    </ThemeProvider>
  );
};

export default App;
