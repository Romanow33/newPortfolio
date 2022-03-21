import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import WebNavBar from "./components/webNavBar/WebNavBar";
import Proyect1 from "./components/proyect1/Proyect1";
import Proyect2 from "./components/proyect2/Proyect2";
import Proyect3 from "./components/proyect3/Proyect3";
import Proyect4 from "./components/proyect4/Proyect4";
import Proyect5 from "./components/proyect5/Proyect5";
import Skills from "./components/skills/skills";
import { useState } from "react";
function App() {
  const [isEnglish, setIsEnglish] = useState(false);

  function changeLenguaje() {
    setIsEnglish(!isEnglish);
  }
  console.log(isEnglish);
  return (
    <div className="App">
      <WebNavBar />
      <button
        className={isEnglish === true ? "changeLenguajeOn" : "changeLenguaje"}
        onClick={changeLenguaje}
      >
        ENGLISH
      </button>
      <Routes>
        <Route exact path="/" element={<Home lenguaje={isEnglish} />} />
      </Routes>
      <Routes>
        <Route exact path="/" element={<Proyect1 lenguaje={isEnglish} />} />
      </Routes>
      <Routes>
        <Route exact path="/" element={<Proyect2 lenguaje={isEnglish} />} />
      </Routes>
      <Routes>
        <Route exact path="/" element={<Proyect3 lenguaje={isEnglish} />} />
      </Routes>
      <Routes>
        <Route exact path="/" element={<Proyect4 lenguaje={isEnglish} />} />
      </Routes>
      <Routes>
        <Route exact path="/" element={<Proyect5 lenguaje={isEnglish} />} />
      </Routes>
      <Routes>
        <Route exact path="/" element={<Skills lenguaje={isEnglish} />} />
      </Routes>
    </div>
  );
}

export default App;
