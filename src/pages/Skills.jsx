import React from "react";
import Border from "../components/Border";
import Navbar from "../components/Navbar";
import "../stylesheets/skills.css";
import "../stylesheets/list.css";
import { TechSkills, CompSkills } from "../utils/utils";

function toggleAboutLight() {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.classList.toggle("lightEffect");
  });
}

const Skills = () => {
  return (
    <>
      <Border />
      <Navbar />
      <div className="skillspage">
        <div className="skills-heading" data-aos="fade-down">
          <span onClick={toggleAboutLight}>Skills</span>
        </div>
        <div className="skills">
          <div className="box tech-skills" data-aos="fade-right">
            {TechSkills.map((skill) => {
              return (
                <div className="skill">
                  <div className="skill-img">
                    <img src={skill.icon} alt="" className="skill-image" />
                  </div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              );
            })}
          </div>
          <div className="box comp-skills" data-aos="fade-left">
            <div className="box-body">
              <div className="rb-container">
                <ul className="rb hobby-list">
                  {CompSkills.map((skill) => {
                    return (
                      <li className="rb-item">
                        <div className="timestamp">{skill.skill}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
