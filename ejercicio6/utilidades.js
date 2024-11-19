let esElegibleParaPrestamo  = (salario, puntaje) => {
    let res = ((salario >30000  && puntaje >= 650) ? 	"Elegible para préstamo" : "No elegible para préstamo");
    return res; 
}

export {esElegibleParaPrestamo };