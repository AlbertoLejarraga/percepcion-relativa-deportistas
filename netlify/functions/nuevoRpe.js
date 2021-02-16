const gestorEncuestas = require("../../src/gestorEncuestas.js")
const rpe = require("../../src/rpe.js")
exports.handler = async function(event, context) {
  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  let body = {}
  console.log(typeof event.body)
  let idJugador, turno, rpeSesion
  if (event.body[0] ==="{"){
    body = JSON.parse(event.body)
    idJugador = body.idJugador
    turno = body.turno || "m"
    rpeSesion = parseInt(body.rpeSesion)
  }else{
    idJugador = event.queryStringParameters.idJugador
    turno = event.queryStringParameters.turno || "m"
    rpeSesion = parseInt(event.queryStringParameters.rpeSesion)
  }
  let fecha = new Date()
  let resul = "Los campos idJugador y rpeSesion son obligatorios"
  console.log(event.queryStringParameters)
  console.log("jejeje", idJugador, turno, rpeSesion)
  if (idJugador && rpeSesion){
    console.log("dentroooo")
    resul = await gestor.nuevoRPE(idJugador, fecha, turno, rpeSesion)
  }
  return {
    statusCode: 200,
    body: JSON.stringify(resul) + JSON.stringify(event)
  }
}
