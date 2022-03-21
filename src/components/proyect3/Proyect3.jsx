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
    scroller.scrollTo("proyectTwo", scrollType);
  };
  const scrollNextProyect = () => {
    scroller.scrollTo("proyectFour", scrollType);
  };
  return (
    <Element name="proyectThree">
      <div className="container1">
        <div className="cuadro1">
          <video
            src={require("../../assets/videosPortfolio/countrysProyect.mkv")}
            alt=""
            width={831}
            controls
          ></video>
          <div className="videoHover" ref={videoTap}>
            <div className="icoPrueba" ref={icoRef}>
              <div>
                <div className="iconoGitHub"></div>
                <a
                  href="https://github.com/Romanow33/countryProject"
                  Target="_blank"
                  className="iconText"
                >
                  {lenguaje === true ? "See code" : "Ver codigo"}
                </a>
              </div>
              <div>
                <div className="wwwIcon"></div>
                <p>
                  {lenguaje === true
                    ? "the deploy does not exist yet"
                    : "El deploy no esta disponible"}
                </p>
              </div>
            </div>
          </div>
          <div className="mediodiv">
            {lenguaje === true ? (
              <p>
                <b>Proyect Countryes</b>
                <br />
                My first individual fullStack project. Creating a backend in
                Node, retrieve data from an api and store it in my own database
                postgres data, to later be displayed in the UI created with
                react and styles only in css without any tools or added library.
                This app filters the received data and gives the ability to add
                new data to the database
              </p>
            ) : (
              <p>
                <b>Proyect Countryes</b>
                <br />
                Mi primer proyecto individual fullStack. Creando un backend en
                Node, recupera datos e una api y los guarda en mi propia base de
                datos postgres, para luego, ser mostrados en la UI creada con
                react y estilos unicamente en css sin ninguna herramienta o
                libreria agregada. Esta app filtra los datos recividos y da la
                posibilidad de agregar nuevos datos a la BD
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
