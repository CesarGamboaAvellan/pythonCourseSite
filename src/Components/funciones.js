import React from "react";

const Funciones = () => {
  return (
    <div className="flex-container">
      <h1>Funciones</h1>
      <p>
        Una funcion (o metodo si se usa dentro de una clase), es una porcion de
        codigo, que tiene el proposito de ser reutilizado
      </p>
      <p>
        Una funcion es similar a la definicion matematica, f(x) = y, f(x, y) = x
        + y, f(x, y, z) = x + y -2
      </p>
      <h2>Parametros de una funcion</h2>
      <p>
        Cuando definimos una funcion, podemos pasar valores, los cuales se
        llaman parametros, por ejemplo, en la definicion matematica f(x) = y, x
        es un parametro.
      </p>
      <h2>Vamos a crear una funcion en python</h2>
      <p>
        <p className="blackbg-white-text">
          <div>def suma(valor1, valor2): </div>
          <div>&nbsp; &nbsp; &nbsp; suma = valor1 + valor2</div>
          <div> &nbsp; &nbsp;&nbsp; return suma</div>
        </p>
      </p>
      <h3>La palabra return</h3>
      <p>
        Una funcion puede o no retornar(devolver) un valor, para devolver un
        valor, se utiliza la palabra reservada 'return'
      </p>
      <h2>Llamada o ejecucion de una funcion</h2>
      <p>
        Para ejecutar una funcion, usamos el nombre de la funcion (nombre que le
        dimos al crearla) y ponemos parentesis '()'. Dentro de los parentesis,
        podemos pasar los valores (parametros), que queremos que la funcion
        utilice
      </p>
      <p>
        <p className="blackbg-white-text">
          <div>def suma(valor1, valor2): </div>
          <div>&nbsp; &nbsp; &nbsp; suma = valor1 + valor2</div>
          <div> &nbsp; &nbsp;&nbsp; return suma</div>
          <div>resultado = suma(1, 2) </div>
          <div>print('El resultado es:', resultado)</div>
        </p>
      </p>
      <p>Ejercicio: Cree una funcion que calcule el area de un cuadrado</p>
    </div>
  );
};
export default Funciones;
