export default function HeroSection(){

    return  (  <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
      <div className="hero--section--content">
        <p className="section--title">Hey, I'm Mohibullah Rahimi</p>
        <h1 className="hero--section--title">
          <span className="hero--section-title--color">Software</span>{" "}
          <br />
          Engineer
        </h1>
        <p className="hero--section-description">
        Software engineer with 3 years of experience in web development, application, and database and proficient in various programming languages and frameworks. Skilled in both front-end and back-end development with a strong aptitude for problem-solving.
        </p>
      </div>
      <button className="btn btn-primary">Get In Touch</button>
    </div>
    <div className="hero--section--img">
      <img src="./hero_img.jpg" alt="Hero Section" />
    </div>
  </section>
);
}
