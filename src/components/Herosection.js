import '../components/Herosection.css'
import bg from '../assets/images/bg.png'
import avater from '../assets/images/avater.png'

const Herosection = () => {
    return ( 
        <div className="Hero container">
<div className="hero bg">
    <img src={bg} alt=""  />
</div>

<div className="hero avater">
    <img src={avater} alt="" srcset="" />
</div>

        </div>
     );
}
 
export default Herosection;