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
import Main from "./components/Profile Builder/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="create-profile" element={<CreateProfile />} >
          {/* <Route path="" element={<Main />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
