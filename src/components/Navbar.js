import twitter from '../assets/images/twetter.png'
import git from '../assets/images/git.svg'
import linkedin from '../assets/images/Vector.png'
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
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
        <a href="http://" target="_blank" rel="noopener noreferrer"> <img src={linkedin} alt="" /></a>
               
        
       
      </div>
    </nav>
  );
};

export default Navbar;
