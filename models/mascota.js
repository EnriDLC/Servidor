//import mongoose from 'mongoose';
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    nombre: String,
    descripcion: String
})

//crear modelo
const Mascota = mongoose.model('Mascota',mascotaSchema);

module.exports = Mascota;
//const { Schema } = mongoose;

//  const blogSchema = new Schema({
 //   title:  String, // String is shorthand for {type: String}
  //  author: String,
   // body:   String,
    //comments: [{ body: String, date: Date }],
   // date: { type: Date, default: Date.now },
   // hidden: Boolean,
   // meta: {
   //   votes: Number,
   //   favs:  Number
 // }
 // });