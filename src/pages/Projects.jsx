import React from "react";
import Border from "../components/Border";
import Navbar from "../components/Navbar";
import "../stylesheets/project.css";
import { Projects } from "../utils/utils";
import Card from "../components/Card";

const Project = () => {
  return (
    <>
      <Border />
      <div className="projectspage">
        <Navbar />
        <div className="project-heading" data-aos="fade-down">
          <span>Projects That I've Done!</span>
        </div>
        <div className="projects">
          {Projects.map((project) => {
            return (
              <div className="project" data-aos="fade-up">
                <Card project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
