import About from "./components/About";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font-serif text-very-dark-blue">
      <div id="top">
        <Navbar />
      </div>

      <div className="flex flex-col gap-40 px-5 lg:px-20">
        <Bio />
        <About />
        <Skills />
        {/* Here, do the "Work" section */}
        <Contact />
      </div>

      <div className="text-center py-20">
        <a href="#top">Back to top</a>
      </div>
    </div>
  );
}

export default App;
