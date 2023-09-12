/*

Arrays

Un array es un conjunto de datos que se puede almacenar en una sola variable. Un arreglo es una estructura de datos que podemos definir como una colección de variables (que pueden ser diferentes, pero con un mismo contexto.)


*/

//Variables que están "sueltas"
let nombre = "Felipe";
let edad = 31;
let puesto = "instructor";


//Usar un array (arreglo) para "juntar" nuestras variables
//Agregamos los elementos al array separados por coma
let personasDeLaCH31 = ["Felipe", "José Angel", "Marco", "Evelyn", "Alejandro"];


//Podemos almacenar cualquier tipo de datos en un array.
let cosasRandom = ["Pelota", 31, true, undefined, null];
console.log(typeof (cosasRandom));//object
console.log(typeof (personasDeLaCH31));

//Al imprimir el tipo de dato de nuestro arreglo, obtenemos un object porque los arrays  son objetos (después veremos que tenemos muchos tipos de objetos)



//Los arreglos al ser objetos, cuentan con métodos que nos permiten manipularlos.

//Ya que tengo mi arreglo, ¿cómo podemos acceder a esta informacion?
//Para mostar la cantidad de elementos que tengo en un arreglo, usamos un método llamado length



//metodo length para mostrar la cantidad de elementos de un array
console.log(personasDeLaCH31.length);

//declarar un array

[5, 4, 3, 2, 1];

//inicializar un array
let cuentaRegresiva = [5, 4, 3, 2, 1];

//accder a un elemento del array en especifico utilizando su indice
console.log(personasDeLaCH31[0]); //Felipe
console.log(personasDeLaCH31[25]); //undefined porque no existe aun

let index = 4;

//paso esta variable como indice para acceder a un elemento del array
console.log(personasDeLaCH31[index]); //Alejandro


//ejemplo de un array para un consultorio dental
let pacientes = [];

let dentistas = ["Dr. Smith", "Dra. Garcia", "Dr. House", "Dr. Simi"];

//para hacer modificaciones en un array, podemos acceder a un elemento en especifico y reasignarle un valor

dentistas[3] = "Similares";

dentistas[8] = "Dr. Strange";//agrega un elemento en la posicion 8 y deja los elementos anteriores vacios

typeof (dentistas[7]);//undefined y no null porque no existe

//funcion para imprimir asteriscos y separar los mensajes en la consola
function imprimirAsteriscos() {
    console.log("*************************");
}
imprimirAsteriscos();

//metodos de arrays

let listaDelSuper = ["Gansitos", "Coca-cola", "Arroz", "Atun", "Verduritas"];

//metodo lenght para conocer la longitud de un array
console.log("La cantidad de elementos de mi array es de: " + listaDelSuper.length);

//metodo push para agregar un elemento al final del array
listaDelSuper.push("Jabón para ropa", "Jabón para trastes");
console.log(listaDelSuper);

//metodo pop para eliminar el ultimo elemento del array
listaDelSuper.pop();
console.log(listaDelSuper);

//agregar un elemento al inicio del array con el metodo unshift
listaDelSuper.unshift("Sabritones");
console.log(listaDelSuper);

//Eliminar el primer elemento del array con el metodo shift
listaDelSuper.shift();//shift no recibe parametros
console.log(listaDelSuper);

//metodo indexOf para buscar un elemento en el array, el metodo distingue entre mayusculas y minusculas (case sensitive)
console.log(listaDelSuper.indexOf("Arroz"));//2

//metodo splice para eliminar un elemento del array, recibe dos parametros, el primero es el indice del elemento que queremos eliminar y el segundo parametro es la cantidad de elementos que queremos eliminar a partir del indice que le pasamos como primer parametro

//listaDelSuper.splice(inicio, cantidad de elementos a eliminar, elemento a agregar)

listaDelSuper.splice(2, 0, "Cacahuates", "Manzana");//agrega elementos a partir del indice 2

listaDelSuper.splice(5, 2, "Platano");//elimina un elemento a partir del indice 2
console.log(listaDelSuper);

//Metodo map para iterar un array y modificar sus elementos
//map recibe como parametro una funcion que se ejecutara por cada elemento del array

let numeros = [1, 2, 3, 4, 5];

//crear otro arreglo con los numeros multiplicados por 2

let numerosPorDos = numeros.map(function (numero) {
    return numero * 2;
});

console.log(numerosPorDos);

/* 

Imaginemos que tenemos un array de pacientes. Este array tiene datos registrados como nombre, edad. Necesitamos modificar este arreglo para que revisemos la edad de cada paceinte, si ña edad es mayor a 40 años, el paciente necesita una atencion especial.

    aspectos a considerar:

        -2 arreglos
        -condicion if
        -funcion para agregar el nuevo dato al array de cada paciente
        -metodo map para iterar el array de pacientes

*/

//Arreglo de pacientes original
let pacientesConsultorio = [
    {
        nombre: "Felipe",
        edad: 31,
    },
    {
        nombre: "Fatima",
        edad: 26,
    },
    {
        nombre: "Jesus",
        edad: 51,
    }
];

//funcion para agregar el texto "Necesita atencion especial" al array de cada paciente
function agregarEstadoSalud(paciente) {
    let estadoSalud = "Saludable";

    //si la edad del paciente es mayor a 40
    if (paciente.edad > 40) {
        estadoSalud = "Necesita atencion especial";
    }

    return {
        ...paciente,
        estadoSalud: estadoSalud,
    }
}

//vamos a aplicar la funcion agregarEstadoSalud a cada elemento del array pacientesConsultorio

let pacientesConsultorioConEstado = pacientesConsultorio.map(agregarEstadoSalud);//no se ejecuta la funcion, solo se pasa como parametro por eso no lleva parentesis, map se encarga de ejecutar la funcion por cada elemento del array.

console.log(pacientesConsultorioConEstado);

imprimirAsteriscos();

//Ejercicio de practica
/* 

En una carrera se tienen los siguientes corredores con su respectiva posicion:
    1 roberto
    2 andrea
    3 jorge
    4 Ramiro
    5 Sofia

despues de 3 vueltas, Jorge adelanta a roberto, ramiro adelanta a jorge y roberto se lesiona y sale de la carrea. ademas, andrea baja una posicion, ramiro mantiene su lugar y el quito lugar es reemplazado por jose.

*/


let corredores = [
    {
        nombre: "roberto",
    },
    {
        nombre: "andrea",
    },
    {
        nombre: "jorge",
    },
    {
        nombre: "ramiro",
    },
    {
        nombre: "sofia",
    },
];

console.log(corredores);

//jorge adelanta a roberto

corredores.unshift(corredores[2]);
corredores.splice(3, 1);
console.log("Jorge adelanta a roberto");
console.log(corredores);

//ramiro adelanta a jorge
corredores.unshift(corredores[3]);
corredores.splice(4, 1);
console.log("ramiro adelanta a jorge");
console.log(corredores);

//roberto se lesiona y sale de la carrera
corredores.splice(2, 1);
console.log("roberto se lesiona y sale de la carrera");
console.log(corredores);

//andrea baja una posicion al cuarto lugar
corredores.splice(2, 0, corredores[3]);
corredores.pop();
console.log(corredores);

//ramiro mantiene su lugar
console.log("ramiro mantiene su lugar");

//el quinto lugar es reemplazado por jose
corredores.push({ nombre: "jose" });
console.log("el quinto lugar es reemplazado por jose");
console.log(corredores);