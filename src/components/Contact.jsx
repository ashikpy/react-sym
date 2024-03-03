import "../styles/Contact.css";
import { FaExternalLinkAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact__container__main">
      <h1>
        <strong className="about__text text-5xl">Contact</strong>
      </h1>
      <div className="faculty__container">
        <p className="h1__child m-auto max-w-[24ch] text-2xl">
          Faculty Coordinator
        </p>
        <div className="contact__container">
          <p className="text-[1.2rem]">
            Dr. R. Selva Kumar
            <br /> <span className="des__text">AP / Chemistry</span>
          </p>
          <a className="phone__link" href="tel:+919443142775">
            +91 94431 42775
            <FaExternalLinkAlt className="link__svg" />
          </a>
        </div>
      </div>
      <div className="student__conatiner">
        <p className="h1__child m-auto max-w-[24ch] text-2xl">
          Students Coordinator
        </p>
        <div className="contact__container">
          <p className="text-[1.2rem]">
            Mr. V. S. Nantha Kumar
            <br />
            <span className="des__text">I B.Tech. AI & DS</span>
          </p>
          <a className="phone__link" href="tel:+917397745941">
            +91 73977 45941
            <FaExternalLinkAlt className="link__svg" />
          </a>
        </div>
        <div className="contact__container">
          <p className="text-[1.2rem]">
            Mr. G. J. Mithran
            <br />
            <span className="des__text">I B.E. CSE</span>
          </p>
          <a className="phone__link" href="tel:+918225427625">
            +91 82254 27625
            <FaExternalLinkAlt className="link__svg" />
          </a>
        </div>
      </div>
      <hr className="hr__each" />
    </div>
  );
}

export default Contact;
