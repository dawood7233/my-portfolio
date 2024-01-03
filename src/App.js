import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navBar";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Particles from "react-tsparticles";
import particles from "./utils.js/particles";
// import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadSlim(main);
  };
  const renderParticleOnlyInHome = location.pathname === "/";
  return (
    <div className="App">
      {renderParticleOnlyInHome && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      <Navbar />
      <div className="App__main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
