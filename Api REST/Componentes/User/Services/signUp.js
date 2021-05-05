const Dal = require("../UserDal");
const { hashPassword, generateJwt } = require("../../../libs/utils");

/**
 * signUp crea un nuevo usuario
 * @param {string} email
 * @param {string} password
 * @returns {object} {status: int, response: object}
 */
const signUp = async (email, password) => {
  let response = {};
  let status = 500;
  let duplicateUsers = null;

  // buscar por usuarios duplicados
  try {
    duplicateUsers = await Dal.query("SELECT email FROM Users WHERE email=?", [
      email,
    ]);
  } catch (error) {
    response = {
      message: "Ha ocurrido un error al registrar al usuario",
      data: null,
    };
    status = 500;
    return {
			status, 
			response
		};
  }

  // Insertar usuario si no existe
  if (duplicateUsers?.length === 0) {
    try {
      const result = await Dal.query(
        "INSERT INTO usuarios (email, password) VALUES (?, ?)",
        [email, hashPassword(password)]
      );
      response = {
        message: "Registro de usuario realizado correctamente.",
        data: {
          id: result.insertId,
          email: email,
          token: generateJwt({
            id: result.insertId,
            email: email,
          }),
        },
      };
      status = 200;
    } catch (error) {
      console.log(error);
      response = {
        message: error.message,
        data: null,
      };
      status = 500;
    }
  } else {
    response = {
      message: `El email ${email} ya está en uso.`,
      data: null,
    };
    status = 400;
  }

  return {
    status,
    response,
  };

  //Buscar que usuario y contraseña coincidan
  
};

module.exports = signUp;