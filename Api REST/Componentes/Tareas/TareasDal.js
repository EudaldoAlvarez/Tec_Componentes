/**
 * Capa de acceso de datos (Data Access Layer)
 */
 const Database = require("../Database/Database");
 const TareasDal = {
   query: Database.query,
 };
 module.exports = TareasDal;
 