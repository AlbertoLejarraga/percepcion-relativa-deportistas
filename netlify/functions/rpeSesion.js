const gestorEncuestas = require("../../src/gestorEncuestas.js")
const rpe = require("../../src/rpe.js")
exports.handler = async function(event, context) {
  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  let idJugador = event.queryStringParameters.idJugador
  let fecha = new Date(event.queryStringParameters.fecha)
  //se hace así para no tener problemas con la hora utc
  fecha.setHours(fecha.getHours()+1)
  let turno = event.queryStringParameters.turno

  let resul = -1
  //si no se recibe idJugador o fecha, se retornará -1
  if (idJugador && fecha){
    let rpeResul = null
    if (turno){//el turno no es obligatorio, por defecto, es de mañana (m)
       rpeResul = await gestor.obtenerRPESesion("123456", fecha, "m")
    }else{
       rpeResul = await gestor.obtenerRPESesion(idJugador, fecha)
    }
    //el resultado es el objecto como diccionario
    resul = await ( Object.prototype.toString.call(rpeResul) === "[object Rpe]" ? rpeResul.as_dict() : rpeResul);
  }
  return {//Se devuelve el resultado o -1
    statusCode: 200,
    body: JSON.stringify(resul)
  }
}
