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
    scroller.scrollTo("proyectThree", scrollType);
  };
  const scrollNextProyect = () => {
    scroller.scrollTo("proyectFive", scrollType);
  };
  return (
    <Element name="proyectFour">
      <div className="container1">
        <div className="cuadro1">
          <video
            controls
            src={require("../../assets/videosPortfolio/moviesApp.mkv")}

            alt=""
          ></video>
          <div className="videoHover" ref={videoTap}>
            <div className="icoPrueba" ref={icoRef}>
              <div>
                <div className="iconoGitHub"></div>
                <a
                  className="iconText"
                  href="https://github.com/Romanow33/MovieApp"
                  Target="_blank"
                >
                  {lenguaje === true ? "See code" : "Ver codigo"}
                </a>
              </div>
              <div>
                <div className="wwwIcon"></div>
                <a href="https://ignacio-movies.netlify.app/" Target="_blank">
                  {lenguaje === true ? "See page" : "Ver sitio"}
                </a>
              </div>
            </div>
          </div>
          <div className="mediodiv">
            {lenguaje === true ? (
              <p>
                <b>MoviesApp</b>
                <br /> a small singlePage application, where I implement layout
                responsive and tools that seemed curious to me, such as Escroll
                infinity, and scroll by controls. in addition to ReactQuery that
                allows generate a cache of requests to the server which makes it
                more fast and light
              </p>
            ) : (
              <p>
                <b>MoviesApp</b>
                <br /> una pequeña singlePage aplication, donde implemente
                diseño responsive y herramientas que me parecieron curiosas
                como, Escroll infinito, y scroll por controles. ademas de
                ReactQuery que permite generar un cache de solicitudes al
                servidor lo cual lo hace mas rapido y ligero
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
