import React, { useState } from "react"
import chevron from "../assets/images/chevron.svg";
import  "../sass/collapse.scss";


const Collaspe = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
      }

    return (
      <div className= {`collapse-container ${isOpen ? 'open' : ''}`}>
      <div className={"collapse-title"}>
          <h3>{title}</h3>
          <img 
          onClick={toggleCollapse}
          src= {chevron} 
          alt="chevron" 
          className={`chevron ${isOpen ? "open" : ""}`}
          />
      </div>
      <div className="collapse-content">
          <ul>{children}</ul>
      </div>
  </div>
);
};


export default Collaspe;