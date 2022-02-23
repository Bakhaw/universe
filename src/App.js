import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";

import About from "./sections/About";
import Bio from "./sections/Bio";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Work from "./sections/Work";

function App() {
  return (
    <div className="font-serif text-very-dark-blue">
      <div id="top">
        <Navbar />
      </div>

      <div className="flex flex-col gap-40 px-0 lg:px-0">
        <Bio />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>

      <BackToTop />
    </div>
  );
}

export default App;
