const Dal = require("../TareasDal");

const Borrar = async (email, id) => {
    let status = 500;
    let response = {};
    let tarea;
    try {
        tarea = await Dal.query("SELECT * FROM tareas WHERE id=? and email=?", [id, email]);
        if (tarea?.length) {
            await Dal.query("DELETE FROM tareas WHERE tareas.id=? and email=?", [id, email])
            status = 200;
            response = {
                message: "Tarea borrada con exito."
            };
            return {
                status,
                response
            }
        }
    } catch (error) {
        status = 500;
        response = {
            message: "Ha ocurrido un error con el servidor. Compruebe la conexion a la base de datos."
        };
    }
    if (tarea?.length == 0) {
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