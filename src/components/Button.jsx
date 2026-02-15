import React from "react";
import "../stylesheets/button.css";
import { Link } from "react-router-dom";

const Button = ({ name, link, }) => {
  return (
    <Link to={link} target="_blank">
      <button className = "button">{name}</button>
    </Link>
  );
};

export default Button;
