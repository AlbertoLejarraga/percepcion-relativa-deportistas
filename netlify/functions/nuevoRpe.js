const gestorEncuestas = require("../../src/gestorEncuestas.js")
const rpe = require("../../src/rpe.js")
exports.handler = async function(event, context) {
  //se obtiene el gestor de encuestas
  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  //se obtienen las variables de body o de event.queryStringParameters
  let idJugador, turno, rpeSesion
  if (event.body[0] ==="{"){
    let body = JSON.parse(event.body)
    idJugador = body.idJugador
    turno = body.turno || "m"
    rpeSesion = parseInt(body.rpeSesion)
  }else{
    idJugador = event.queryStringParameters.idJugador
    turno = event.queryStringParameters.turno || "m"
    rpeSesion = parseInt(event.queryStringParameters.rpeSesion)
  }
  let fecha = new Date()
  //se comprueba si están los campos obligatorios
  let resul = "Los campos idJugador y rpeSesion son obligatorios"
  if (idJugador && rpeSesion){//si están se mandan al gestor
    resul = await gestor.nuevoRPE(idJugador, fecha, turno, rpeSesion)
  }
  return {//se devuelve el mensaje o lo que devuelve el gestor
    statusCode: 200,
    body: JSON.stringify(resul)
  }
}
