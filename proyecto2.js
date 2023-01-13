let iva = 0.19;
let presioFinal;

function calcularIva (precio){
    let ivaProducto = precio * iva;
    console.log(`El iva de su producto es: ${ivaProducto}`)
    presioFinal = precio -ivaProducto;
}

calcularIva(100000)