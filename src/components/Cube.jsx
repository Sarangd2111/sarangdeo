import React from "react";
import "../stylesheets/cube.css";
import { useRef, useState, useEffect } from "react";

const Cube = () => {
 const cubeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const rotation = useRef({
    x: -20,
    y: 20,
  });

  const handleMouseDown = (e) => {
    // ONLY LEFT CLICK
    if (e.button !== 0) return;

    setIsDragging(true);
    cubeRef.current.classList.add("paused");
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    rotation.current.y += e.movementX * 0.5;
    rotation.current.x -= e.movementY * 0.5;

    cubeRef.current.style.transform = `
      rotateX(${rotation.current.x}deg)
      rotateY(${rotation.current.y}deg)
    `;
  };
  

  useEffect(() => {
    const handleMouseUp = (e) => {
      // ONLY LEFT RELEASE
      if (e.button !== 0) return;

      setIsDragging(false);

      if (cubeRef.current) {
        cubeRef.current.classList.remove("paused");
        cubeRef.current.style.transform = "";
      }
    };

    // GLOBAL listener (important)
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);


  return (
    <div
      className="container1"
      data-aos="zoom-out"
      data-aos-delay="1400"
      onMouseMove={handleMouseMove}
    >
      <div className="cube" ref={cubeRef} onMouseDown={handleMouseDown}>
        <div className="face topface">
          <img src={require("../images/c++.png")} className="logo" alt="c++" />
        </div>
        <div className="face bottomface">
          <img
            src={require("../images/git.png")}
            className="logo"
            alt="Git"
          />
        </div>
        <div className="face leftface">
          <img src={require("../images/js.png")} className="logo" alt="js" />
        </div>
        <div className="face rightface">
          <img
            src={require("../images/java.png")}
            className="logo"
            alt="java"
          />
        </div>
        <div className="face frontface">
          <img
            src={require("../images/python.png")}
            className="logo"
            alt="python"
          />
        </div>
        <div className="face backface">
          <img
            src={require("../images/mongodb.png")}
            className="logo"
            alt="mongo"
          />
        </div>
      </div>
    </div>
  );
};

export default Cube;
