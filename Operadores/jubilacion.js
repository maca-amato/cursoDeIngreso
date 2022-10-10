function estaEnEdad (edad, genero){
    return (edad >= 60 && genero == "F") || (edad >= 65 && genero == "M")
}

function tieneSuficientesAportes (aniosAporte) {
    return aniosAporte >= 30;
} 

function puedeJubilarse(edad, genero, aniosAporte) {
    return estaEnEdad(edad, genero) && tieneSuficientesAportes(aniosAporte);
}

console.log(puedeJubilarse(66, "M", 40))

//mujer F 60 - hombre M 65. 30 anios aportes

