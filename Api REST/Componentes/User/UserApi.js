/**
 * Instancia de express para los servicios de usuario
 */
 const express = require("express");
 const cors = require("cors");
 const Services = require("./Services/UserServices");
 
 const User = express.Router();
 
 User.use(express.urlencoded({ extended: true }));
 User.use(express.json());
 User.use(cors());
 
 /**
  * Ruta para registrar un usuario
  */
 User.post("/sign-up", async (req, res) => {
   let { email, password } = req.body;
   const { status, response } = await Services.signUp(email, password);
   res.status(status).json(response);
 });
 
 User.post("/login",async(req,res)=>{
   let{ email, password } = req.body;
   const { status, response } = await Services.login(email, password);
   res.status(status).json(response);
 });

 User.post("/pruebas",()=>{
  let usuarios = {
    contraseña: holi,
  }
  console.log(usuarios['contraseña']);
 });
 module.exports = User;
 