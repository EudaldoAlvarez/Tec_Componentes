const Dal = require("../TareasDal");


const Editar =async(id,titulo,descripcion,fecha_inicio,fecha_fin) =>{
    let response ={};
    let status = 500;
    let tarea;

    try {
        await Dal.query("UPDATE tareas SET titulo = ?, descripcion = ?, fecha_inicio = ? , fecha_fin = ? WHERE tareas.id = ?",[titulo,descripcion,fecha_inicio,fecha_fin,id]);
        tarea = await Dal.query("SELECT * FROM tareas WHERE id=?",[id]);
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
    
    if(tarea?.length){
        status = 200;
       response = {
            message: "Actualización con exito",
            data: tarea
        };
        return {
            status,
            response
        }
    }else{
        response = {
            message: "No se encontro ninguna tarea",
            data : tarea
        };

        return {
            status,
            response
        }
    }
};

module.exports = Editar;