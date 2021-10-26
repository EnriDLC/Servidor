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

router.get('/crear', (req, res) => {
    res.render('crear')
})

router.post('/', async (req, res) => {
    const body = req.body
    //console.log(body)
    try{
        const mascotaBD = new Mascota(body)
        await mascotaBD.save()
        //console.log('mascota creada:', mascotaBD)
        res.redirect('/mascotas')

    }catch(error){

        console.log(error)

    }  
})

router.get('/:id', async(req, res) =>{
    const id = req.params.id
    try{
        const mascotaBD = await Mascota.findOne({_id: id})
        console.log(mascotaBD)
        res.render('detalle',{
            mascota: mascotaBD,
            error: false
        })
    }catch(error){
        console.log(error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el ide seleccionado'
        })
    }
})
  

//router.delete('/:id', asyn(req, res) => {
//    const id = req.params.id;
//    try{
//        const masacotaDB = await Mascota.findByIdAndDelete({ _id: id });
//        if(mascotasDB){
//            res.json({
//                estado: true,
//                mensaje: 'eliminado!'
 //           })
 //       }else{
 //           res.json({
 //               estado: false,
 //               mensaje: 'fallo eliminar!'
 //           })  

 //       }
  //  }catch(error){
   //     console.log(error)
  //  }
//})
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {

        const mascotaDB = await Mascota.findByIdAndDelete({ _id: id });
        console.log(mascotaDB)

        // https://stackoverflow.com/questions/27202075/expressjs-res-redirect-not-working-as-expected
        // res.redirect('/mascotas')
        if (!mascotaDB) {
            res.json({
                estado: false,
                mensaje: 'No se puede eliminar'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'eliminado!'
            })
        }
        
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res)=>{
    const id = req.params.id
    const body=req.body
    try{
        const mascotaDB = await Mascota.findByIdAndUpdate( id, body, { useFindAndModify: false })
        console.log(mascotaDB)

        res.json({
            estado: true,
            mensaje: 'Editado'
        })

    } catch (error) {
        console.log(error)

        res.json({
            estado: false,
            mensaje: 'Fallamos !!'
        })

    }

})

module.exports = router;