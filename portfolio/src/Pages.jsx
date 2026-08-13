import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Project from './Project';
import Footer from './Footer';
import Cursor from './Cursor';
export default function Pages() {
    return (<>
    <Cursor />
   <Navbar />
    <Hero />
    <About />
    <Education /> 
    <Project />
    <Footer />
    </>)
}