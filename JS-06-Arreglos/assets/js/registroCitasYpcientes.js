/*Sistema para registrar pacientes y citas de estos pacientes, utilizando metodos de arrays
Lista de cosas por hacer / cosas por tomar en cuenta
    -Un array para los pacientes
    -Un array para las citas

    -Prompt para registrar los datos del paciente
    -Datos a registrar: nombre, apellido, fecha, edad, hora, especialista
    -Funcion para registrarPaciente
    -Funcion para registrarCita
    -Metodos para modificar los arrays(push, foreach, splice)

*/

//Crear un array para los pacientes

//la variable pacientes esta declarada e inicializada (tiene un nombre de variable y un valor asignado, aunque este valor sea un array vacio)
//los indices del array están undefined, porque no hay elementos en el array pero sí hay espacio para ellos
let pacientes = []; //definido


//Funcion para registrar pacientes
//paso 1: ejecución 
function registrarPaciente(nombre, edad) {
    //crear un array dentro de la funcion para guardar los datos del paciente
    //paso 
    let paciente = {
        nombre,
        edad,
        citas: []
    };

    //agregar el paciente al array
    pacientes.push(paciente);
    return paciente;
}

//funcion para registrar citas
//cuando ejecuto mi funcion, necesito pasarle como parametros el paciente, la fecha y la hora
function registrarCita(paciente, fecha, hora) {
    //Cuando tenga estos datos, buscare dentro del paciente el apartado de citas para hacerle un push
    paciente.citas.push(
        {
            fecha,
            hora
        }
    );
}

//funcion para mostrar el paciente con sus citas

function mostrarInfoPaciente(paciente) {
    console.log("Nombre del paciente: " + paciente.nombre);
    //imprimimos edad del paciente con string template
    console.log(`Edad del paciente: ${paciente.edad}`);
    console.log("Citas del paciente: ");
    //iteramos el array de citas del paciente


}



//registrar un paciente desde la invocaion de la funcion
let paceinte1 = registrarPaciente("Juan", 25);
let paceinte2 = registrarPaciente("Naruto", 20);
let paceinte3 = registrarPaciente("Dr. Simi", 50);
//registrar una cita desde la invocacion de la funcion
registrarCita(paceinte1, "20-02-2020", "10:00");

//mostrar la informacion del paciente
mostrarInfoPaciente(paceinte1);
mostrarInfoPaciente(paceinte2);
mostrarInfoPaciente(paceinte3);



/* Foreach

Es un metodo que recorre un array y ejecuta una funcion por cada elemento del array con la finalidad de aplicarle una funcion a cada elemento del array

Generalmente se utiliza para imprimir los elementos del array

sintaxis de foreach

array.forEach(function(elemento, indice, array))

    -elemento: elemento actual que se esta procesando
    -indice: indice del elemento actual que se esta procesando
    -array: array original sobre el que se esta iterando

    ejemplo supermercado

-elemento: producto que compre
-indice: la posicion del producto en el carrito
-arreglo: el carrito del super

*/

let carritoSuper = ["Leche", "Huevos", "Pan", "Queso", "Cereal", "Jamon", "Cafe"];

//imprimir los elementos del carrito del super
carritoSuper.forEach(function (producto, indice) {
    console.log("Producto: " + producto + " Indice: " + indice);
});