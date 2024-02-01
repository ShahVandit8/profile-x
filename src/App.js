import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/landing/Navbar";

// import "../src/styles/animate.css";
// import "../src/styles/lineicons.css";
import "../src/styles/global.css";
import "../src/styles/landing.css";
import Hero from "./components/landing/Hero";

function App() {
  return (
    <Router>
    <Navbar />
    <Hero />
  </Router>
  );
}

export default App;
