const frutas = ['platano','manzana','pera','manzana','mango','tuna'];
const dinero = 1000; 
const color= ['verde','amarillo','naranja','rojo'];
//exporta la lista
// module.exports(frutas); una sola
//para varios
module.exports = {
    frutas: frutas,
    dinero: dinero,
    color       //tambien es valido poner solo el nombre siempre y cuando nombre y contenido sean iguales
}