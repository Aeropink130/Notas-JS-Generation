console.log("holis");

/* Flujo de control 

Cuando habklamos de flujo de control hablamos del oreden natural en el que se ejecutan las instrucciones en nuestro programa. Estas isntrucciones pueden ser una función, un console.log, un cliclo etc

Lsa importancia que tiene el control de fjujo radica en la posibilidad de poder ejecutar cosas o isntrucciones dependiendo de una condicional (un elemento o instruccion detonante)

Condicionales

Las considicionales son palabras reservadas que nos permiten evaluar si una condición se cumple o no bajo ciertos criterios (estipulados por el programador). Las respuestas o salidas esperadas siempre partiran de un true o un false.

Tengo camisa limpia?
    sí: voy a la fiesta
    no: me quedo en casa

Condicional if (si)

If nos sirve para validar si una condición se cumple o no, si secumple entonces ejecutamos un bloque de código que esta dentro del if. Si no se cumple entonces no hacemos nada
Nota: es la más sencilla, pero la más limitante porque solo nos da una opción.

if (condicion){
    //bloque de código
}

*/

//Ejemplo: Felipe va a ir a una fiesta y necesita tener su camisa limpia para poder ir

let camisaLimpia = true;

if (camisaLimpia) {//tiene que ser true 
    console.log("Felipe va a la fiesta");
}

/* 

else(de otro modo, de lo contrario, si no)

if (condicion detonante){
    //bloque de código que se ejecuta si la condicion es verdadera
} else{
    //bloque de código que se ejecuta si la condición es falsa
}

*/

if (camisaLimpia = false) {
    console.log("Felipe va a la fiesta");//true
} else {
    console.log("Felipe no va la fiesta");//false
}

/*

else if

Esta condicion nos ayuda  a jugar con más opciones y más detonantes, para tener muchas posibilidades en el mismo código. Para lograr esto, vamos a unir el else con el if

if (condicion detonante){
    //bloque de código que se ejecuta si la condicion es verdadera
} else if (condicion detonante2){
    //bloque de código que se ejecuta si la condicion 1 es falsa y la 2 es veradera
} else{
    //bloque de código que se ejecuta si ambas condiciones son falsas.
}

*/

//Ejemplo 2: Felipe tiene hambre, y quiere comer chilaquiles

// if (hambre = true) {
//     console.log("Felipe va a comer");
// } else if (chilaquiles = verdes) {
//     console.log("Felipe come chilaquiles");
// } else {
//     console.log("Felipe no come y se pone triste");
// }

//ejemplo 3: Escribe un programa que em muestre 3 mensajes diferentes. primer mesaje: se muestra si son las 13hr y deberá imprimir "Vamos a descanso". el segundo mesaje se muestra si son las 14:30 y deberá imprimir "vamos a comer", el tercero se muestra si no se cumple nada imprime " lo siento mi ciela, segumimos programando"

//Prompt es una forma de ingresar datos y hacer uso de ellos

// alert("Hola Generation");

// let hora = prompt("Hola, dime una hora");

// let hora = 17; antes del prompt

if (hora == 13) {
    alert("vamos a descanso");
} else if (hora == 14) {
    alert("Vamos a comer");
} else {
    alert("Lo siento mi ciela, seguimos programando");
}

/* 
Switch (cambiar o intercambiar / según sea el caso)

Esta condicional nos permite hacer multimples operaciones y tomar desiciones en función de la opción deseada (estado de la variable)

Evalua una expresion comparando el valor de una variable con la expresion o caso, y ejecuta las declaraciones asociadas con ese caso, así como los casos que siguen.

Elementos principales del switch: un valor a evaluar, un detonante para cada caso, una salida para cada caso y una salida en general.

switch (expresion){
    case 1:
        //bloque de código que se ejecuta si la opción seleccionada es igual a 1
        break;
    case 2:
        //bloque de código que se ejecuta si la opción seleccionada es igual a 2
        break;
    case 3:
        //bloque de código que se ejecuta si la opción seleccionada es igual a 3
        break;

    default:
        ////bloque de código que se ejecuta si ninguna opción coincide
    
    }


*/

