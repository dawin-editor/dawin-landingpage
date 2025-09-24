import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Install from "./pages/Install";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <NavBar isHome={false} />
      <Install />
      <Footer />
    </div>
  );
};

export default App;
