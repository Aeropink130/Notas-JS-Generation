console.log("Holis");


/* 
Operador
    Un elemento que nos permite realizar una operación entre dos  o más elementos

    -operadores aritméticos (+,-,*,/,%)
    -operadores de asignación (=)
    -operadores de cadenas (toLowerCase, toUpperCase, trim, toString, concat)
    -operadores lógicos (&&, ||, !)
    -operadores de comparación (>, <, >=, <=, ==, === , !=)


*/

/*Operadores aritméticos

Son operadores que nos permiten tomar valores numéricos como sus operandos y retornar un valor numéricoúnico, Corresponden a operaciones matemáticas.

*/

let suma = 5 + 3; //resultado 8

let resta = 10 - 4; //resultado 6

let multi = 6 * 3; //resultado 18

let div = 15 / 3; //resultado 5

let modulo = 10 % 3; //resultado 1 (el residuo de 10 dividido entre 3)

let incremento = 1;
incremento++; //aumanta el valor en 1, resultado 2

let decremento = 8;
decremento--; //disminuye el valor en 1, resultado 7


//Doble igual - igualdad Abstracta
5 == "5" //true ya que js convierte la cadena "5" a un número antes de la comparación

// Triple igual - Igualdad estricta
5 === "5" //false porque no son del mismo tipo y los tipos también difieren

function convertirAF(grados) {
    let resultado = (grados * 9 / 5) + 32;
    return resultado;
}

console.log(convertirAF(prompt("Grados celcius a convertir")) + " °F");