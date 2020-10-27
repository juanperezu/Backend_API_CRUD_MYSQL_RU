const mysql = require('mysql');
// párámetros de conexión
const mysqlConnection=mysql.createConnection({
host: '181.133.136.83',
user: 'mediatecnica',
password: '123',
database: 'lab_mediatecnica',
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




