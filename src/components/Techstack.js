import "../components/Techstack.css";
import html from "../assets/images/html.svg";
import react from "../assets/images/react.png";
import css from "../assets/images/css.svg";
import js from "../assets/images/js.svg";
import redux from "../assets/images/redux.png";
import github from "../assets/images/github.svg";
import vscode from "../assets/images/vscode.svg";
import bootstrap from "../assets/images/bootstrap.svg";
import tailwind from "../assets/images/tailwind.png";
import sass from "../assets/images/sass.png";
import git from "../assets/images/git.png";
import postman from "../assets/images/postman.png";

const Techstack = () => {
  return (
    <div className="Stack ">
      <h2>My Tech Stack</h2>
      <h4> Technologies I’ve been working with recently</h4>
      <div className="stacktech">
        <div className="frameworks one">
          <img src={html} alt="" srcset="" />
          <img src={css} alt="" srcset="" />
          <img src={js} alt="" srcset="" />
          <img src={react} alt="" srcset="" />
          <img src={redux} alt="" srcset="" />
          <img src={bootstrap} alt="" srcset="" />
        </div>
        <div className="frameworks two">
          <img  class="tail" src={tailwind} alt="" srcset="" />
          <img class="sass" src={sass} alt="" srcset="" />
          <img src={git} alt="" srcset="" />
          <img src={postman} alt="" srcset="" />
          <img src={vscode} alt="" srcset="" />
          <img src={github} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Techstack;
