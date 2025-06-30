import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { useState, useEffect } from "react";
import "../src/styles/lineicons.css";
import "../src/styles/global.css";
import "../src/styles/landing.css";
import Landing from "./components/landing/Landing";
import CreateProfile from "./components/Profile Builder/CreateProfile";
import { AppProvider } from "./Context/AppContext";
import useApp from './Context/AppContext'

const CreateProfileWithPopup = () => {

  const { state } = useApp()
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    if (isMobile) {
      setShowPopup(true);
    }
  }, [isMobile]);

  const handleProceed = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <>
          <div className={state.theme === 'light' ? 'light' : ''}>
            <div className="container-fluid popup-content d-flex justify-content-center align-items-center">
              <div className="content text-center">
                <div className="warning-icon">
                  <i className="lni lni-warning"></i>
                </div>
                <h2 className="title">Better Experience on Desktop!</h2>
                <p className="message">This app is optimized for use on a Desktop. For the best experience, we recommend switching to Laptop or Desktop.</p>
                {/* <p className="message"></p> */}
                <button className="ok-button" onClick={handleProceed}>Continue on Mobile -&gt;</button>
              </div>
            </div>
          </div>
        </>
      )}
      {!showPopup && <CreateProfile />}
    </>
  );
};


function App() {
  return (
    <div>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="create-profile" element={<CreateProfileWithPopup />} >
            </Route>
          </Routes>
        </Router>
      </AppProvider>
      <Analytics />
    </div>
  );
}

export default App;
