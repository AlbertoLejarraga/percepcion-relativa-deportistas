const gestorEncuestas = require("../../src/gestorEncuestas.js")
const rpe = require("../../src/rpe.js")
exports.handler = async function(event, context) {
  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  let idJugador = event.queryStringParameters.idJugador
  let turno = event.queryStringParameters.turno || "m"
  let rpeSesion = parseInt(event.queryStringParameters.rpeSesion)
  let fecha = new Date()
  let resul = "Los campos idJugador y rpeSesion son obligatorios"
  if (idJugador && rpeSesion){
    console.log("dentroooo")
    resul = await gestor.nuevoRPE(idJugador, fecha, turno, rpeSesion)
  }
  return {
    statusCode: 200,
    body: JSON.stringify(resul)
  }
}
