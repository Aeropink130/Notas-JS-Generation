/* 

Api de almacenamiento web

Nos permte almacenar iformación en nuestro navegador, de 2 formas:

    -Local: persistensia de los datos
    -Sesión: Los datos son volátiles

Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.

*/

/* 

Almacenamiento local (Local Storage)

la informacupin que oingamos en un alamacenamiento local se guarda indefinidamente hasta que sea eliminada por codigo o borradad del navegador

casos de uso: artículos de un carrito de compras, cuando guardamos un perfil de configuración, historial de uso.




*/

//localStorage.setItem(key, value)
localStorage.setItem("Nombre", "Juanito");
localStorage.setItem("Apellido", "Laboriel");
localStorage.setItem("Edad", "71");

//Guardando un carrito de compras
let carrito = [
    "sabritones", "cocacola", "chicles", "tortillas"];

localStorage.setItem("CarritoCompras", carrito);

//Obtener la información almacenada en mi localStorage

//localStorage.get item(key);
let apellido = localStorage.getItem("Apellido");

//recuperando el carrito de compras 
let carrito2 = localStorage.getItem("CarritoCompras");
console.log(carrito2);

//borrar un elemento del localstroage
//localStorage.removeItem(key);
localStorage.removeItem("CarritoCompras");

//conocer el largo o longitud del localsotrage
//localStorage.length;

let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);

//Para modificar datos con set
localStorage.setItem("Nombre", "Pedro");