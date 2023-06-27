import Hero from '../sections/headingPages/Hero';
import Specials from '../sections/headingPages/Specials';
import Testimonials from '../sections/headingPages/Testimonials';
import About from '../sections/headingPages/About';

export default function Homepage() {
    return (
        <>
          <Hero />
          <main>
            <Specials />
            <Testimonials />
            <About />
          </main>
        </>
    );
}