const Dal = require("../TareasDal");

const Borrar = async (email, id) => {
    let status = 500;
    let response = {};
    let tarea;
    try {
        tarea = await Dal.query("SELECT * FROM tareas WHERE id=? and email=?", [id, email]);
        // Se valida que la tarea existe y que es del email del token.
        if (tarea?.length) {
            await Dal.query("DELETE FROM tareas WHERE tareas.id=? and email=?", [id, email])
            status = 200;
            response = {
                message: "Tarea borrada con exito."
            };
        }
    } catch (error) {
        status = 500;
        response = {
            message: "Ha ocurrido un error con el servidor. Compruebe la conexion a la base de datos."
        };
    }
    // Si la tarea no existe o los datos no necesarios no existen manda el error 400
    if (tarea?.length == 0 || email == undefined || id == undefined) {
        status = 400;
        response = {
            message: "Error al borrar. Verifique los datos enviados."
        };
    }
    return {
        status,
        response
    }
};

module.exports = Borrar;