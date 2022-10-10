function puedeSubirse(alturaPersona, vieneConCompania, tieneAfeccionCardiaca){
    return ((alturaPersona >= 1.5) || (alturaPersona >= 1.2 && vieneConCompania)) && !tieneAfeccionCardiaca;
}

console.log (puedeSubirse (1.7, false, true))