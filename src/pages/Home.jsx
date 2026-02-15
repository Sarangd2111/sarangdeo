import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Name from "../components/Name";
import "../stylesheets/home.css";
import Cube from "../components/Cube";
import Border from "../components/Border";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupHeight, setPopupHeight] = useState(0);
  const popupRef = useRef(50);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    if (popupRef.current) {
      setTimeout(() => {
        if (popupRef.current) {
          setPopupHeight(popupRef.current.offsetHeight);
        }
      }, 100);
    }
  }, [showPopup]);

  return (
    <>
      <Border />
      <div className="homepage">
        <Navbar />
        <div className="body-parts">
          <div className="left">
            <Name />
          </div>
          <div className="right">
            <Cube />
          </div>
        </div>
      </div>
      {showPopup && (
        <div
          ref={popupRef}
          className={`popup ${showPopup ? "slide-in" : "slide-out"}`}
        >
          <div className="popup-inner">
            <div className="intro">
              <span>
                Hi There!!! <br /> I'm Sarang Deo. <br />
                Welcome to my portfolio.
              </span>
            </div>
            <img
              src={require("../images/sarang.png")}
              alt=""
              className="my-img"
            />
          </div>
        </div>
      )}

      <button
        className={showPopup ? "popup-button-top" : "popup-button"}
        onClick={togglePopup}
        style={{ bottom: showPopup ? `${popupHeight - 50}px` : "0px" }}
      >
        {showPopup ? "⏏" : "⏏"}
      </button>
    </>
  );
};

export default Home;
