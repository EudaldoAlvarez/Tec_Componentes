require("dotenv").config();
const express = require("express");
const cors = require("cors");

//Componentes
const User = require("./Componentes/User/User");
const Tareas = require("./Componentes/Tareas/Tareas")
//Express config
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());//Necesario para desarrollo o si es un API publica

//registrar componentes
app.use("/usuarios",User.api);
app.use("/tareas",Tareas.api);

app.listen(4000,()=>{
    console.clear();
    console.log("Servidor conrriendo en el puerto 4000");
});