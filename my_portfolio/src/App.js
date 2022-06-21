import logo from "./logo.svg";
import "./App.css";

// import components
import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import My_Work from "./Components/My_Work/My_Work";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <My_Work />
      <Footer />
    </div>
  );
}

export default App;
