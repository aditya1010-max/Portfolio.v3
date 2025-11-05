import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
// import About from "./sections/About";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Blogs from "./sections/Blogs";
import Contact from "./sections/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Projects />
      <Education />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
