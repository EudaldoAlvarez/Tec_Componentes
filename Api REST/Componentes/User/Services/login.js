const Dal = require("../UserDal");
const {verifyPassword,generateJwt} = require("../../../libs/utils");

const login = async (email, password) => {
	let response = {};
	let status = 500;
	let users;
	try {
		users = await Dal.query("SELECT password FROM usuarios WHERE email=?", [email]);
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
		let contraseñaEncryotada = String(users[0]['password']);
		// Comprobacion de la contraseña
		if(verifyPassword(password,contraseñaEncryotada)){
			status = 200;
			response ={
				message: "Inicio de sesion exitoso.",
				data: {
					email: email,
					token: generateJwt({
					  id: users[0]['id'],
					  email: email,
					}),
				},
			};
		}else{
			response = {
				message: "contraseña incorrecta.",
				data: null
			};
			status = 400;
		}
	} else {
		response = {
			message: "No se encontró el email.",
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