const Dal = require("../TareasDal");

const crear = async (email, titulo, descripcion, fecha_inicio, fecha_fin) => {
    let response = {};
    let status = 500;
    let tarea;
    try {
        if (await Dal.query("INSERT INTO tareas(email,titulo,descripcion,fecha_inicio,fecha_fin) VALUES (?,?,?,?,?);",
            [email, titulo, descripcion, fecha_inicio, fecha_fin])) {
            status = 200;
            response = {
                message: "Se ha creado la tarea correctamente."
            }
        };
        return {
            status,
            response
        }
    } catch (error) {
        response = {
            message: "No se pudo crear la tarea",
            data: error
        };
        status = 500;
        return {
            status,
            response
        }
    }
};

module.exports = crear;