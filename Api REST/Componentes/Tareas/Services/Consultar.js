const Dal = require("../TareasDal");



const consulta =async(email) =>{
    let response ={};
    let status = 500;
    let tareas;

    try {
        tareas = await Dal.query("SELECT * FROM tareas WHERE email=?",[email]);
    } catch (error) {
        response = {
            message : "Ha ocurrido un error al realizar la consulta.",
            data: error
        };
        status = 500;
        return {
            status,
            response
        }
    }

    if(tareas?.length){
        status = 200;
        response = {
            message: "Consulta con exito",
            data: tareas
        };
        return {
            status,
            response
        }
    }else{
        response = {
            message: "No se encontro ninguna tarea",
            data : null
        };

        return {
            status,
            response
        }
    }
};

module.exports = consulta;
