import React from "react";
import Button from "./Button";
import "../stylesheets/card.css";

const Card = ({ project }) => {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="card-front">
          <figure>
            <span className="design design--1"></span>
            <span className="design design--7"></span>
            <div className="card-face">
              <div className="card-head">
                <figcaption>{project.head}</figcaption>
              </div>
              <div className="proj-dets">
                <span>Description : {project.desp}</span>
                <br />
                <span>Tech Stack : {project.stack}</span>
              </div>
            </div>
          </figure>
        </div>
        <div className="card-back">
          <Button name={"Github"} link={project.link} />

          <div className="design-container">
            <span className="design design--1"></span>
            <span className="design design--2"></span>
            <span className="design design--3"></span>
            <span className="design design--4"></span>
            <span className="design design--5"></span>
            <span className="design design--6"></span>
            <span className="design design--7"></span>
            <span className="design design--8"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
