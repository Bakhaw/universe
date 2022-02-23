import About from "./components/About";
import Bio from "./components/Bio";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font-serif text-very-dark-blue">
      <Navbar />

      <div className="flex flex-col gap-40 px-5 lg:px-20">
        <Bio />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
