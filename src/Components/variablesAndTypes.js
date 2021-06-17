import React from "react";

const Variables = () => {
  return (
    <div className="flex-container">
      <h1>Variables en Python</h1>
      <p>
        Una variable en python (o en cualquier lenguaje de programacion), es un
        nombre que le damos a un valor que vamos a almacenar para usarlo
        eventualmente.
      </p>
      <h2>Numbers</h2>
      <p>
        Hay basicamente 3 tipos de numeros en python, 'int', 'float', 'complex'
      </p>
      <p>
        <h3>int</h3>
        <p className="blackbg-white-text">
          <div>x = 4</div>
          <div>y = -1099323</div>
          <div>z = 0</div>
        </p>
      </p>
      <p>
        <h3>float</h3>
        <p className="blackbg-white-text">
          <div>x = 5.0</div>
          <div>y = -3983.2</div>
          <div>z = 0.</div>
        </p>
      </p>
      <p>
        <h3>complex</h3>
        <p className="blackbg-white-text">
          <div>x = 42j</div>
          <div>type(x)</div>
          <div>{`<class 'complex'>`}</div>
        </p>
        <span>
          Nota: cuando ponemos 'type(variables)', nos indica el tipo de la
          variable
        </span>
      </p>
      <h3>Operaciones matematicas basicas</h3>
      <p>
        Python es similar a cualquier otro lenguaje, se utilza + para sumar, -
        para restar, / para dividir, * para multiplicar y ** para potencias,
        tambien es posible usar el module math, incluido en python, para mas
        informacion{" "}
        <a href="https://www.w3schools.com/python/module_math.asp">
          Click aqui
        </a>
      </p>
      <h2>Boolean</h2>
      <p>Un booleano puede ser True or False</p>
      <p className="blackbg-white-text">
        <div>True == 1</div>
        <div>False == 0</div>
        <div>esVerdad = True</div>
        <div>esMentira = True</div>
        <div>
          esVerdad == 1 (esto es cierto pues asignamos 1 a la variable esVerdad)
        </div>
      </p>
      <span>
        Nota: Cuando usamos =, es para asignar un valor a una variable, cuando
        usamos doble '='' (==), es para comparar
      </span>
      <h2>Strings (cadenas de texto)</h2>
      <p>
        Una cadena de texto, es un grupo de caracteres, por ejemplo 'hola',
        'Cesar', 'Victor no se ducha'
      </p>
      <p className="blackbg-white-text">
        <div>nombre="Leonardo"</div>
        <div>apellido="Cordero"</div>
      </p>
      <h3>Concatenando strings y usando .format</h3>
      <p className="blackbg-white-text">
        <div>nombreCompleto=nombre + apellido</div>
        <div>{`print("Hola, mi nombre es: {name}".format(name=nombreCompleto))`}</div>
      </p>
      <h2>Convirtiendo variables de un tipo a otro en Python</h2>
      <p>
        Para convertir una variable de un tipo a otro, simplemente ponemos el
        tipo antes de la declaracion, ejemplo:
      </p>
      <p className="blackbg-white-text">
        <div>numeroEntero=int(1.00)</div>
        <div>numeroConvertidoAString=string(numeroEntero)</div>
      </p>
      <h4>Ejercicio: Hagamos una calculadora inutil</h4>
      <h5>Use input(), para escribir valores en la consola</h5>
      <span>input1 = input()</span>
    </div>
  );
};
export default Variables;
