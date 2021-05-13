/**
* Centraliza todos los servicios de las tareas
*/
//instancia de singUp para llamar a sus metodos
const consultar = require("./Consultar");
const Editar = require("./Editar");
const Crear = require("./Crear");
const Borrar = require("./Borrar");
const Services = {
  consultar,
  Editar,
  Crear,
  Borrar
};

module.exports = Services;