import React, { useState } from "react"
import chevron from "../assets/images/chevron.svg";
import  "../sass/Collapse.scss";


const Collaspe = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
      }

    return (
        <div>
              <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img
          src={chevron}
          alt="Chevron"
          className={`chevron ${isOpen ? "down" : "up"}`}
        />
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        <div className="content-wrapper">{children}</div>
      </div>
    </div>  
        </div>
    );
};


export default Collaspe;