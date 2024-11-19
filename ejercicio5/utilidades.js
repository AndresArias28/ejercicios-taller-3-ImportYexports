let esBisiesto     = (anio) => {
    let res = ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) ? "Es bisiesto" : "No es bisiesto" ;
    return res; 
}

export {esBisiesto};