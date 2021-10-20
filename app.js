const express = require('express');
const app = express();

require('dotenv').config()
//const port = 3000;
const port = process.env.PORT || 3000;

//conexion de base de datos
const mongoose = require('mongoose');

//se mueven las variables a .env como variables de entorno 
//const user = 'usr_vet';
//const password = '9p8j7g5b3D';
//const dbName= 'veterinaria'

//const uri =`mongodb+srv://${user}:${password}@cluster0.hdh4t.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const uri =`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.hdh4t.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

//'mongodb://localhost:27017/test'
//mongoose.connect('mongodb://localhost:27017/test');
mongoose.connect(uri)
    //.then(()=> console.log('Base de datos conectada'))
   // .catch(e => console.log(e))
   .catch(err => console.log(err));
//motor de plantillas
app.set('view engine','ejs');
app.set('views',__dirname+'/views'); //indicamos donde estan las vistas

app.use(express.static(__dirname+ "/public"));

//agregamos rutas WEB 
app.use('/', require('./router/RutasWeb')) 
app.use('/mascotas', require('./router/Mascotas'))

//se movieron a rutas web
//old
//app.get('/servicios',(req, res) => {
 //   res.send('Estas en la pagina de servicios')
//})

app.use((req,res, next) => {
  res.status(404).render("404", {
    titulo: "My page 404",
    descripcion: "Pagina not found!!"
  })
})

//app.use(express.static(__dirname+ "/public"))
app.listen(port, () => {
  console.log('Example app listening at http://localhost:',port)})