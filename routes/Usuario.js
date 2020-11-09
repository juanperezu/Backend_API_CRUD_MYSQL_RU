const express =require('express');// tabnine
const router= express.Router();
const mysqlConnection =require('../db/db');

// Colocar los middlewares  
//router.get('/ventas'...
//router.get('/productos'
router.get('/usuarios',(req,res)=>{ // traer todos los usuarios del sistema
    mysqlConnection.query('SELECT * FROM actores ',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin
    


module.exports =router;