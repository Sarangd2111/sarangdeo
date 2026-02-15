import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Skills from "./pages/Skills";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { Themes } from "./utils/utils";

function App() {
  const [showThemePopup, setShowThemePopup] = useState(false);
  const [themePopupWidht, setThemePopupWidth] = useState(0);
  const themePopupRef = useRef(50);
  const [currentTheme, setCurrentTheme] = useState("cyan");
  const [previewTheme, setPreviewTheme] = useState("cyan");

  const toggleThemePopup = () => {
    setShowThemePopup(!showThemePopup);
  };

  useEffect(() => {
    AOS.init();
    if (themePopupRef.current) {
      setTimeout(() => {
        if (themePopupRef.current) {
          setThemePopupWidth(themePopupRef.current.offsetWidth);
        }
      }, 100);
    }
  }, [showThemePopup]);

  useEffect(() => {
    const applied = Themes.find(
      (t) => t.themeName.toLowerCase() === currentTheme,
    );

    setPreviewTheme(applied);
  }, [showThemePopup]);

  return (
    <div className="App" site-theme={currentTheme}>
      <Routes>
        <Route path="/sarangdeo/" element={<Home />} />
        <Route path="/sarangdeo/about" element={<About />} />
        <Route path="/sarangdeo/skills" element={<Skills />} />
        <Route path="/sarangdeo/projects" element={<Project />} />
        <Route path="/sarangdeo/contact" element={<Contact />} />
      </Routes>
      {showThemePopup && (
        <div
          ref={themePopupRef}
          className={`theme-popup ${showThemePopup ? "slidein" : "slideout"}`}
        >
          <div className="theme-list">
            {Themes.map((theme) => (
              <div
                key={theme.themeName}
                className={`theme-color ${
                  currentTheme === theme.themeName.toLowerCase()
                    ? "active-theme"
                    : ""
                }`}
                style={{ backgroundColor: theme.color }}
                onClick={() => {
                  setPreviewTheme(theme);
                }}
              />
            ))}
          </div>
          <div className="popupRightPart">
            <div className="theme-preview">
              <img src={previewTheme?.image} alt={previewTheme?.themeName} />
            </div>
            <button
              className="button"
              onClick={() => {
                setCurrentTheme(previewTheme?.themeName.toLowerCase());

                localStorage.setItem(
                  "site-theme",
                  previewTheme?.themeName.toLowerCase(),
                );
                setShowThemePopup(false);
              }}
              disabled={previewTheme?.themeName.toLowerCase() === currentTheme}
            >
              Apply
            </button>
          </div>
        </div>
      )}
      <button
        className={
          showThemePopup ? "theme-popup-button-top" : "theme-popup-button"
        }
        onClick={toggleThemePopup}
        style={{ right: showThemePopup ? `${themePopupWidht - 25}px` : "0px" }}
      >
        {showThemePopup ? "⏏" : "⏏"}
      </button>
    </div>
  );
}

export default App;
