import "../components/Navbar.css";
import "./../App";
import twitter from "../assets/images/twetter.png";
import git from "../assets/images/git.svg";
import linkedin from "../assets/images/Vector.png";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ myTheme, onToggleTheme, onSwitch }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar" data-theme={myTheme}>
      <div className="logo">
        <h3>
          <strong>{"{ 007 }"}</strong> <br /> pavanmg
        </h3>
      </div>

      <div
        className={"links"}
        style={{
          width: open ? "100%" : "0",
        }}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Tech Stack</a>
        </li>
        <li>
          <a href="/">Project</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </div>

      <div className="contact"     style={{
          width: open ? "100%" : "0",
          opacity: open ? "1" : "0" ,
        
        }}>

          <li><a href="http://" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={twitter} alt="" />
        </a></li>
          <li> <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src={git} alt="" />
        </a></li>
          <li>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="" />
        </a></li>
        
       
      </div>

      <div className="button">
        <span className="toggle-btn" onClick={onToggleTheme}>
          <FaMoon color="pink" size={16} />
          <FaSun color="yellow" size={16} />
          <div className={onSwitch ? "ball move" : "ball"}></div>
        </span>
      </div>
      <div className="buger" open={open} onClick={() => setOpen(!open)}>
        <div
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0)",
          }}
        />
        <div
          style={{
            opacity: open ? "0" : "1",
          }}
        />
        <div
          style={{
            transform: open ? "rotate(-45deg)" : "rotate(0)",
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
