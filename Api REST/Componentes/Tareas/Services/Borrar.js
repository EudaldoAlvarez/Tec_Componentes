const Dal = require("../TareasDal");

const Borrar = async(id)=>{
    let status= 500;
    let response ={};
    try {
        if(await Dal.query("DELETE FROM tareas WHERE tareas.id=?",[id])){
            status =200;
            response={
                message: "Tarea borrada con exito."
            };
            return{
                status,
                response
            }
        }
        
    } catch (error) {
        response={
            message: "No se pudo borrar la tarea."
        }
    }
    return{
        status,
        response
    }

};

module.exports = Borrar;