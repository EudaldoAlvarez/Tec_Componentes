const Dal = require("../UserDal");

const login = async (email, password) => {
	let response = {};
	let status = 500;
	let users;
	try {
		users = await Dal.query("SELECT * FROM Users WHERE email=?", [email]);
	} catch(error){
		response = {
			message: "Ha ocurrido un error al iniciar sesión",
			data: null
		};
		status = 500;
		return {
			status,
			response
		};
	}
	if (users?.length) {
		// Comprobacion de la contraseña
	} else {
		response = {
			message: "Usuario o contraseña incorrecta.",
			data: null
		};
		status = 400;
	}
	return {
		status,
		response
	}
};

module.exports = login;