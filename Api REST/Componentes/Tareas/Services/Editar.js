const Dal = require("../TareasDal");


const Editar = async (id, email, titulo, descripcion, fecha_inicio, fecha_fin) => {
    let response = {};
    let status = 500;
    let tarea;

    try {
        await Dal.query("UPDATE tareas SET titulo = ?, descripcion = ?, fecha_inicio = ? , fecha_fin = ? WHERE tareas.id = ? AND email=?", [titulo, descripcion, fecha_inicio, fecha_fin, id, email])
        tarea = await Dal.query("SELECT * FROM tareas WHERE id=? and email=?", [id, email]);
        status = 200;
        response = {
            message: "Actualización con exito",
            data: tarea
        };
    } catch (error) {
        // Se valida que los datos requeridos existan.
        if (titulo == undefined || descripcion == undefined || descripcion == undefined || fecha_inicio == undefined || fecha_fin == undefined) {
            status = 400;
            response = {
                message: "No se pudo Actualizar la tarea, Verifique los datos enviados.",
                data: error
            };
        } else {
            response = {
                message: "Ha ocurrido un error con el servidor. Compruebe la conexion a la base de datos.",
                data: error
            };
        }
    }
    return {
        status,
        response
    }
};

module.exports = Editar;