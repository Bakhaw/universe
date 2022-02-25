import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";

import About from "./sections/About";
import Bio from "./sections/Bio";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Work from "./sections/Work";

import { StateProvider } from "./context";

function App() {
  return (
    <StateProvider>
      <div className="font-serif text-very-dark-blue">
        <div id="top">
          <Navbar />
        </div>

        <div className="flex flex-col justify-center items-center gap-10">
          <Bio />
          <About />
          <Skills />
          <Work />
          <Contact />
        </div>

        <BackToTop />
      </div>
    </StateProvider>
  );
}

export default App;
