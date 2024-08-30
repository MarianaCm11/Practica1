const express = require('express');
const router = express.Router();  // Crea una instancia del enrutador
var hora=require("../pruebas/middles").hora;
var bienvenida=require("../pruebas/middles").bienvenida;

// Define tus rutas
router.get('/',bienvenida,hora ,(req, res) => {
    res.send('Hello es raiz');
});

router.get('/venta',hora,bienvenida,(req, res) => {
    res.send('Hi es venta');
});

module.exports = router;  // Exporta el enrutador

