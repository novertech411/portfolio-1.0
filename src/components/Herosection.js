import "../components/Herosection.css";
import bg from "../assets/images/bg.png";
import avater from "../assets/images/avater.png";

const Herosection = () => {
  return (
    <div className="Hero container">
      <div className="hero bg">
        <h2>
          Hi 👋, <br></br> My name is <br></br> <strong>Pavan MG</strong> <br></br>{" "}
          I build things for web{" "}
        </h2>
      </div>

      <div className="hero avater">
        <img src={avater} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Herosection;
