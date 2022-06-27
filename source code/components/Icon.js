import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
import circle from "../images/circle.png"
import cross from "../images/cross.png"

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <img src={circle} height={80}/>;
    case "cross":
      return <img src={cross} height={80}/>;
    default:
      return <FaPen className="icons" />;
  }
};

export default Icon;
