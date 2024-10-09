import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <div className="hero">
      <div className="info gp">
        <div className="logo">
        <img src="coder_mk.png" alt="mk" />
        </div>
        <h1>hi iam mohammed kamal</h1>
        <h3>I work as a Front-End Developer.</h3>
        <div className="social-media">
          <a href="https://web.facebook.com/profile.php?id=100016503150230\">
            <div className="icons-all">
              <div className="icon"><FontAwesomeIcon icon={faFacebook} className="fa aw" /></div>
              <span>Facebook</span>
            </div>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=201008711638&text&type=phone_number&app_absent=0">
            <div className="icons-all">
              <div className="icon"><FontAwesomeIcon icon={faWhatsapp} className="wp aw" /></div>
              <span>Whatsapp</span>
            </div>
          </a>
          <a href="https://github.com/toxnroot">
            <div className="icons-all">
              <div className="icon"><FontAwesomeIcon icon={faGithub} className="gb aw" /></div>
              <span>Github</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/mohammed-kamal-901041322/">
            <div className="icons-all">
              <div className="icon"><FontAwesomeIcon icon={faLinkedin} className="el aw" /></div>
              <span>Linkedin</span>
            </div>
          </a>
          <a href="mailto:mohammed.job.dev@gmail.com">
            <div className="icons-all">
              <div className="icon"><FontAwesomeIcon icon={faEnvelope} className="el aw" /></div>
              <span>Email</span>
            </div>
          </a>

        </div>
      </div>
      <div className="line"></div>
      <div className="gp">
        <div className="photo-out">
          <div className="photo">
            <img src="robot.png" alt="photo" />
          </div>
        </div>
     
      </div>
    </div>
  );
}

export default Hero;
