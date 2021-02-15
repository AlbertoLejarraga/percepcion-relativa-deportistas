var gestorEncuestas = require("/src/gestorEncuestas.js")
module.exports = async (req, res) => {
  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  if (req.body.idJugador && req.body.fecha){
    if (req.body.turno){
      let rpe =  gestor.obtenerRPESesion(req.body.idJugador, new Date(req.body.fecha), req.body.turno)
    }else{
      let rpe = gestor.obtenerRPESesion(req.body.idJugador, new Date(req.body.fecha))
    }
  }
  res.status(200).send(rpe)
}
