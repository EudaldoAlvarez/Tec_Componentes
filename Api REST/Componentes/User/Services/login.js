const Dal = require("../UserDal");
const {verifyPassword} = require("../../../libs/utils");

const login = async (email, password) => {
	let response = {};
	let status = 500;
	let users;
	try {
		users = await Dal.query("SELECT * FROM Users WHERE email=?", [email]);
		console.log(users);
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
		if(verifyPassword(password,users['password'])){
			status = 200;
			response ={
				message: "Inicio de sesion exitoso.",
				data: {
					id: result.insertId,
					email: email,
					token: generateJwt({
					  id: result.insertId,
					  email: email,
					}),
				},
			};
		}
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