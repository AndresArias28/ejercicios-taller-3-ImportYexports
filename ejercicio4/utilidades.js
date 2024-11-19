let nivelRiesgo    = (edad, bol) => {
    let res = ((edad>60 && bol == true) ? "Alto riesgo"  : (edad<60 && edad>40 && bol == true)  ? "Riesgo moderado" : "Bajo riesgo" );
    return res; 
}

export {nivelRiesgo };