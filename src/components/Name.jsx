import React from "react";
import { nameLetters } from "../utils/utils";
import "../stylesheets/name.css";
import Button from "./Button";
const Name = () => {
  return (
    <>
      <div className="content">
        <div className="name" data-aos="zoom-out">
          {nameLetters.map((letter) => {
            return <span className="letter">{letter.letter}</span>;
          })}
        </div>
        <div className="details">
          <span className="attribute" data-aos="fade-up" data-aos-delay="800">Comp Engg</span>
          <hr  data-aos="zoom-out" data-aos-delay="400"/>
          <span className="attribute" data-aos="fade-up" data-aos-delay="900">Soft Dev</span>
          <hr data-aos="zoom-out" data-aos-delay="400"/>
          <span className="attribute" data-aos="fade-up" data-aos-delay="1000">Pianist</span>
        </div>
        <div className="buttons" data-aos="zoom-out" data-aos-delay="1200">
          <Button name="Resume" link="https://drive.google.com/file/d/1VSUysdDYQvHAmZx8j-2CT5MioF3H0JA-/view?usp=sharing"/>
          <Button name="Mail Me" link="mailto:sarangdeo2001@gmail.com" />
        </div>
      </div>
    </>
  );
};

export default Name;
