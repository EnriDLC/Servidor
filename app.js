const express = require('express');
const app = express();
//const port = 3000;
const port = process.env.PORT || 3000;

//motor de plantillas
app.set('view engine','ejs');
app.set('views',__dirname+'/views'); //indicamos donde estan las vistas

app.use(express.static(__dirname+ "/public"));

app.get('/', (req, res) => {
  res.render("index", {titulo : "Mi titulo dinamico"})
  //res.send('Mi respuesta desde express! v2.3')
})

app.get('/servicios', (req, res) => {
  res.render("Servicios", {tituloServicios : "Este es un mensaje dinamico de servicios"})
  //res.send('Mi respuesta desde express! v2.3')
})

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