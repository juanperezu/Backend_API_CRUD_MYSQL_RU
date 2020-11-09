const mysql = require('mysql');
// párámetros de conexión
const mysqlConnection=mysql.createConnection({
//host: '181.133.136.83', //bnuhluvomjfkpoulcnxc-mysql.services.clever-cloud.com
host:'bprbeudfwg7eeipqbp9t-mysql.services.clever-cloud.com',
//user: 'mediatecnica', //uzjxnklbt5wcjjze
user: 'urappmxol0gahuzf',
//password: '123', //yN0iZPsed0lzErrcxde7
password: 'piXeRzrY5CoTJ351xaU4',

//database: 'lab_mediatecnica', //bnuhluvomjfkpoulcnxc
database: 'bprbeudfwg7eeipqbp9t',
multipleStatements:true

});
//Establecer la conexión a la bd
mysqlConnection.connect(function(err){
if(err){
    console.log(err);
    return;
}else{
    console.log('Base de datos conectado');
}// fin si
})// fin connect

// al final de las funciones , callbacks, middleware
module.exports =mysqlConnection;




