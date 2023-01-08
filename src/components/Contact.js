import "../components/Contact.css";
import { BiMailSend } from "react-icons/bi";
import { BsTelephoneForward } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="story">
      <h2>Get in touch with me!</h2>

      <div className="contact data">
        <div className="contact biodata">
          <div className="box">

          
          <h4>
            Get in touch with me! Whether you want to learn about UX or need
            product design services let us help with your challenge.
          </h4>
          <div className="biodata info">
            <div className="mail address">
              <div>
                <BiMailSend />
              </div>
              <p>novertech4@gmail.com</p>
            </div>
            <div className="phone num">
              <div>
                <BsTelephoneForward />
              </div>
              <p> +234 704 545 9047 <br></br>  </p>
            </div>
          </div>
          </div>
        </div>
        <div className="contact form">
          <h3>Contact form</h3>
          <form action="">
            <div className="mynames">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="First name.."
              />{" "}
              <input
                type="text"
                id="lname"
                name="lasttname"
                placeholder="Phone number..."
              />
            </div>
            <input
              type="text"
              id="email"
              name="firstname"
              placeholder="Email address"
            />
            <div>
              <input
                type="text"
                id="subjest"
                name="subject"
                placeholder="Subject"
              />
            </div>

            <textarea name="" placeholder="Write something.."></textarea>
            <button  onClick={"clickme"}>submite</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
