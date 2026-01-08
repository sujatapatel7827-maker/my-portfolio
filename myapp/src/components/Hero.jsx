import heroImg from "../assets/Sujata_pic.jpeg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-wrapper">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1 className="hero-name"> Hey <br />I’m <span>Sujata</span></h1>
          <p className="hero-role">I am a Java Full Stack Developer</p>

          <div className="hero-buttons">
            <button
              className="btn"
              onClick={() =>
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
              }
            >
              Let’s Talk
            </button>
            <a
              href="/sujataCV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Download my CV
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-right">
          <div className="hero-image-circle">
            <img src={heroImg} alt="Profile" />
          </div>
        </div>

      </div>
    </section>
  );
}
