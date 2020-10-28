const express =require('express');// tabnine
const router= express.Router();
const mysqlConnection =require('../db/db');

// Colocar los middlewares  

router.get('/',(req,res) =>{
mysqlConnection.query('SELECT * FROM modulos ',(err,rows,fields)=>{
   // si no hay error
   if(!err){ // entonces
  //vedadero
  res.json(rows);
   }else{ // si no
  // falso hay un error
  console.log(err);
   } // fin si

})// fin de la conexión
})// fin monstrar todos los módulos

// buscar un módulos por su id
router.get('/buscarmodulo/:id',(req,res)=>{
const {id} = req.params; // id del módulo numérico entero
mysqlConnection.query('SELECT * FROM modulos WHERE id =?',[id],(err,rows,fields)=>{
if(!err){
res.json(rows[0]);
}else{
   console.log(err);
}
})// fin de la conexión

})// fin buscar un módulo
// grabar módulo

router.post('/nuevo-modulo',(req,res)=>{
const{modulo,modprefijo}=req.body; //1 captura
let moduloArreglo =[modulo,modprefijo];// arreglo json
// definir el scrip slq en una variable
let nuevoModulo ='INSERT INTO modulos(modulo,mod_prefijo) values(?,?)';
mysqlConnection.query(nuevoModulo,moduloArreglo,(err,results,fields)=>{
  // si hay error
   if(err){
      // vedadero
   return console.error(err.message);
}else{ // si no
   // falso
  res.json({message:'Módulo creado'}) ;
} // fin si
})// fin guardar módulo



})// fin guardar un módulo





module.exports =router;