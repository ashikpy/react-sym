import "../styles/Contact.css";
import { FaExternalLinkAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="reveal container">
      <h1 className="mt-[1.75rem] flex justify-center">
        <strong className="about__text text-5xl">Contact</strong>
      </h1>
      <div className="contact__container__main">
        <div className="faculty__container reveal-4">
          <p className="h1__child m-auto max-w-[24ch] text-2xl md:text-[1.7rem]">
            Faculty Coordinator
          </p>
          <div className="contact__container grid__containers">
            <p className="text-[1.2rem] md:text-2xl">
              Dr. R. Selva Kumar
              <br />{" "}
              <span className="des__text md:text-base">AP / Chemistry</span>
            </p>
            <a className="phone__link" href="tel:+919443142775">
              +91 94431 42775
              <FaExternalLinkAlt className="link__svg" />
            </a>
          </div>
        </div>
        <div className="student__conatiner reveal-5">
          <p className="h1__child  m-auto max-w-[24ch] text-2xl md:text-[1.7rem]">
            Student Coordinators
          </p>
          <div className="contact__container grid__containers">
            <p className="text-[1.2rem] md:text-2xl">
              Mr. V. S. Nantha Kumar
              <br />
              <span className="des__text md:text-base">I B.Tech. AI & DS</span>
            </p>
            <a className="phone__link" href="tel:+917397745941">
              +91 73977 45941
              <FaExternalLinkAlt className="link__svg" />
            </a>
          </div>
          <div className="contact__container grid__containers reveal-4">
            <p className="text-[1.2rem] md:text-2xl">
              Mr. G. J. Mithran
              <br />
              <span className="des__text md:text-base">I B.E. CSE</span>
            </p>
            <a className="phone__link" href="tel:+918225427625">
              +91 82254 27625
              <FaExternalLinkAlt className="link__svg" />
            </a>
          </div>
          <div className="contact__container grid__containers reveal-5">
            <p className="text-[1.2rem] md:text-2xl">
              Mr. D. Ashik
              <br />
              <span className="des__text md:text-base">I B. Tech. AI & DS</span>
            </p>
            <a className="phone__link" href="tel:+919486393055">
              +91 94863 93055
              <FaExternalLinkAlt className="link__svg" />
            </a>
          </div>
          <div className="contact__container grid__containers reveal-4">
            <p className="text-[1.2rem] md:text-2xl">
              Ms. Siva Ransani
              <br />
              <span className="des__text md:text-base">I B. E. ECE</span>
            </p>
            <a className="phone__link" href="tel:+919342434169">
              +91 93424 34169
              <FaExternalLinkAlt className="link__svg" />
            </a>
          </div>
        </div>
        <hr className="hr__each" />
      </div>
    </div>
  );
}

export default Contact;
