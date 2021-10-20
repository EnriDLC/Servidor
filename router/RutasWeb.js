const express = require('express');
const router = express.Router();

//app.get('/', (req, res) => {
router.get('/', (req, res) => {
        res.render("index", {titulo : "Mi titulo dinamico"})
    //res.send('Mi respuesta desde express! v2.3')
  })
  
//app.get('/servicios', (req, res) => {
router.get('/servicios', (req, res) => {    
    res.render("Servicios", {tituloServicios : "Este es un mensaje dinamico de servicios"})
    //res.send('Mi respuesta desde express! v2.3')
  })

  module.exports = router;