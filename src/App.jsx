import CamSpecs from "./components/CamSpecs";
import ColorsPhone from "./components/ColorsPhone";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Intro />
      <Highlights />
      <CamSpecs />
      <ColorsPhone />
      <Footer />
    </div>
  );
}

export default App;
