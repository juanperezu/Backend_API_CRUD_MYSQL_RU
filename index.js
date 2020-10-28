const express=require('express');
const app=express();
const routes=require('./routes/routes'); // defino todos los middleware de los modulo
const modulos=require('./routes/modulos');
const colegios=require('./routes/colegios');

// Ajustess 
app.set('port', 3000);//puerto único  //firewall

// middleware
app.use(express.json());
// ajustess
// defino middleware
app.use('/api',routes);
app.use('/api/modulos',modulos);
app.use('/api/colegios',colegios);


app.listen(app.get('port'),()=>{
    console.log('listening on port' + app.get('port'));
});



