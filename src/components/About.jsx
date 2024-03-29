import "../styles/About.css";

function About() {
  return (
    <div className="about__container reveal" id="about">
      <h1>
        <strong className="about__text  text-5xl">Venue</strong>
      </h1>
      <p className="h1__child reveal-2 m-auto my-[1rem] max-w-[24ch] text-2xl md:max-w-[100ch]">
        Amrita College of Engineering And Technology
      </p>
      <div className="parent__grid reveal-2 ">
        <div className="grid__containers__about grid__containers reveal-3"></div>
        <div className="grid__containers subchild__container sah__container reveal-3">
          <p className="SAH__text text-xl">Science And Humanities</p>
          <div className="grid__containers__about"></div>
        </div>
        <div className="grid__containers subchild__container location__container reveal-3">
          <p className="location__text text-xl md:text-2xl ">Location</p>
          <iframe
            src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d789.9493377737289!2d77.41363662688725!3d8.230374629726596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f12c00000001%3A0x8c485f52f39feebf!2sAmrita%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1709387570853!5m2!1sen!2sin&output=embed&t=k"
            className="map__iframe"
          ></iframe>
        </div>
      </div>
      <a
        href="https://maps.app.goo.gl/4KfPRrBawJnwZAASA"
        className="btn reveal-3 mt-8"
        id="contact"
      >
        Google Maps Location &nbsp; 🔗
      </a>
      <hr className="hr__each" />
    </div>
  );
}

export default About;
