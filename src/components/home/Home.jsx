import "./Home.css";
import { useRef, useState } from "react";
import { scroller } from "react-scroll";
import { Element } from "react-scroll";
function Home({ lenguaje }) {
  /* Transitions */
  const imgRef = useRef();
  const aboutRef = useRef();

  function transitions(ref, ref1) {
    quitImage(ref);
    showAbout(ref1);
  }
  function quitImage(ref) {
    ref.current.classList.toggle("refImgExit");
  }
  function showAbout(ref1) {
    ref1.current.classList.toggle("refAboutShow");
  }
  const [aboutOn, setaboutOn] = useState(false);
  const turnOnAbout = (imgRef, aboutRef) => {
    setaboutOn(!aboutOn);
    transitions(imgRef, aboutRef);
  };

  const scrollType = {
    duration: 1500,
    delay: 100,
    smooth: "easeInOutElastic",
    offset: -10,
  };
  const scrollType2 = {
    duration: 5000,
    delay: 100,
    smooth: "easeInOutElastic",
    offset: -10,
  };
  const scrollFirstProyect = () => {
    scroller.scrollTo("proyectOne", scrollType);
  };
  const scrollToSkills = () => {
    scroller.scrollTo("skills", scrollType2);
  };
  return (
    <Element name="home">
      <div className="containerHome">
        <div className="imageProfile" ref={imgRef} />
        <div className="aboutMe" ref={aboutRef}>
          {lenguaje === true ? (
            <p>
              I am a web developer, I did a bootcamp of more than 700 hours of
              intensive study that prepares me to perform in the position,
              creating functional and complex projects, applying the latest
              technologies on the market. I am also a chef and musician, lover
              of curiosity and good taste. Communication is the solution many of
              our problems and I am always willing to speak. <br />
              <b>So don't hesitate to contact me!</b>
            </p>
          ) : (
            <p>
              Soy desarrolador web, realize un bootcamp de mas de 700hs de
              estudio intensivo que me preparo para desempeñarme en el cargo,
              creando proyectos funcionales y de complegidad, aplicando las
              ultimas tecnologias del mercado. Ademas soy chef y musico, amante
              de la curiosidad y el buen gusto. La comunicacion es la solucion a
              muchos de nuestros problemas y yo siempre estoy dispuesto a
              hablar. <br />
              <b>Asi que no dudes en contactarme!</b>
            </p>
          )}

          {lenguaje === true ? (
            <a
              className="buttonToCv"
              href="https://drive.google.com/file/d/1BghJkUuOuXGy28knp1k-LQiwiGthqVAg/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              My cv
            </a>
          ) : (
            <a
              className="buttonToCv"
              href="https://drive.google.com/file/d/1Dmkjz0VQaPyldsQ9xFPHfYhKxfVk69rI/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              Mi cv
            </a>
          )}
        </div>
        <div className="posterContainer">
          <button
            className={aboutOn === true ? "moreForMeOn" : "moreForMe"}
            onClick={() => turnOnAbout(imgRef, aboutRef)}
          >
            {lenguaje === true ? (
              <p className="moreForMeText">About me</p>
            ) : (
              <p className="moreForMeText">Sobre mi</p>
            )}
            <img
              alt="arrow"
              src={require("../../assets/rigtharow.png")}
              className={aboutOn === true ? "arrowIconOff" : "arrowIcon"}
            ></img>
          </button>
        </div>
        <div className={aboutOn === true ? "refDownName" : "tittleContainer"}>
          <p className="neonFirstName">Ignacio</p>
          <p className="neonLastName">Romanow</p>
        </div>
        {lenguaje === true ? (
          <>
            <button className="buttonToProyect" onClick={scrollFirstProyect}>
              My projects
            </button>
            <button className="buttonToSkills" onClick={scrollToSkills}>
              My Skills
            </button>
          </>
        ) : (
          <>
            <button className="buttonToProyect" onClick={scrollFirstProyect}>
              Proyectos
            </button>
            <button className="buttonToSkills" onClick={scrollToSkills}>
              Habilidades
            </button>
          </>
        )}
      </div>
    </Element>
  );
}

export default Home;
