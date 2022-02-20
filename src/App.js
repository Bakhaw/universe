import Bio from "./components/Bio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="universe font-serif text-very-dark-blue">
      <Navbar />

      <div className="px-20">
        <Bio />
      </div>
    </div>
  );
}

export default App;
