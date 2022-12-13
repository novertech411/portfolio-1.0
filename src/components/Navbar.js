import '../components/Navbar.css'
import './../App'
import twitter from '../assets/images/twetter.png'
import git from '../assets/images/git.svg'
import linkedin from '../assets/images/Vector.png'
import { FaMoon, FaSun } from "react-icons/fa";


const Navbar = ({ myTheme, onToggleTheme, onSwitch }) => {
  return (
    <nav className="navbar"   data-theme={myTheme} >
      <div className="logo">
        <h3>
          
          <strong>{"{ 007 }"}</strong> <br /> pavanmg
        </h3>
      </div>

      <div className="links">
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
        </li><li>
        
          <a href="/">Contact</a>
        </li>
      </div>
      <div className="contact">
        <a href="http://" target="_blank" rel="noopener noreferrer"> <img src={twitter} alt="" /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><img src={git} alt="" /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
               
        
       
      </div>

      <div onClick={onToggleTheme}>
          <span className="toggle-btn">
            <FaMoon color="pink" size={16} />
            <FaSun color="yellow" size={16} />
            <div className={onSwitch ? "ball move" : "ball"}></div>
          </span>
        </div>
    </nav>
  );
};

export default Navbar;
