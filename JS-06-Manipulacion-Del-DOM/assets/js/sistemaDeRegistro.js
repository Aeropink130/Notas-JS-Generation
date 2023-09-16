/*Sistema para registrar pacientes y mostrarlos en tarjetas*/

//primer paso, obtener todos los elementos de nuestro html y guardarlos en variables de js.


//Inputs separados, boton, texttodeconfirmacion

let nombrePaciente = document.getElementById("nombrePaciente");//input nombre
let edadPaciente = document.getElementById("edadPaciente");//input edad
let botonRegistrarPaciente = document.getElementById("btnRegistrarPaciente");//boton
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");//texto de confirmacion
// let contenedorTarjetas = document.getElementById("contenedorTarjetas");//contenedor de tarjetas

//Array para almacenar a mis pacientes
let pacientes = [];

//Funcion para registrar pacientes

function registrarPaciente() {

    //obtengo el atributo value de mis inputs
    let valorNombrePaciente = nombrePaciente.value;
    let valorEdadPaciente = edadPaciente.value;

    //Array par aguardar la información de mis pacientes
    let paciente = {
        nombre: valorNombrePaciente, //tomo el valor del input nombre y lo asigno a la propiedad nombre de mi objeto paciente
        edad: valorEdadPaciente,
        citas: []
    };

    //cuando tengo la informacion del paciente...
    pacientes.push(paciente);//agrego el objeto paciente a mi array pacientes (array.push(valorAAgregar))
    //Muestro Infor en consola
    mostrarInfoPaciente(paciente);//llamo a la funcion mostrarInfoPaciente y le paso como parametro el objeto paciente para que me muestre su informacion en la consola

    //2 Muestro Mensaje de confirmacion
    mensajeConfirmacion.textContent = "Paciente registrado con éxito!";

    //3Genera la tarjeta del paciente
    generarTarjetaPaciente(paciente);

    return paciente;

}//fin de la funcion registrarPaciente

// Funcion para mostrar la informacion del paciente en la consola
function mostrarInfoPaciente(paciente) {
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: ", paciente.edad); //31
    console.log("Citas registradas: ");
    //forEach para imprimir citas
    paciente.citas.forEach((cita, indice) => {
        console.log("Indice: " + indice + " Fecha: " + cita.fecha + " Hora: " + cita.hora)
    });
}//fin de la funcion mostrarInfoPaciente


//Funcion para generar la tarjeta de pacientes
function generarTarjetaPaciente(paciente) {
    //crear
    let tarjetaDiv = document.createElement("div");//aqui creo el div que contendrá la tarjeta
    tarjetaDiv.className = "col-sm-3 col-md-3 col-lg-3";//le asigno la clase col

    //crear el contenido de la tarjeta
    tarjetaDiv.innerHTML = `
    <div class="card border-info mb-3">
        <div class="card-header">Paciente</div>
        <div class="card-body">
            <h5 class="card-title">${paciente.nombre}</h5>
            <p class="card-text">Aqui podriamos agregar una breve descripcion de nuestro paciente.</p>
            <p>Edad: ${paciente.edad}</p>
        </div>
    </div>
`
    //poner
    contenedorTarjetas.appendChild(tarjetaDiv);//aqui le digo que el div que acabo de crear, lo ponga dentro del contenedor de tarjetas
}

botonRegistrarPaciente.addEventListener("click", registrarPaciente);