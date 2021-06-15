const Dal = require("../TareasDal");

const crear = async (email, titulo, descripcion, fecha_inicio, fecha_fin) => {
    let response = {};
    let status = 500;
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
            message: "Ha ocurrido un error con el servidor. Compruebe la conexion a la base de datos.",
            data: error
        };
        status = 500;
        if (titulo == undefined || descripcion == undefined || descripcion == undefined || fecha_inicio == undefined || fecha_fin == undefined) {
            status = 400;
            response = {
                message: "No se pudo crear la tarea, Verifique los datos enviados.",
                data: error
            };
        }

        return {
            status,
            response
        }
    }
};

module.exports = crear;