/*

DOM (Document Object Model)

Cuando creamos págians que usan html más css estamos creando páginas más estáticas (porque no tienen interactividad),cuando agregamos js, nuestras páginas se convierten en sitios más dinámicos (porque tienen interactividad).

El navegador de nuestro documento html lee de arriba hacia abajo y de izquierda a derecha (renderización).

Para que una página se renderice correctamente, se toma en cuenta el contenido, el peso de las imágenes, la conexión a internet, etc.

Cuando el documento se renderiza. se crea un "árbol" (DOM), tiene muchas ramas que son las etiquetas y cada uno de los elementos que tenemos dentro de esas etiquetas se consideran "hojas" (nodos).

Cuando hablamos del DOM y entendemos que se representa omo un árbol con ramas y hojas, entendemos que cada una de estas ramas y hojas es un nodo.

Qué es un nodo?
Representación  más básica de lo que existe en un DOM, puede ser un elemento o etiqueta, puede ser un atributo, puede ser un texto, incluso puede ser un comentario.

    Document: Nodo raíz, a partir  del cual se derivan los demás nodos. Es el objeto a partir del cual se puede acceder a cualquier elemento dentro de él. Todos los nodos derivan de este.

    Element: Son nodos definidos por etiquetas html, por ejemplo div, h1, p, img, meta, head, scritp, etc, ya sea que se vean o no se vean (etiquetas que interpretan los navegadores).

    Text: El texto que hay dentro de un elemento se considera un nodo, con la característca  que es un nodo hijo.

    attributes: Los atributos de las etiquetas también se convierten en nodos, son nodos asocioados que están asiciados a  un elemento y se pueden considerar como nodos hijos.

    Comment: Los comentarios también son un nodo, porque forma parte del documento


    para qué utilizamos js en un DOM?
        -Agregar elementos HTML
        -Modificar elementos HTML
        -Borrar elementos HTML

*/


//Comenzamos a trabajar con los nodos de mi documento html

//Primer paso: guardar los elementos html en variables de js (let, const, var)

/*Métodos de seleccion de elementos: permiten traer una etiqueta de html y guardarla para su uso posterior

    -métodos tradicionales:
        -getElementById: permite seleccionar un elemento por su id (trae un elemento por ID)
        -getElementsByTagName: permite seleccionar un elemento por su etiqueta ()
        -getElementsByClassName: permite seleccionar un elemento por su clase


*/

//traer elemento por ID -tal-
let nombrePaciente = document.getElementById("nombrePaciente");

//Imprimió toda la etiqueta de HTML, desde el input
console.log(nombrePaciente);

//Toda la información quie podamos obtener por el formulario, es a través del value.
//Aquí obtenermos varios elementos por clase
const columnas = document.getElementsByClassName("col");
console.log(columnas);


//Aquí obtengo varios elementos por etiqueta
const inputs = document.getElementsByTagName("input");
console.log(inputs);


//Todo lo quie empieze con el prefijo "ON" se tratará de eventos o animaciones.



/*
Métodos actuales

La única diferencia entre el querySelector y el getEkement, es que tenemos que especificar el tipo de selector que usaremos (. para las clases, # para los id)

    - document.querySelector
    - document.querySelectorAll

Si tenemos 5 contenedores padre, y solo me traigo 1. con el individual.

*/


//Aquí obtengo UN elemento por el selector #
let containerPadre = document.querySelector("#containerPadre");
console.log(containerPadre);

//Aquí obtengo varios elementos por el selector


/*
Métodos para modificar elementos en su texto

    - innerHTML: esta propiedad nos permite acceder y modificar el contenido de nuestro elemento. O sea, modificar el texto que tenga. Asignamos una cadena de texto y podemos modificar o eliminar el texto.
    s(Cuando YA existe un texto)


    - textContent: Cambiar o recuperar el contenido dentro de un elemento. Podemos modificar o eliminar el texto.
    (CREAR un texto NUEVO)


*/

//Modificando el texto de un h1 con innerHTML

let titulo = document.getElementById("titulo");

titulo.innerHTML = "Nuevo texto de mi título";

//Creando un nuevo texto con innerHTML
let mensajeDeConfirmacion = document.getElementById("mensajeDeConfirmacion");
mensajeDeConfirmacion.innerHTML = "<p>Mensaje de confirmación</p>";

/* 

Crear elementos

    -Crear el elemento
        -createElement
        -createTextNode
        -createComment

    -Poner el elemento
        -append
        -appendChild

*/

//Creando un elemento con createElement
let imagen = document.createElement("img");

//crear los atributos de la imagen
imagen.src = "https://soyunperro.com/wp-content/uploads/perrocontento.jpg";
imagen.alt = "Perro feliz";

// Poner mi imagen dentro del contenedor de mensajeDeConfirmación
mensajeDeConfirmacion.appendChild(imagen);

