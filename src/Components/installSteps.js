import React from "react";
import PythonInstall from "../pythonInstall.png";

const InstallSteps = () => {
  return (
    <div className="flex-container">
      <h1>Instalacion de Python</h1>
      <h2>
        Para instalar el lenguaje de programacion, haga click{" "}
        <a href="https://www.python.org/downloads/">aca</a>
      </h2>
      <p>
        Una vez descargado el archivo, abralo y siga las instrucciones de
        instalacion
      </p>
      <p>
        <img style={{ width: "60%" }} src={PythonInstall}></img>
      </p>
      <p>
        Por favor asegurese de seleccionar el campo que dice 'Add Python to
        Path'
      </p>
      <h1>Instalacion del Visual Studio Code</h1>
      <p>
        Visual Studio Code es un editor de codigo popular que nos permite crear
        codigo en distintos lenguajes, como Python para este caso
      </p>
      <h3>
        Para instalar Visual Studio Code, haga click{" "}
        <a href="https://code.visualstudio.com/">aca</a>
      </h3>
    </div>
  );
};
export default InstallSteps;
