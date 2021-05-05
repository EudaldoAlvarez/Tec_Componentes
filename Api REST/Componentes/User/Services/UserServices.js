/**
* Centraliza todos los servicios de los usuarios
*/
//instancia de singUp para llamar a sus metodos
const login = require("./login");
const signUp = require("./signUp");
const Services = {
  signUp,  
  login,
};

module.exports = Services;