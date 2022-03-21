
import { scroller } from "react-scroll";
import "./WebNavBar.css";
function WebNavBar() {
  const scrollType = {
    duration: 2000,
    delay: 100,
    smooth: "easeInOutElastic",
    offset: -10,
  };
  const scrollFirstProyect = () => {
    scroller.scrollTo("home", scrollType);
  };
  return (
    <div className="fullNavBar">
      <img
        src={require("../../assets/icon.png")}
        className="navIcon"
        alt="icono"
      />
      <a href="https://github.com/Romanow33" target="_blank" rel="noreferrer">
        <div className="githubIcon"></div>
      </a>
      <a
        href=" https://www.linkedin.com/in/ignacio-romanow/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="linkedinIcon"></div>
      </a>
      <a href="mailto:romanowignacio1@gmail.com">
        <img
          src={require("../../assets/email.png")}
          className="emailIcon"
          alt="email"
        />
      </a>

      <button onClick={scrollFirstProyect} className="homebutton">
        <img
          src={require("../../assets/casa.png")}
          className="homeIcon"
          alt="email"
        />
      </button>
    </div>
  );
}

export default WebNavBar;
