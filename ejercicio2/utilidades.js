let calcularDescuento  = (precio) => {
    let precioFinal = (precio>1000 ? precio - precio*0.2 : precio <500 ? precio : precio - precio*0.1);
    return precioFinal; 
}

export {calcularDescuento};