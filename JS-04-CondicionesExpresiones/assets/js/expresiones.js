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

    suma(+)
    resta(-)
    multiplicacion(*)
    division(/)
    modulo(%)
    exponenciacion(**)
    increnmento (++)
    decremento (--)

*/

//variables

let numero1 = 10;
let numero2 = 2;
let numero3 = "5";



let suma = numero1 + numero2; //resultado 12

console.log("Suma de 10 + 2 ", suma)//1 forma de mostrar la suma
console.log("Suma de 10 + 2 ", numero1 + numero2)//2 forma de mostrar la suma
console.log("Suma de 10 + 2 ", 10 + 2)//3 forma de mostrar la suma

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

// console.log(convertirAF(prompt("Grados celcius a convertir")) + " °F");

let numerComparacion1 = 23;
let numerComparacion2 = 13;
let numerComparacion3 = 13;
let numerComparacion4 = "13";

// 13 == "13" //true
// 13 === "13" //false


if (edadFelipe >= 18) {
    console.log("Puedes ir a la pachangona");
} else {
    console.log("Te quedas en casa");
}


/* Operadores lógicos

nos devuelven un resultado a partir de que se cumpla o no una condicion, el resultado es booleano 

    -And && sirve para determinar si dos expresiones son verdaderas. si ambas son verdaderas el resultado es verdadero, si una es falsa todo el resultado es falso.

*/


let tengounCrush = true;
let miCrushMeQuiere = true;

if (tengounCrush && miCrushMeQuiere) {
    console.log("Estoy Jeliz");
} else {
    console.log("Haganse a un lado que me quiero automorir");
}

/* 

    -OR || sirve para determinar si una de las 2 afirmaciones es verdadera, si al menos 1 es verdadero el resultado es verdadero

*/

if (hayChilaquilesVerdes || hayCarneEnSuJugo) {
    console.log("Felipe desayuna chido");
} else {
    console.log("Felipe no desayuna chido");
}

if (edadFelipe >= 18 && saldoFelipe != 0) {

}