import twitter from '../assets/images/twetter.png'
import git from '../assets/images/git.svg'
import linkedin from '../assets/images/Vector.png'
import "../components/Footer.css";
import { FaMoon, FaSun } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer head">
      <div className="footer first">
        <div className=" logo name">
          <h3>
            <strong>{"{ 700 }"}</strong> <br /> pavanmg{" "}
          </h3>
        </div>

        <div className="footer contactlink">
        
          <div className="phone"><p>+234704459047</p></div>
          <div className="mail"> <p>info@novertech4@gmail.com</p> </div>
          <div className="follow">
          <a href="http://" target="_blank" rel="noopener noreferrer"> <img src={twitter} alt="" /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><img src={git} alt="" /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> <img src={linkedin} alt="" /></a>
           
          </div>
        </div>
      </div>
      <div className="footer nav">
        <div className='navo'>

          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Technologies</a>
          </li>
          <li>
            <a href="/">Project</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        
        </div>

        <div className="copyright"><p>Designed and built by <strong>Pavan MG</strong> with <strong>Love</strong> & <strong>Coffee</strong></p></div>
      </div>
      <div className="king"></div>
    </div>
    
  );
};

export default Footer;