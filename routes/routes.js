const express=require('express');
const router=express.Router();
const mysqlConnection=require('../db/db');


//middleware
router.get('/estudiantes',(req,res)=>{
    //callbacks
mysqlConnection.query('SELECT * FROM  actores ',(err,rows,fields)=>{
     // si no hay error
    if(!err){
    // verdadero    
    res.json(rows);
    //si no es verdadero
    }else{
    console.log(err);
    }
})// fin query
})// fin del get

// agregar un nuevo estudiantes
router.post('/nuevo-estudiantes',(req,res)=>{
const{nombres,apellidos,correo,documento,
     telefono_celular,fecha_nacimiento,institucion_id}=req.body;
let estudiante =[nombres,apellidos,correo,documento,
    telefono_celular,fecha_nacimiento,institucion_id];

 let nuevoEstudiante =`INSERT INTO actores(nombres,apellidos,correo,documento,
     telefono_celular,fecha_nacimiento,institucion_id) VALUES (?,?,?,?,?,?,?)`;  
 mysqlConnection.query(nuevoEstudiante,estudiante,(err, results,fields)=>
 {
  if(err){
    return console.error(err.message);
  }else{
      res.json({message:'Alumno matriculado satisfactoriamente'})
  }})
  })//
  router.put('/estudiante/:id',(req,res)=>{
    const {nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento,institucion_id}=req.body;
     const {id} =req.params;
    
    
    mysqlConnection.query(`UPDATE actores SET nombres=?,apellidos=?,correo=?,documento=?,
    telefono_celular=?,fecha_nacimiento=?,institucion_id=? WHERE id=?`,
    [nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento,institucion_id,id],(err,rows,fields)=>{
    if(!err){
       
       res.json({status:`Alumno Actualizado`});
    }else{
       console.log(err);
    }
    })});
 
    router.get('/estudiante/:id',(req,res)=>{
       const {id} =req.params;
       mysqlConnection.query('SELECT * from actores where id= '+id,(err,rows,fiels)=>{
       if(!err){
          res.json(rows); 
       }else{
       console.log(err);
       }});
       })// fin



module.exports=router;