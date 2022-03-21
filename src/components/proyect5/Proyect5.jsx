import "../Proyects.css";
import { useRef } from "react";
import { Element } from "react-scroll";
import { scroller } from "react-scroll/modules";
import arrow from "../../assets/rigtharow.png";
function Proyect1({ lenguaje }) {
  const icoRef = useRef();
  const videoTap = useRef();

  function quitImage(ref) {
    icoRef.current.classList.toggle("seeIcoPrueba");
    videoTap.current.classList.toggle("videoHoverSee");
  }

  const scrollType = {
    duration: 1500,
    delay: 10,
    smooth: "easeInOutElastic",
    offset: -10,
  };

  const scrollToPrev = () => {
    scroller.scrollTo("proyectFour", scrollType);
  };
  const scrollNextProyect = () => {
    scroller.scrollTo("skills", scrollType);
  };
  return (
    <Element name="proyectFive">
      <div className="container1">
        <div className="cuadro1">
          <video
            controls
            src={require("../../assets/videosPortfolio/wheaterApp.mkv")}
            alt=""
          ></video>
          <div className="videoHover" ref={videoTap}>
            <div className="icoPrueba" ref={icoRef}>
              <div>
                <div className="iconoGitHub"></div>
                <a
                  className="iconTextP1"
                  href="https://github.com/Romanow33/wheaterApp"
                  Target="_blank"
                >
                  {lenguaje === true ? "See code" : "Ver codigo"}
                </a>
              </div>
              <div>
                <div className="wwwIcon"></div>
                <a
                  className="iconTextP1"
                  href="https://romanow-climapp33.netlify.app/"
                  Target="_blank"
                >
                  {lenguaje === true ? "See page" : "Ver sitio"}
                </a>
              </div>
            </div>
          </div>
          <div className="mediodiv">
            {lenguaje === true ? (
              <p>
                <b>ClimApp</b>
                <br />
                <br /> My first responsive App in React, consumes data from the
                famous aPi, Weatherapp.
                <br /> my first experiences in elegant design and minimalist,
                with small hover effects
              </p>
            ) : (
              <p>
                <b>ClimApp</b>
                <br />
                Mi primera App responsive en React, consume datos de la famosa
                aPi, Wheaterapp.
                <br /> mis primeras experiencias en el diseño elegante y
                minimalista, con pequeños efectos hover
              </p>
            )}

            <button className="buttonSeeMore" onClick={quitImage}>
              {lenguaje === true ? "Here!" : "Aqui!"}
            </button>
            <button onClick={scrollToPrev} className="prev">
              <img src={arrow} width={100} height={100} alt="" />
            </button>

            <button onClick={scrollNextProyect} className="next">
              <img src={arrow} width={100} height={100} alt="" />
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Proyect1;
