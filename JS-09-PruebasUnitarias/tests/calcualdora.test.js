
const calculadora = require('../calculadora');

//console.log(calculadora.suma);

// prueba unitaria
test('debe sumar numero a + b', () => {
    expect(calculadora.suma(10, 10)).toBe(20)//toBe es un metodo de jest
});

test('debe restar numero a - b', () => {
    expect(calculadora.resta(20, 10)).toBe(10);
});

test('debe multiplicar numero a * b', () => {
    expect(calculadora.multiplicacion(3, 2)).toBe(6);
});

test('debe dividir numero a / b', () => {
    expect(calculadora.division(15, 2)).toBe(7.5);
});

//prueba unitaria
// test('Se prueba toda la calculadora', () => {
//     expect(calculadora.suma(10, 10)).toBe(20);//toBe es un metodo de jest
//     expect(calculadora.resta(20, 10)).toBe(10);
//     expect(calculadora.multiplicacion(3, 2)).toBe(6);
//     expect(calculadora.division(10, 2)).toBe(5);
// });