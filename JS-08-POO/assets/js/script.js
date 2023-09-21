/*Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.

    Clase: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crar instancias (materializacion) de este tipo de objetos.

    Objeto: Materializacion de la informacion o los datos con los que cuenta mi plantilla o clase.

    MOstrar un objeto similar a este
    let felipe = {
    nombre : "Felipe",
    apellido : "Maqueda",
    edad : 31,
    email : "felipemaqueda@mail.com",
    telefono : "1234567890",
}
*/




//Creando mi primera clase

class persona {
    //1 Porpiedades ya tributos de mi clase de forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";


    //3 Defino un constructor que tomará los atributos como "material" para la creacion de mis objetos
    //El constructor es una funcion especial cuya funcion es la de construir o instanciar obetos
    //Al pasar los atributos como parametros, es importante cuidar el orden en como fueron declarados
    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    //2 Metodos o comportamientos (funciones)
    //Para definir lo métodos de mi objeto ya no utilizo la palabra function (porque están dentro de la clase).
    hablar() {
        console.log("hola, estoy hablando...");
    }//cierre del metodo hablar

    dormir() {
        console.log("Zzzzzzzz");
    }//cierre del metodo dormir

    mostrarInfo() {
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
    }//cierre del metodo mostrarInfo

}//cierre de la clase persona


/* Instancia de objetos del tipo persona

variable nombreObjeto = palabra reservada new nombreClase(parametros o atributos)

*/

let persona1 = new persona("Felipe", "Maqueda", 31, "felipemaqueda@mail.com", "1234567890");
let persona2 = new persona("Naruto", "Uzumaki", 45, "Naruto@mail.com", "0987654321");
let yo = new persona("Antonio", "Salcido", 28, "antonio@mail.com", "1122334455");

console.log(persona1);

//imprimir un atributo de mi objeto
console.log(persona1.apellido);

//invocar el metodo del objeto
persona1.dormir();
persona2.hablar();
yo.mostrarInfo();

/* 
existen 4 pilares de la POO que nos permiten ampliar la caracteristicas y dotar de funcionalidades y operaciones a nuestro código.

    -Herencia
    -Polimorfismo
    -Encapsulamiento
    -Abstraccion


*/

//Creando un anueva clase para aplicar la herencia

class paciente extends persona {
    //1 definicion de atributos o propiedades
    doctorAtiende = "";//nombre del doctor que atiende
    historial = "";//si o no tiene historial medico
    alergias = "";//alergias existentes

    //3 constructor
    constructor(nombre, apellido, edad, email, telefono, doctorAtiende, historial, alergias) {
        super(nombre, apellido, edad, email, telefono);//super indica que traemos cosas de la clase superior

        this.doctorAtiende = doctorAtiende;
        this.historial = historial;
        this.alergias = alergias;

    }

    //2 metodos o comportamientos
    mostrarInfo() {
        // super.mostrarInfo();
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
        console.log("Doctor que atiende: ", this.doctorAtiende);
        console.log("Historial: ", this.historial);
        console.log("Alergias: ", this.alergias);
    }

}//cierre de la clase paciente


//instancias de la clase paciente
let paciente1 = new paciente("Pedito", "Sola", 130, "mayonesa@gmail.com", "7788994455", "Dr. Simi", "No tiene", "Penicilina");

//Imprimir objeto paciente1
console.log(paciente1);

//invocar el metodo mostrarInfo
paciente1.mostrarInfo();

//Diferencias entre un objeto literal y un objeto del tipo JSON (dice felipe uqe las comillas)

//todas las claves y los valores van entre comillas
//Todas las claves y los valores van dentro de comillas
//Envio de información a servidores
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}

//Tratar la información y sacar datos específicos para el DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}



/* 

Realizar un programa que conste de una clase llamada Alumno, que tena como atributos el nombre y la nota del alumno. Definir metodos para inicizializar sus atributos (metodo constructor), imprimirlos y mostar un mensaje con el resultado de la nota si ha aprobado o no.

    Atributos:
        -nombre
        -nota()

    Metodos:
        -constructor
        -imprimir (nombre y nota)
        -evaluación (si aprueba o no)

    Lógica del negocio:
        -If para evaluar la nota (si la nota es menor a 6, está reporbado)
        -Recuperamos la info por medio de un prompt
        -Generamos 3 instancias para probar mi código (la nota sea igual a 6, la nota sea mayor a 6 y la nota sea menor a 6)
*/

class alumno {

    //Atributos
    nombre;
    nota;

    //Constructor donde le di indentidad a mi objeto
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    //Métodos
    //metodo general que no requiere personalización porque aplica para cualquier objeto

    evaluacion(nota) {
        if (nota >= 6) {
            console.log("Aprobado");
        }
        else {
            console.log("Reprobado")
        }
    }


    imprimirInfo() {
        console.log("Alumno: ", this.nombre);
        console.log("Nota: ", this.nota);
    }

}//cierre de la clase alumno


//Intancias de alumno (3 escenarios)
let alumno1 = new alumno("Felipe", 3);
let alumno2 = new alumno("Felipe", 8);
let alumno3 = new alumno("Felipe", 6);

alumno1.imprimirInfo();
alumno1.evaluacion(alumno1.nota); //invocar el metodo evaluacion de esta
alumno2.evaluacion(alumno2.nota); //invocar el metodo evaluacion de esta
alumno3.evaluacion(alumno3.nota); //invocar el metodo evaluacion de esta