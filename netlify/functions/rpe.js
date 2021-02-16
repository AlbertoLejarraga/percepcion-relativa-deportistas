const gestorEncuestas = require("../../src/gestorEncuestas.js")
const rpe = require("../../src/rpe.js")
exports.handler = async function(event, context) {
  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  const idJugador = event.queryStringParameters.idJugador
  const fecha = new Date(event.queryStringParameters.fecha)
  const turno = event.queryStringParameters.turno
  console.log(idJugador + typeof idJugador)
  console.log(fecha + typeof fecha)

  let resul = -1
  //si no se recibe idJugador o fecha, se retornará -1
  if (idJugador && fecha){
    let rpeResul = null
    if (turno){//el turno no es obligatorio, por defecto, es de mañana (m)
       rpeResul = await gestor.obtenerRPESesion("123456", fecha, "m")
       console.log(fecha.toISOString().split("T")[0])
       console.log("aqui")
    }else{
       rpeResul = await gestor.obtenerRPESesion(idJugador, fecha)
    }
    //el resultado es el objecto como diccionario
    resul = await ( Object.prototype.toString.call(rpeResul) === "[object Rpe]" ? rpeResul.as_dict() : rpeResul);
  }
  return {
    statusCode: 200,
    body: JSON.stringify(resul)
  }
}
