var bienvenida = (req, res, next) => {
    console.log("Aloja Hawai");
    next();
}

var hora = (req, res, next) => {
    // Crear una nueva instancia del objeto Date
    const ahora = new Date();

    // Obtener la fecha y la hora en un formato legible
    const fechaHora = ahora.toLocaleString();

    // Imprimir la fecha y la hora en la consola
    console.log("Hora y fecha de la solicitud: "+fechaHora);

    // Pasar al siguiente middleware o ruta
    next();

}


module.exports.bienvenida=bienvenida;
module.exports.hora=hora;