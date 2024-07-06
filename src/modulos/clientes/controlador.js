const TABLA = 'clientes';

module.exports = function (dbInyectada) {

    let db = dbInyectada;

    if (!db){
        db = require('../../DB/mysql');
    }

  //la funcion TODOS trae todos los archivos de la TABLA

    function todos(){
        return db.todos(TABLA);
    }

      //la funcion los objetos en funcion del id definido como parametro
    function uno(id){
        return db.uno(TABLA, id);
    }
    function agregar(body){
        return db.agregar(TABLA, body);
    }
    function eliminar (body){
        return db.eliminar(TABLA, body);
    }
     return{
        todos,
        uno,
        agregar,
        eliminar,
     }

}