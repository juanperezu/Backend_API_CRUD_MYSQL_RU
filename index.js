const express=require('express');
const app=express();
const routes=require('./routes/routes');

// Ajustess 
app.set('port', 3000);//puerto único  //firewall

// middleware
app.use(express.json());
// ajustess

app.use('/api',routes);
app.listen(app.get('port'),()=>{
    console.log('listening on port' + app.get('port'));
});



