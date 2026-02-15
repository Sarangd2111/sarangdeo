import React from "react";
import Border from "../components/Border";
import Navbar from "../components/Navbar";
import { Experience, Education, Hobbies } from "../utils/utils";
import List from "../components/List";
import "../stylesheets/about.css";
import "../stylesheets/animation.css";

function toggleAboutLight() {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.classList.toggle("lightEffect");
  });
}

var experienceList = [];
var educationList = [];
Experience.map((element) => {
  experienceList.push(element);
});
Education.map((element) => {
  educationList.push(element);
});

const About = () => {
  return (
    <>
      <Border />
      <Navbar />
      <div className="aboutpage">
        <div className="about-heading" data-aos="fade-down">
          <span onClick={toggleAboutLight}>About Me!</span>
        </div>
        <div className="boxes">
          <div className="box" data-aos="fade-right">
            <div className="box-heading">Experience</div>
            <div className="box-body">
              <List headList={experienceList} />
            </div>
          </div>
          <div className="box" data-aos="fade-up">
            <div className="box-heading">Education</div>
            <div className="box-body">
              <List headList={educationList} />
            </div>
          </div>
          <div className="box" data-aos="fade-left">
            <div className="box-heading">Hobbies</div>
            <div className="box-body">
              <div className="rb-container">
                <ul className="rb hobby-list">
                  {Hobbies.map((hobby) => {
                    return (
                      <li className="rb-item">
                        <div className="timestamp">{hobby.hobby}</div>
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

export default About;
