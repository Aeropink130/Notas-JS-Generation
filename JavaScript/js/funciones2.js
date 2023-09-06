//Funciones
//Programa para hacer limonada

function exprimirLimones(cantidadLimones) {
    console.log("Exprimiendo " + cantidadLimones + " limones.");
    let jugoExtraido = cantidadLimones * 10;//considerando obtener 10 ml de jugo por cada limon
    console.log("Se obtuvo " + jugoExtraido + " ml de jugo de limon");
    return jugoExtraido;
}

//funcion para mezclar el jugo con agua y azúcar
function mezclarJugoDeLimon(cantidadJugo, cantidadAgua, cantidadAzucar) {
    console.log("Mezclando " + cantidadJugo + " ml de jugo con " + cantidadAgua + " ml de agua y " + cantidadAzucar + " gr de azucar.");
}

//funcion para servir la limonada
function servirLimonada() {
    console.log("Sirviendo la limonada en un vaso.");
    vasoDeLimonada = true;
}

//Funcion principal que prepare la limonada
function prepararLimonada(cantidadDeLimon) {
    let jugoDeLimon = exprimirLimones(cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10);//cantidades ficticias de jugo de limon, agua y azucar
    servirLimonada()
}

//llamar la funcion principal
var vasoDeLimonada = false;
prepararLimonada(5);

