/* 
Funciones

una funcion es un bloque de código que realiza una tarea específica, cuando se le llama
*Cada funcion de JavaScript es un objeto Funcion

*/

// function saludar() {
//     console.log("Hola Soy una función");
// }
// saludar();

/* 
Las fubcuibes sib sunokentbe ibejtos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y funciones que generan otras funciones.

la palabra reserada functionm que nos indica que estamos fediniendo una funcion 
el nombre de ka fybcuib deoebduebdi de ka accuib a realizar
un par de parentsis despues del nombre. puede contener parameteos, en caso no tengamos ninguno
seguido de un juego de llaves para cerrar el bloque de código

depentdiendo de las instrucciones dentro del  cuerpo de la funcion y del proposito de la misma, se determina si la funcion retorna un  valor
*/

//funcion que suma
function suma(a, b) {
    return a + b;
}

var a = 10;
var b = 8;
resultado = suma(a, b)
console.log(resultado)

//funcion que muestra mensaje en la consola
function saludar(nombre) {
    console.log("Hola, " + nombre + "!")
}

saludar("Pepa")


/* 

Hoisting

*Yo puedo invocar una funcion antes de siquiera declararla
*/

console.log(miVariable);
var miVariable = 0;

/*
scope = alcance

gobal: quiere decir que se puede utilizar o trabajar con una variable dentro de cualquier parte del código

var: no es tan recomendable por el comportamiento de la variable y la poca adaptabilidad

let: es preferible e icluso más segura de utilizar porque ademas de funcionar de manera global, también puede ser utilizada de manera local

cons: se refiere por su nombre tan intuitivo a la palabra constante, esto quiere decir que su nombre no puede ser reasignado
*/

//Variable local

function funcionVariableLocal() {
    var mensaje = "esta es una variable local";
    console.log(mensaje);
}
funcionVariableLocal();

var mensajeGlobal = "Esta es una variable global";
function funcionVariableGlobal() {
    console.log(mensajeGlobal);
}
funcionVariableGlobal();


//funciones anonimas

/* 
Estas funciones pueden ser declaradas sin un nombre y luego asignadas a variables o pasarse como parametro en otras funciones.
La diuferencia principald de estas funciones es que se declaran sin un nombre
*/


const saludo = function () {
    console.log("hola vida")
}
saludo()

/* 
Funciones flecha

Una forma mas concisa de definir funciones anonimas. Se les llama flecha debido a  su sintaxis

Básicamente se trata de reemplazar la palabra function y añadir => antes de abrir nuestras llaves
*/

const resta = (a, b) => a - b;

/* esta funcion flecha es una forma mas corta de :
cosnt resta = function (a,b){
    return a-b;
}

*/
console.log(resta(5, 3));
