/**
 * Este scrip levanta el servidor e importar los componentes.
 */
const express = require("express");
const cors = require("cors");
const app=express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.get('/suma',(req,res)=>{
    let status = 200;
    let response = "";
    
    if(!req.query.numero1 || !req.query.numero2 || isNaN(req.query.numero1) || isNaN(req.query.numero2)){
        status = 400;
        response ="Error al recibir datos"
    }else{
        numero1 = parseFloat(req.query.numero1);
        numero2 = parseFloat(req.query.numero2);
        resultado=numero1 + numero2;
        response =resultado;
    }
    res.status(status).json({
        resultado: response
    });
})

app.get('/resta',(req,res)=>{
    let status = 200;
    let response = "";
    
    if(!req.query.numero1 || !req.query.numero2 || isNaN(req.query.numero1) || isNaN(req.query.numero2)){
        status = 400;
        response ="Error al recibir datos"
    }else{
        numero1 = parseFloat(req.query.numero1);
        numero2 = parseFloat(req.query.numero2);
        resultado=numero1 - numero2;
        response =resultado;
    }
    res.status(status).json({
        resultado: response
    });
})

app.get('/multiplicacion',(req,res)=>{
    let status = 200;
    let response = "";
    
    if(!req.query.numero1 || !req.query.numero2 || isNaN(req.query.numero1) || isNaN(req.query.numero2)){
        status = 400;
        response ="Error al recibir datos"
    }else{
        numero1 = parseFloat(req.query.numero1);
        numero2 = parseFloat(req.query.numero2);
        resultado=numero1 * numero2;
        response =resultado;
    }
    res.status(status).json({
        resultado: response
    });
})

app.get('/division',(req,res)=>{
    let status = 200;
    let response = "";
    
    if(!req.query.numero1 || !req.query.numero2 || isNaN(req.query.numero1) || isNaN(req.query.numero2) || req.query.numero1 ==0 || req.query.numero2 ==0){
        status = 400;
        response ="Error al recibir datos"
        
    }else{
        numero1 = parseFloat(req.query.numero1);
        numero2 = parseFloat(req.query.numero2);
        resultado=numero1 / numero2;
        response =resultado;
    }
    res.status(status).json({
        resultado: response
    });
})

app.listen(3001,()=>{
    console.clear();
    console.log("Servidor conrriendo en el puerto 3001.");
});