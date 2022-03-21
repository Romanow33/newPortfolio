import React from "react";
import "./skills.css";
import { Element } from "react-scroll";
import { scroller } from "react-scroll/modules";
import sass from "../../assets/techicons/sass.png";
import javascript from "../../assets/techicons/javascript.png";
import cssTailwind from "../../assets/techicons/css_tailwind.png";
import css3 from "../../assets/techicons/css3.png";
import express from "../../assets/techicons/express.png";
import html5 from "../../assets/techicons/html5.png";
import nextjs from "../../assets/techicons/nextjs.png";
import node from "../../assets/techicons/node.png";
import postgres from "../../assets/techicons/pstgressql.png";
import react from "../../assets/techicons/react.png";
import redux from "../../assets/techicons/redux.png";
import sequelize from "../../assets/techicons/sequelize.png";
import typescript from "../../assets/techicons/typescript.png";
import mongodb from "../../assets/techicons/mongodb.png";

function Skills({ lenguaje }) {
  const scrollType = {
    duration: 1500,
    delay: 10,
    smooth: "easeInOutElastic",
    offset: -10,
  };

  const scrollToPrev = () => {
    scroller.scrollTo("proyectFive", scrollType);
  };
  const scrollNextProyect = () => {
    scroller.scrollTo("home", scrollType);
  };
  return (
    <Element name="skills">
      <div className="skillGrid">
        <div>
          <img
            className="skillImg"
            src={sass}
            alt="alt"
            width={110}
            height={110}
          />
          <h1>Sass</h1>
        </div>
        <div>
          <img
            className="skillImg"
            src={javascript}
            alt="alt"
            width={110}
            height={110}
          />
          <h1>Javascript</h1>
        </div>
        <div>
          <img
            className="skillImg"
            src={cssTailwind}
            alt="alt"
            width={110}
            height={110}
          />{" "}
          <h1>Css Tailwind</h1>
        </div>
        <div>
          <img
            className="skillImg"
            src={express}
            alt="alt"
            width={110}
            height={110}
          />
          <h1>Express</h1>
        </div>
        <div>
          <img
            className="skillImg"
            src={html5}
            alt="alt"
            width={110}
            height={110}
          />
          <h1>HTML5</h1>
        </div>
        <div>
          <img
            className="skillImg"
            src={css3}
            alt="alt"
            width={110}
            height={110}
          />
          <h1>Css</h1>
        </div>
        <div>
          <img
            className="skillImg"
            src={nextjs}
            alt="alt"
            width={110}
            height={110}
          />
          <h1>NextJs</h1>
        </div>
        <div>
          <img
            className="skillImg"
            src={postgres}
            alt="alt"
            width={110}
            height={110}
          />
          <h1>PostgresSql</h1>
        </div>
        <div>
          <img
            className="skillImg"
            src={node}
            alt="alt"
            width={110}
            height={110}
          />
          <h1>NodeJs</h1>
        </div>
        <div>
          <img
            className="skillImg"
            src={react}
            alt="alt"
            width={110}
            height={110}
          />
          <h1>ReactJs</h1>
        </div>
        <div>
          <img
            className="skillImg"
            src={redux}
            alt="alt"
            width={110}
            height={110}
          />
          <h1>Redux</h1>
        </div>
        <div>
          <img
            className="skillImg"
            src={sequelize}
            alt="alt"
            width={110}
            height={110}
          />
          <h1>Sequelize</h1>
        </div>
        <div>
          <img
            className="skillImg"
            src={typescript}
            alt="alt"
            width={110}
            height={110}
          />
          <h1>Typescript</h1>
        </div>
        <div>
          <img
            className="skillImg"
            src={mongodb}
            alt="alt"
            width={110}
            height={110}
          />
          <h1>MongoDb</h1>
        </div>
        {lenguaje === true ? (
          <div className="buttonContainer">
            <button onClick={scrollToPrev} className="prevSkill">
              {/* <img src={arrow} width={100} height={100} alt="" /> */}
              <h1>GO PREV </h1>
            </button>
            <button onClick={scrollNextProyect} className="nextSkill">
              <h1>GO HOME </h1>
            </button>
          </div>
        ) : (
          <div className="buttonContainer">
            <button onClick={scrollToPrev} className="prevSkill">
              {/* <img src={arrow} width={100} height={100} alt="" /> */}
              <h1>PREVIO </h1>
            </button>
            <button onClick={scrollNextProyect} className="nextSkill">
              <h1>AL TECHO</h1>
            </button>
          </div>
        )}
      </div>
    </Element>
  );
}

export default Skills;
