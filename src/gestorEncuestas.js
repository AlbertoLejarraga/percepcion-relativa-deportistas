var rpe = require('./rpe.js')
var wellness = require('./wellness.js')
var model = require('./model.js')
class GestorEncuestas{
  constructor (){

  }
  async init(){
    this._model = new model.Model()
    await this._model.conectar()
  }
  get [Symbol.toStringTag]() {
    return 'GestorEncuestas';
  }
  ////////////////////////////////////////////// RPE /////////////////////////////////////
  //HU3: rpe de un día
  async obtenerRPESesion(idJugador, fecha, turno="m"){
    //A partir del idJugador, la fecha y el turno se realiza una conexión a la bbdd para obtener la encuesta de esa sesion
    //se comprueba que la fecha y el turno sean correctos
    let f = new Date(fecha)
    if (! fecha instanceof Date || isNaN(f) || (turno !== "m" && turno !== "t")){
      return "Fecha o turno incorrectos"
    }
    let rpeSesion = await this._model.obtenerRPESesion(idJugador, f, turno)
    if (rpeSesion){
      let r = new rpe.Rpe()
      r.rellenarEncuesta(idJugador, rpeSesion["fecha"], turno, rpeSesion["valor"])
      return r
    }else{
      return "No existe encuesta para ese jugador/día/turno"
    }
  }
  //HU4: todos los rpe del jugador, con un límite
  obtenerRPETemp(idJugador, limite = 10){
    //se devuelven todas las encuestas del jugador
    var datos = this._model.obtenerRPETotal(idJugador, limite)
    var encuestas = []
    for(let i=0;i<datos.length;i++){
      let rpeActual = new rpe.Rpe()
      rpeActual.rellenarEncuesta(datos[i]["idJugador"], datos[i]["fecha"], datos[i]["turno"], datos[i]["valor"]);
      encuestas.push(rpeActual)
    }
    return encuestas
  }
  //HU5: Rellenar encuesta rpe
  async nuevoRPE(idJugador, fecha, turno, rpeSesion){
    if ( fecha instanceof Date && ! isNaN(fecha) && (turno === "m" || turno === "t") && (rpeSesion >= 1 || rpeSesion <= 10)){
      let encuesta = new rpe.Rpe()
      encuesta.rellenarEncuesta(idJugador, fecha, turno, rpeSesion)
      let dict = encuesta.as_dict()
      dict["fecha"] = fecha
      console.log(dict)
      return await this._model.addRpe(dict)
    }
    return "Fecha o turno incorrectos"
  }
  /////////////////////////////////////////////// WELLNESS ////////////////////////////////
  // HU1: Wellness de un día
  obtenerWellnessDia(idJugador, fecha){
    //A partir del idJugador y la fecha se realiza una conexión a la bbdd para obtener la encuesta de ese día
    //se comprueba que la fecha y el turno sean correctos
    let f = new Date(fecha)
    if (! fecha instanceof Date || isNaN(fecha)){
      return "Fecha incorrecta"
    }
    let wellnessDia = this._model.obtenerWellnessDia(idJugador, fecha)
    if (wellnessDia !== {}){
      let w = new wellness.Wellness()
      w.rellenarEncuesta(idJugador, fecha, wellnessDia["fatiga"], wellnessDia["danoMuscular"], wellnessDia["calidadSueno"], wellnessDia["nutricionHidratacion"], wellnessDia["estadoEmocional"])
      return w
    }else{
      return "No existe encuesta para ese jugador/día/turno"
    }
  }
  // HU2: Wellness de la temporada
  obtenerWellnessTemp(idJugador, limite = 10){
    //se devuelven todas las encuestas del jugador
    let datos = this._model.obtenerWellnessTotal(idJugador, limite)
    let encuestas = []
    for(let i=0;i<datos.length;i++){
      let wellActual = new wellness.Wellness()
      wellActual.rellenarEncuesta(datos[i]["idJugador"], datos[i]["fecha"], datos[i]["fatiga"], datos[i]["danoMuscular"], datos[i]["calidadSueno"], datos[i]["nutricionHidratacion"], datos[i]["estadoEmocional"])
      encuestas.push(wellActual)
    }
    return encuestas
  }
  //HU6: Rellenar encuesta wellness
  nuevoWellness(idJugador, fecha, fatiga, danoMuscular, calidadSueno, nutricionHidratacion, estadoEmocional){
    if (! fecha instanceof Date || isNaN(fecha) ||
    (fatiga < 1 || fatiga > 7) ||
    (danoMuscular < 1 || danoMuscular > 7) ||
    (calidadSueno < 1 || calidadSueno > 7) ||
    (nutricionHidratacion < 1 || nutricionHidratacion > 7) ||
    (estadoEmocional < 1 || estadoEmocional > 7)){
      return "Dato incorrecto"
    }
    let encuesta = new rpe.Rpe()
    encuesta.rellenarEncuesta(idJugador, fecha, fatiga, danoMuscular, calidadSueno, nutricionHidratacion, estadoEmocional)
    return this._model.addWellness(encuesta.as_dict())
  }

}
module.exports = {
	GestorEncuestas
}
