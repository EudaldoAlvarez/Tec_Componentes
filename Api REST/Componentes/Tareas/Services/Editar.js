const Dal = require("../TareasDal");


const Editar = async (id, email, titulo, descripcion, fecha_inicio, fecha_fin) => {
    let response = {};
    let status = 500;
    let tarea;

    try {
        await Dal.query("UPDATE tareas SET titulo = ?, descripcion = ?, fecha_inicio = ? , fecha_fin = ? WHERE tareas.id = ? AND email=?", [titulo, descripcion, fecha_inicio, fecha_fin, id, email])
        tarea = await Dal.query("SELECT * FROM tareas WHERE id=? and email=?", [id, email]);

    } catch (error) {
        response = {
            message: "Ha ocurrido un error con el servidor. Compruebe la conexion a la base de datos.",
            data: error
        };
        status = 500;
        return {
            status,
            response
        }
    }

    if (tarea?.length) {
        status = 200;
        response = {
            message: "Actualización con exito",
            data: tarea
        };
        return {
            status,
            response
        }
    } else {
        status = 400;
        response = {
            message: "Error al actualizar, Compruebe la informacion enviada.",
            data: tarea
        };

        return {
            status,
            response
        }
    }
};

module.exports = Editar;