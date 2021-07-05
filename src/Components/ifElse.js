import React from "react";

const Funciones = () => {
  return (
    <div className="flex-container">
      <h1>Logica</h1>
      <h2>if, else, elif</h2>
      <p>
        Estas palabras claves funcionan para deternimar que hace una aplicacion, segun si se cumple o no (true or false) cierta propiedad. Por ejemplo:
      </p>
      <p>
        <p className="blackbg-white-text">
          <div> 1 == 2 (False)</div>
          <div> 1 == True (True)</div>
          <div> nombreUsuario == 'Cesar' (True)</div>
        </p>
      </p>
      <h2>usando el if statement</h2>
      <p>
        <p className="blackbg-white-text">
          <div>if( 1== 1):</div>
          <div>&nbsp; &nbsp; &nbsp; print('Hola, el uno es igual a uno')</div>
        </p>
      </p>
      <h2>usando el if/else statement</h2>
      <p>
        <p className="blackbg-white-text">
        <div>nombre='Verny'</div>
          <div>if(nombre=='Verny'):</div>
          <div>&nbsp; &nbsp; &nbsp; print('Hola, Verny')</div>
          <div>else:</div>
          <div>&nbsp; &nbsp; &nbsp; print('Hola, no sos Verny')</div>
        </p>
      </p>
      <h2>usando el if/else/elif statement</h2>
      <p>
        <p className="blackbg-white-text">
        <div>nombre='Verny'</div>
          <div>if(nombre=='Cesar'):</div>
          <div>&nbsp; &nbsp; &nbsp; print('Hola, sos Cesar')</div>
          <div>elif(nombre=='Verny'):</div>
          <div>&nbsp; &nbsp; &nbsp; print('Hola, Verny')</div>
          <div>else:</div>
          <div>&nbsp; &nbsp; &nbsp; print('Hola, no sos Verny')</div>
        </p>
      </p>
      <h2>Operadores Logicos</h2>
      <p>
          Los opedores logicos nos sirven para hacer evaluacion como la anterior donde queriamos saber si el nombre == 'Verny', existen varios operadores para distintas cosas, por
          ejemplo si queremos saber si un numero es mas grande que otro podemos usar 'a > b' o si dos numeros son distintos '!='.
          Aca les adjunto un link para que vean los que existen: <a href="https://www.freecodecamp.org/espanol/news/operadores-basicos-en-python-con-ejemplos/">Operadores</a>
      </p>

      <h1>Ciclos</h1>
      
    </div>
  );
};
export default Funciones;
