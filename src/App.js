import Bio from "./components/Bio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-serif text-very-dark-blue">
      <Navbar />

      <div className="px-5 lg:px-20">
        <Bio />
      </div>
    </div>
  );
}

export default App;
