// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

const formYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.87/156.5;
    return valueInPound;
}

// PODRIA A VER CREADO UNA CONST Y PONER LOS TRES VALORES "JPY", "USD", "GBD"

const sum = (a,b) => {
    return a + b
}

console.log(sum(7, 3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, formYenToPound};