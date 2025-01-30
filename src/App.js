import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import "../src/styles/lineicons.css";
import "../src/styles/global.css";
import "../src/styles/landing.css";
import Landing from "./components/landing/Landing";
import CreateProfile from "./components/Profile Builder/CreateProfile";
import { AppProvider } from "./Context/AppContext";
import useApp from './Context/AppContext'
import { isMobileDevice } from "./utils/isMobile";

const CreateProfileWithPopup = () => {

  const { state } = useApp()
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (isMobileDevice()) {
      setShowPopup(true);
    }
  }, []);

  const handleProceed = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className={state.theme==='dark'?'popup-overlay':'popup-overlay-light'}>
          <div className={state.theme==='dark'?'popup-popup':'popup-popup-light'}>
              <span className="popup-span">Profile<i className="popup-i">X</i></span>
              <hr/>
            <h4>Better Experience on Laptop/PC</h4>
            <p className={state.theme==='dark'?'popup-ptag':'popup-ptag-light'}>
              This app is optimized for use on a laptop or PC. For the best
              experience, we recommend switching to one of those devices.
            </p>
            <button className="popup-button" onClick={handleProceed}>
              Continue on Mobile
            </button>
          </div>
        </div>
      )}
      {!showPopup && <CreateProfile />}
    </>
  );
};


function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="create-profile" element={<CreateProfileWithPopup />} >
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
