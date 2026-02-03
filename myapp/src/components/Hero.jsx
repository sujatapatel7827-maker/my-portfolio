import heroImg from "../assets/Sujata_pic.jpeg";

export default function Hero() {
  return (
    <section id="home" className="hero fade-in">
      <div className="hero-wrapper">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1 className="hero-name"> Hey <br />I’m <span className="text-gradient">Sujata</span></h1>
          <p className="hero-role">I am a Java Full Stack Developer</p>

          <div className="hero-buttons">
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
          <div className="hero-image-circle float">
            <img src={heroImg} alt="Profile" />
          </div>
        </div>

      </div>
      
    </section>
  );
}
