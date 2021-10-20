const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota')

router.get('/', async (req, res) =>{
    try{
        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB)
        res.render("mascotas", {
            arrayMascotas: arrayMascotasDB
            //arrayMascotas: [
            //    {id:'1',nombre:'firulais',descripcion:"labrador amarillo"},
            //    {id:'21',nombre:'neron',descripcion:"pastor aleman"},
            ///    {id:'13',nombre:'capitan',descripcion:"pug negro"}
            //]    
        })
        
    }   catch(error){
        console.log(error)   
    } 

}) 

module.exports = router;