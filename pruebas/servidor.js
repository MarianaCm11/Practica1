const express = require("express"); //se llama a express //1
const rutas=require("../routes/rutas");
const app = express();
 
app.use("/",rutas);

const port = process.env.PORT || 3000 //aqui esta arrando el 80pq ya tiene variable del PORT 
app.listen(port,()=>{
    console.log("Servidos en http://localhost:"+port);
});