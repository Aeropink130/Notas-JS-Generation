/* 

Condiciones: alterar el orden natural del código
Estructura de control: controlar la ejecucion del código

Ciclos o bucles

Tambien conocidos como bucles, son estructuras de control que nos van a permitir ejecutar un bloque de código de forma repetida, hasta que se cumpla una condición especifica.

Es importante usar ciclos para automatizar tareas

En SJ existen los siguientes ciclos:
    -while
    -do while
    -for

Iterar: El proceso de repetir una secuencia de instruciones
Estructura de control: Herramienta especial para crear algoritmos o programas más dinámicos y flexibles.


*/


// While: Ejeccuta un bloque de código mientras se cumpla una condición específica. Este ciclo se repite mientras la condición sea verdadera, y el bloque de código se ejecuta siempre y cuando la conndicion se mantenga. La condición se evalúa antes de cada iteración

//while (condicion){
//código que se ejecuta
// }

/*
while (miCrushMeQuiere) {
    console.log("Sere Feliz");
    miCrushMeQuiere = false;
}
*/

//nota esto significa peligro

/* 
ciclo infinito
while (true){

}

Analogía: Seguir una receta para preparar sopa

Lista de ingredientes:
    -Zanahoria
    -Papas
    -Chayote
    -Limon
    -Agua
    -Espinaca

Vamos a agregar los ingredietnes a la olla mientras tengamos ingredientes disponibles

Paramos cuando ya no tengamos ingredientes.


*/

let capacidadPacientes = 50;
let pacientesEnConsultorio = 15;

//mientras 15 sea menor a 50
while (pacientesEnConsultorio < capacidadPacientes) {
    //seguiré dando servicio
    console.log("Seguimos dando servicio");
    //aumento en 1 mis pacientes
    pacientesEnConsultorio++;
}
//Mientras sea verdadero , se ejecuta la instrucción

/* Do while

//Se ejecuta la isntrucción, mientras sea verdadero


el bucle do while se diferencia del while ya que aquí se ejecuta la isntrucción al menos una vez, y luego se pregunta para saber si se sigue ejecutando o no.

do{
    //código a ejecutar
} while (condición);


Analogía: Cuando preparamos un pastel y picamos con un palillo para saber si sigue crudo

*/

var contadorPacientes = 0;

do {
    var nombre = prompt("Ingres el nombre del paciente");
    if (nombre) {
        contadorPacientes++;
    }
    if (contadorPacientes == 15) {
        break;
    }
} while (confirm("Desea registrar otro paciente?"));

console.log("Número de pacientes: ", contadorPacientes);

/* 

For (para)

Se utiliza cuando sabemos el número exacto de iteraciones que vamos a realizar
Consiste en 3 partes fundamentales:
 -Inicialización: se ejecuta antes de qie eñ bucle comience y se usa para establecer una variable de control (Variable de inicio)
 -Condición: es el detonante que verificamos antes de cada iteración, para saber si se sigue ejecutando o no (siempre y caundo sea verdadera)
 -Expresion de iteración (contador): tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre


for(inicializacion; condición; expresión de iteración){
    //bloque de código a ejecutar
}

*/

//Crea un código que imprima los números del 0 al 4

for (var valorInicial = 0; valorInicial < 5; valorInicial++) {
    console.log(valorInicial);
}

//version más comercial

for (var i = 0; i < 5; i++) {
    console.log(i);
}

// Consultorio dental

let cantidadCitasDiarias = 5;

for (let i = 1; i <= cantidadCitasDiarias; i++) {
    var nombre = prompt("Ingrese el nombre del paciente " + i);

    console.log("Paciente " + nombre + " con cita " + i);
}

let limpiezasDisponibles = 5;//O también let limpiezasDisponibles = prompt(“¿Para cuántas limpiezas tienes material hoy?”);
let limpiezas = 0;
do {
    console.log("Haciendo limpieza ", limpiezas + 1);
    limpiezas++;
    if (limpiezas == limpiezasDisponibles) {
        console.log("Última limpieza hecha, se acabó lo que se vendía.");
    }
} while (limpiezas < limpiezasDisponibles);

let articulos = 0;
let seguirComprando = true
do {
    articulos++;
    console.log("Estás comprando, tienes " + articulos + " en tu carrito");
    seguirComprando = confirm("Quieres seguir comprando ?");
} while (seguirComprando);

for (let ventasActuales = 0; ventasActuales < 10; ventasActuales++) {
    console.log("Tienes " + ventasActuales + " ventas actualmente, continúa así para ser vendedor destacado");
} console.log("Felicidades, has obtenido la insignia de vendedor destacado por completar 10 ventas");
