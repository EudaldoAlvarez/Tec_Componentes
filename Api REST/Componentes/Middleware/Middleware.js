
const {VerifyJwt} = require("../../libs/utils");

const Middleware = (req, res, next) => {
  try {
    const jwtData  = VerifyJwt(req.headers.authorization);
    req.jwtData = jwtData;
    next();
  } catch (err) {
    res.status(401).json({
      message: "No se encuentra autenticado",
    });
  }
};

module.exports = Middleware;