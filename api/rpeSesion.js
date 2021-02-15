const gestorEncuestas = require("../src/gestorEncuestas.js")
const rpe = require("../src/rpe.js")
module.exports = async (req, res) => {

  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  let resul = -1
  //si no se recibe idJugdor o fecha, se retornará -1
  if (req.query && req.query.idJugador && req.query.fecha){
    let rpeResul = null
    if (req.query.turno){//el turno no es obligatorio, por defecto, es de mañana (m)
       rpeResul = await gestor.obtenerRPESesion(req.query.idJugador, new Date(req.query.fecha), req.query.turno)
    }else{
       rpeResul = await gestor.obtenerRPESesion(req.query.idJugador, new Date(req.query.fecha))
    }
    //el resultado es el objecto como diccionario
    resul = await ( Object.prototype.toString.call(rpeResul) === "[object Rpe]" ? rpeResul.as_dict() : rpeResul);
  }
  await res.status(200).json(resul)
}
