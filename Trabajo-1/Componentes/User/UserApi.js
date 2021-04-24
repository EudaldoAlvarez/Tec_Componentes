const express = require("express");
const cors = require("cors");
const Dal = require("./UserDal");

const User = express.Router();

User.use(express.urlencoded({extended:true}));
User.use(express.json);
User.use(cors());

User.get("/all", async (req,res)=>{
    try {
        const result = await Dal.query("SELECT id,email FROM usuarios");
        res.status(200).json({
            message: result,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:error,
        });
    }
});

module.exports =User;