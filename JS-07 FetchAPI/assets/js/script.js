/* 

Retomando las apis

    -APIS internas (API DOM, localStorage, Drag and Drop, etc): son todas las APIS que vienen por default en el navegador.
    -APIs externas (Google Mpas, PokeApi, FakeStore API, API paypal, etc): Son todas aquellas que tenemos que utilizar de proovedores externos.

    Ejemplo de licuadora, donde la licuadora es el cliente, el enchucfe la API y el proveedor es la empresa de luz.

    Ventajas de las APIs
        -Reestructurar y organizar los sistemas de forma que sean más sencillos de utilizar.
        -Permiten que los sistemas sean más robustos.
        -Reduce los costos de mantenimiento.
        -Permiten que nuestros sistemas sean más flexibles y escalables.

*/

/* 

Asincronía

por defecto js se comporta de forma sincrona, es decir, que ejecuta una linea de codigo a la vez, de arriba hacia abajo y de izquierda a derecha. Es decir que utilizamos js de una forma autobloqueante (si hay un error, lo que esta debajo no se ejecuta).

*/

//ejemplo de una operación sincronica
// console.log("inicia mi operación sincronica");

// function dosSincronico() {
//     console.log("dos");
// }

// function unoSincronico() {
//     console.log("uno");
//     dosSincronico();
//     console.log("tres");
// }

// unoSincronico();
// console.log("termina mi operación sincronica");

//Los casos donde me conviene tener operaciones sincronas , son: lectura de arrays, uso de algunos metodos de arrays , condicionales, ciclos, ejecución de funciones "normales".

/* 

Asincronía

Es l acapacidad que tiene JS para poder ejecutar fuciones que no depaendan de otras. Esto nos ayuda a ejecutar ciertos bloques de código sin tener que esperar a que termine su ejecución, para ejecutar otras lineas de código. (dejar la carne en el asador mientras preparo otras cosas en el ejemplod e la carne asada)

*/


//Operación asincrona

// console.log("inicia mi operación asincronica");
// function dosAsync() {
//     console.log("uno");
//     setTimeout(function () {//setTime para ejecutar esta funcion después de 3 segundos
//         console.log("dos");
//     }, 3000);
// }

// function unoAsync() {
//     dosAsync();
//     console.log("Tres");
// }

// unoAsync();
// console.log("termina mi operación asincronica");

/* 

Mecanismos para manejar la asincronia

Para controlar la asincronia en js, podemos usar algunos de estos mecanismo:
    
        -Callbacks: la forma más clásica de manejar la asincronía. se le conoce como "llamada de vuelta", básicamente es pasar una funcion como argumento de otra función y se ejecuta una vez que se cumpla la condición esperada.

        //Método .map de los arrays

        -Promesas: Son objetos que van a representar un valor al momento de conectar con el servidor. Como su nombre lo indica, una promesa es algo que no sabemos si se va a cumplir o no, pero al menos necesitamos saber que hacemos su se cumple o no se cumple. la ventaja que tienen las promesas, es que no se anidan, en una sola función podemos manejar ambas situaciones.

        Las promesas tienen 3 estados posibles:

            -pending: estado inicial, cuando se crea la promesa. Aquí no hay resultaods.
            -fulfilled: la operación asincrona se cumplió con exito. (resolve)
            -rejected: cunado la operacion asincrona falla. (reject)



        -Async/Await

*/

//funcion especial para consumir apis y manejar promesas

//instrucción de la conexión a mi servidor
// fetch("https://fakestoreapi.com/products/1")

//     //dos escenarios (obtengo respuesta o no obtengo respuesta)
//     .then(datos => {//cuando la promesa se resuelve, ejecuta esta función
//         console.log(datos);
//         return datos.json();//convertir la respuesta en un objeto json
//     })

//     .catch(error => {
//         console.log("Error, no encontramos el producto");
//         console.log(error);
//     })


/* 
Sintaxis del fetch (con promesas)

fetch (url a consumir)
    .then (response => response.text))//manejo la respuesta
    .then (datos => console.log(datos))//manejo el dato

    .catch (error => console.log(error))


*/

//asigno el fetch a una variable...
const conexion = fetch("https://fakestoreapi.com/products/1");

//imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto Promesa: ", conexion);

//referencia a mi fetch para poder usar sus metodos
conexion

    //usar el metodo then para manejar la respuesta(lo relleno con la respuesta)
    .then(function (resultado) {
        console.log("Dentro de esta funcion que maneja la respuesta, encontraras: ", resultado);
        return resultado.json();
    })

    //uso el metodo then para manejar el producto(lo rellenoo con la info del producto)
    .then(function (producto) {
        console.log("Informacion del producto: ", producto);
    })

    //uso el metodo catch para manejar el error (lo relleno con un error para que la caja no regrese vacia)
    .catch(function (error) {
        console.log("Error", error);
    })

/* 
 
para entenderlo mejor se podría escribir así:
conexion.then().then().catch();
 
*/


//producto como respuesta de un servidor en formato plano (texto)
let productoServidor = { "id": 17, "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats", "price": 39.99, "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.", "category": "women's clothing", "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg", "rating": { "rate": 3.8, "count": 679 } }


//producto como objeto JSON
let productoJSON = {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
        rate: 3.8,
        count: 679
    }
}

//Revisar informacion de un objeto con texto plano
console.log(productoServidor.price);

//Revisar informacion de un objeto tipo JSON
console.log(productoJSON.price);


//Objeto json que voy a mandar a un servidor
let paciente = {
    nombre: "Felipe",
    edad: 31,
    estatus: "Registrado"
}

console.log(paciente);
//Necesito convertirlo a una cadena de texto para que el servidor lo lea
let pacienteStringifeado = JSON.stringify(paciente);
console.log(pacienteStringifeado);

let pacienteServidor = '{"nombre":"Felipe","edad":31,"estatus":"Registrado"}';
let pacienteJSON = JSON.parse(pacienteServidor);
console.log(pacienteJSON);



//Método post para enviar un nuevo producto a nuesra BD de la FakeStoreAPI

fetch('https://fakestoreapi.com/products', { //endpoint
    method: "POST", //específicar el tipo de método
    body: JSON.stringify(// instrucción para serializar el cuerpo de mi solicitud (para la interpretación del servidor)
        {
            title: 'Sopa Maruchan Pozole',
            price: 15.5,
            description: 'Una no tan deliciosa sopa maruchan de habanero',
            image: 'https://pbs.twimg.com/media/C09hJZ5WEAA_bD2.jpg',
            category: 'Sopas Instantaneas'
        }
    )
})
    .then(res => res.json())//metodo para la respuesta (saber que mi producto llegó con bien al servidor)
    .then(json => console.log(json))//impresion en consola de la respuesta


/* 

fetch('https://fakestoreapi.com/products',{ //endpoint
            method:"PUT", //especificar el tipo de metodo
            body:JSON.stringify( //instruccion para serializar el cuerpo de mi solicitud (para la interpretacion del servidor)
                {
                    id: 1,
                    title: inputTitulo.value,
                    price: inputPrecio.value,
                    description: inputDescripcion.value,
                    image: inputImagen.value,
                    category: inputCategoria.value
                }
            )
        })
            .then(res=>res.json()) //metodo para la respuesta (saber que mi producto llego con bien al servidor)
            .then(json=>console.log(json))//impresion en consola para revisar la info

*/