import "../Proyects.css";
import { useRef } from "react";
import { Element } from "react-scroll";
import { scroller } from "react-scroll/modules";
import arrow from "../../assets/rigtharow.png";
function Proyect1({ lenguaje }) {
  const icoRef = useRef();
  const videoTap = useRef();

  function quitImage(ref, ref1) {
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
    scroller.scrollTo("proyectOne", scrollType);
  };
  const scrollNextProyect = () => {
    scroller.scrollTo("proyectThree", scrollType);
  };

  return (
    <Element name="proyectTwo">
      <div className="container1">
        <div className="cuadro1">
          <video
            controls
            src={require("../../assets/videosPortfolio/elLibrero.mkv")}
            alt=""
          />
          <div className="videoHover" ref={videoTap}>
            <div className="icoPrueba" ref={icoRef}>
              <div>
                <div className="iconoGitHub"></div>
                <a
                  href="https://github.com/Romanow33/mario-s-bookcase"
                  className="iconText"
                  Target="_blank"
                >
                  {lenguaje === true ? "See code" : "Ver codigo"}
                </a>
              </div>
              <div>
                <div className="wwwIcon"></div>
                <a
                  href="https://el-librero.netlify.app/"
                  className="iconText"
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
                <b>Mario's bookcase</b> <br />
                It is a fully functional E-commerce where you work as fullStack
                and my first team experience. with a backend and Fully
                functional frontend. This app has the latest tools on the market
                and all the functionalities expected. Register, log in, filter
                each data specifically, add a new data, buy, modify your
                profile. It has route protection, which differentiates the admin
                experience, user experience, and user experience registered
              </p>
            ) : (
              <p>
                <b>El librero de Mario</b> <br />
                Es un E-commerce completamente funcional donde trabaje como
                fullStack y mi primera experiencia en equipo. con un backend y
                frontend completamente funcionales. Esta app cuenta con las
                ultimas herramientas del mercado y todas las funcionalidades
                esperadas. Registrarse, loguearse, filtrar cada dato
                especificamente, agregar un nuevo dato, comprar, modificar tu
                perfil. Cuenta con proteccion de rutas, lo que diferencia la
                experiencia de administrador, la de usuario y la de usuario
                registrado
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
