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

  const scrollToHome = () => {
    scroller.scrollTo("home", scrollType);
  };
  const scrollNextProyect = () => {
    scroller.scrollTo("proyectTwo", scrollType);
  };

  return (
    <Element name="proyectOne">
      <div className="container1">
        <div className="cuadro1">
          <img src={require("../../assets/seniortalent.png")} alt=""></img>
          <div className="videoHover1" ref={videoTap}>
            <div className="icoPrueba" ref={icoRef}>
              <div>
                <div className="wwwIcon"></div>
                <a
                  className="iconTextP1"
                  href="https://seniortalent.cl/"
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
                <b>Senior Talent </b>
                <br /> is my first experience in charge completely of the
                frontend infrastructure for the company "start7", a network
                social program for the labor reintegration of the elderly, which
                generated a challenge, to devise a user interface highly
                intuitive. This social network has dynamic tables and flow of
                applications in real time. Made with "Material-UI" has a fully
                responsive design. The news section and the main site are
                connected to a CM in wordpress to give the client a tool that
                allows you to easily modify any of their data.
                <br />
                <b>
                  For legal reasons the code can only be viewed in private
                  sessions
                </b>
                <br />
                but you can see the page
              </p>
            ) : (
              <p>
                <b>Senior Talent </b>
                <br /> es mi primera experiencia a cargo completamente de la
                infraestructura de frontend para la empresa "start7", una red
                social para la reincercion laboral de personas mayores, lo cual
                genero un desafio, idear una interfaz de usuario altamente
                intuitiva. Esta red social cuenta con tablas dinamicas y flow de
                postulaciones en tiempo real. Realizada con "Material-UI" tiene
                un diseño responsivo en su totalidad. La seccion de noticias y
                el site principal estan conectados a un CM en wordpress para
                darle al cliente una herramienta que le permite modificar
                facilmente cualquier dato de estas mismas.
                <br />
                <b>
                  Por razones legales el codigo solo puede ser visto en seciones
                  privadas
                </b>
                <br />
                Si puedes ver la pagina
              </p>
            )}
            <button className="buttonSeeMore" onClick={quitImage}>
              {lenguaje === true ? "Here!" : "Aqui!"}
            </button>
            <button onClick={scrollToHome} className="prev">
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
