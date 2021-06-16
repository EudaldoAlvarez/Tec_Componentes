const Dal = require("../TareasDal");



const consulta =async(email) =>{
    let response ={};
    let status = 500;
    let tareas;

    try {
        tareas = await Dal.query("SELECT * FROM tareas WHERE email=?",[email]);
    } catch (error) {
        response = {
            message : "Ha ocurrido un error con el servidor. Compruebe la conexion a la base de datos.",
            data: error
        };
    }
// Valida que la consulta devuelva registros
    if(tareas?.length){
        status = 200;
        response = {
            message: "Consulta con exito",
            data: tareas
        };
    }else{
        // Valida que el email se envió
        if(email == undefined){
            status = 400;
            response = {
                message: "Error al consultar, Verifique los datos enviados."
            }
        }else{
            // Si no existen tareas aún manda el estatus 204 "No content"
            status =204;
            response = {
                message: "No se encontro ninguna tarea",
                data : null
            };
        }

    }
    return {
        status,
        response
    }
};

module.exports = consulta;
