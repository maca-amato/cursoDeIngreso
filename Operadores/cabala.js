function esNumeroDeLaSuerte(numero) {
    return numero > 0 && (numero % 2 == 0 || numero % 3 == 0) && numero != 15;
}
console.log(esNumeroDeLaSuerte(5)) //false