const express = require("express");
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/suma',(req,res)=>{
    let status = 200;
    let response = "";
    
    if(!req.query.numero1 || !req.query.numero2){
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
    
    if(!req.query.numero1 || !req.query.numero2){
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
    
    if(!req.query.numero1 || !req.query.numero2){
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
    
    if(!req.query.numero1 || !req.query.numero2){
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