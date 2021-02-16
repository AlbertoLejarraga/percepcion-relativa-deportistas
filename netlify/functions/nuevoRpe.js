const gestorEncuestas = require("../../src/gestorEncuestas.js")
const rpe = require("../../src/rpe.js")
exports.handler = async function(event, context) {
  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  let body = {}
  console.log(typeof event.body)
  if (event.body[0] ==="{"){
    body = JSON.parse(event.body)
  }
  let idJugador = event.queryStringParameters.idJugador || body.idJugador
  let turno = event.queryStringParameters.turno || body.turno || "m"
  let rpeSesion = parseInt(event.queryStringParameters.rpeSesion) || parseInt(body.rpeSesion)
  let fecha = new Date()
  let resul = "Los campos idJugador y rpeSesion son obligatorios"
  console.log(event.queryStringParameters)
  if (idJugador && rpeSesion){
    console.log("dentroooo")
    resul = await gestor.nuevoRPE(idJugador, fecha, turno, rpeSesion)
  }
  return {
    statusCode: 200,
    body: JSON.stringify(resul) + JSON.stringify(event)
  }
}
