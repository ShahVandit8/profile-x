import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/landing/Navbar";

// import "../src/styles/animate.css";
// import "../src/styles/lineicons.css";
import "../src/styles/global.css";
import "../src/styles/landing.css";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import About from "./components/landing/About";
import Footer from "./components/landing/Footer";
import Landing from "./components/landing/Landing";
import CreateProfile from "./components/Profile Builder/CreateProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/create-profile" exact element={<CreateProfile />} />
      </Routes>
  </Router>
  );
}

export default App;
