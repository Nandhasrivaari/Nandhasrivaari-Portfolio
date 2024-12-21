export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Nandhasrivaari</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color"></span>{" "}
            <br />
            QA Engineer and Frontend Developer
          </h1>
          <p className="hero--section-description">
            I’m an Electronics and Communication Engineering student skilled in Java, web technologies and software testing.
            {/* <br /> Dolorum, quas. Amet soluta assumenda cum? */}
          </p>
        </div>
        <button className="btn btn-primary">
          <a className="mailsri" href="mailto:nandhasrivaari23@gmail.com">
            Get in Touch
          </a>
        </button>      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
