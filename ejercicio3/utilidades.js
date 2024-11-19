let categoriaIMC   = (IMC) => {
    let indice = (IMC<18.5 ? "Bajo peso" : IMC>18.5 && IMC<24.9 ? "Normal" : "Sobrepeso" );
    return indice; 
}

export {categoriaIMC};