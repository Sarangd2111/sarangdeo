import React from "react";
import Border from "../components/Border";
import Navbar from "../components/Navbar";
import "../stylesheets/contact.css";
import "../stylesheets/animation.css";
import { Link } from "react-router-dom";
import { Contacts } from "../utils/utils";

function toggleAboutLight() {
  let contacts = document.querySelectorAll(".social-media");
  contacts.forEach((contact) => {
    contact.classList.toggle("lightEffect1");
  });
}

const Contact = () => {
  return (
    <>
      <Border />
      <Navbar />
      <div className="contactpage">
        <div className="contact">
          <div className="contact-heading" data-aos="fade-down">
            <span onClick={toggleAboutLight}>Get In Touch!</span>
          </div>
          <div className="contacts">
            {Contacts.map((social) => {
              return (
                <div className="social-media" data-aos="fade-up" data-aos-delay="300">
                  <Link to={social.link} target="_blank">
                    <img
                      src={social.source}
                      alt=""
                      className="social-media-img"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