// let op = parseInt(prompt("A que piso vas"));

switch (op) {
    case 1:
        alert("Llegaste al piso 1");
        break;
    case 2:
        alert("Llegaste al piso 2");
        break;
    case 3:
        alert("Llegaste al piso 3");
        break;
    case 4:
        alert("Llegaste al piso 4");
        break;
    case 5:
        alert("Llegaste al piso 5");
        break;
    default:
        alert("Opción no válida")
}


//Funciones aplicables a un consultorio dental

let tipoServicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFrecuente;
let costo;


function calcularConsulta(tipoServicio, tiempoConsulta, emergencia, promocion, clienteFrecuente) {
    tipoServicio = "extraccion";
    tiempoConsulta = 120;
    emergencia = true;
    promocion = .10;
    clienteFrecuente = true;
    costo = 5000;

    //calcular costo total antes de ver si es cliente frecuente
    let costoTotal = costo - promocion;

    if (clienteFrecuente) {
        //invocamos función para calcular 
    }
}

function calcularCostoConsultaDos(duracionMinutos, costoPorMinuto, clienteFrecuente) {
    let costoTotal = duracionMinutos * costoPorMinuto;

    if (clienteFrecuente) {
        costoTotalConDesceunto = (costoTotal * .10)
    }
}

function registrarPaciente() {

}

function guardarPaciente() {

}

if (pacienteRegistrado = true) {
    console.log("Paciente con registro previo")
} else {
    function guardarPaciente() {

    }
}


/* 
*1 condicion para cada tipo sentencia

if-else (pase a la cita)
Lista: 
-saber si el usuario pagó

let usuarioPago = true;

if (usuarioPago) {
    console.log(“El usuario ha pagado”);
} else {
    console.log(“El usuario no ha pagado, págueme!”);
}

if-else if- else (horario del consultorio dental)

Lista else if:
Verificar horario del consultorio (de 7 am a 1 pm y de 2 pm a 5 pm)
Descanso de 1 pm a 2 pm
Entrada después de las 7 am. salida después de las 5 pm. no se aceptan citas después de las 4:20
Determinar el primer bloque de horas de consulta 
Determinar bloque de descanso
Determinar segundo bloque de horas de consulta

Saber a qué hora está abierto el horario
If - 	Si vas por la mañana (7 am - 12:20 pm)
        Si está abierto
Else if 	Si vas al mediodía (1 pm - 2 pm)
        Está cerrado por descanso para el doc
Else - 	Si vas por la tarde (2 pm - 4:20 pm)
        Sí está abierto

let horario = prompt(“Ingrese el horario, Mañana, Mediodía o Tarde”);
if (horario == “mañana”) {
    console.log(“Está abierto, horario 7 am - 12:20 pm”); //12:20 última cita antes de comer)
} else if (horario == “mediodía”) {
    console.log(“Cerrado por horario de almuerzo, 1 pm - 2 pm”);
} else {
    console.log(“Está por cerrar el consultorio, horarios de 2 pm a 4:20 pm”); //4:20 😮
}




switch (se elige especialidad y se muestra qué doctor atiende)
Lista:
-El paciente sabrá su especialidad
-El paciente quiere saber qué especialista le dará la consulta

let especialistaPorTratamiento = parseInt(prompt(“Elige una especialidad, 1. Extracción 2. Limpieza 3. Ortodoncia”));
//extraccion = 1;
//limpieza = 2;
//ortodoncia = 3;

switch (especialistaPorTratamiento){
    case 1:
    console.log(“Para extracción se tendrá al Dr. Fulano”);
    break;

    case 2:
    console.log(“Para limpieza se tendrá a la Dra. Fulana”);
    break;

    case 3:
    console.log(“Para ortodoncia se tendrá a la Dra. Perengana”);
    break;

    default:
    console.log(“Elija una opción válida”);
}



*/