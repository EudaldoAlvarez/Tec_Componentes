/**
 * Instancia de express para los servicios de tareas
 */
const express = require("express");
const cors = require("cors");
const Services = require("./Services/TareasServices");
const Middleware = require("../Middleware/Middleware")
const Tareas = express.Router();

Tareas.use(express.urlencoded({ extended: true }));
Tareas.use(express.json());
Tareas.use(cors());

/**
 * Ruta para consultar tareas del usuario
 */
Tareas.get("/Consultar", Middleware, async (req, res) => {
    const { status, response } = await Services.consultar(req.jwtData.email);
    res.status(status).json(response);
});

/**
 * Ruta para editar tarea del usuario
 */
Tareas.put("/Editar", Middleware,async (req, res) => {
    let { id, titulo, descripcion, fecha_inicio, fecha_fin } = req.body;
    const { status, response } = await Services.Editar(id,req.jwtData.email, titulo, descripcion, fecha_inicio, fecha_fin);
    res.status(status).json(response);
});

/**
* Ruta para crear tarea del usuario
*/
Tareas.post("/Crear",Middleware, async (req, res) => {
    let {titulo, descripcion, fecha_inicio, fecha_fin } = req.body;
    const { status, response } = await Services.Crear(req.jwtData.email, titulo, descripcion, fecha_inicio, fecha_fin);
    res.status(status).json(response);
});

/**
 * Ruta para borrar una tarea
 */
 Tareas.delete("/Borrar", Middleware, async (req, res) => {
    let { id } = req.body;
    const { status, response } = await Services.Borrar(req.jwtData.email,id);
    res.status(status).json(response);
});
module.exports = Tareas;