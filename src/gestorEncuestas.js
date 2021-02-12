var rpe = require('rpe.js')
var wellness = require('wellness.js')
var model = require('model.js')
class gestorEncuestas{
  constructor(){
    this._model = new model.Model()
  }
  ////////////////////////////////////////////// RPE /////////////////////////////////////
  //HU3: rpe de un día
  obtenerRPE(idJugador, fecha, turno="m"){
    //A partir del idJugador, la fecha y el turno se realiza una conexión a la bbdd para obtener la encuesta de esa sesion
    //se comprueba que la fecha y el turno sean correctos
    f = new Date(fecha)
    if (! fecha instanceof Date || isNaN(f) || (turno !== "m" && turno !== "t")){
      return "Fecha o turno incorrectos"
    }
    rpeSesion = this._model.obtenerRPESesion(idJugador, fecha, turno)
    if (rpeSesion !== {}){
      return new rpe.Rpe().rellenarEncuesta(idJugador, fecha, turno, rpeSesion)
    }else{
      return "No existe encuesta para ese jugador/día/turno"
    }
  }
  //HU4: todos los rpe del jugador, con un límite
  obtenerRPE(idJugador, limite = 100){
    //se devuelven todas las encuestas del jugador
    datos = this._model.obtenerRPETotal(idJugador, limite)
    encuestas = []
    for(let i=0;i<datos.length();i++){
      encuestas.push(rpe.new Rpe().rellenarEncuesta(datos["idJugador"], datos["fecha"], datos["turno"], datos["valor"]))
    }
    return encuestas
  }
  //HU5: Rellenar encuesta rpe
  nuevoRPE(idJugador, fecha, turno, rpeSesion){
    encuesta = new rpe.Rpe().rellenarEncuesta(idJugador, fecha, turno, rpeSesion)
    if (encuesta){
      return model.addRpe(encuesta.as_dict())
    }else{
      return "datos erroneos"
    }
  }
  /////////////////////////////////////////////// WELLNESS ////////////////////////////////
  // HU1: Wellness de un día
  obtenerWellness(idJugador, fecha){
    //A partir del idJugador y la fecha se realiza una conexión a la bbdd para obtener la encuesta de ese día
    //se comprueba que la fecha y el turno sean correctos
    f = new Date(fecha)
    if (! fecha instanceof Date || isNaN(f)){
      return "Fecha o turno incorrectos"
    }
    wellnessDia = this._model.obtenerWellnessDia(idJugador, fecha)
    if (wellnessDia !== {}){
      return new wellness.Wellness().rellenarEncuesta(idJugador, fecha, wellnessDia["fatiga"], wellnessDia["danoMuscular"], wellnessDia["calidadSueno"], wellnessDia["nutricionHidratacion"], wellnessDia["estadoEmocional"])
    }else{
      return "No existe encuesta para ese jugador/día/turno"
    }
  }
  // HU2: Wellness de la temporada
  obtenerWellness(idJugador, limite = 100){
    //se devuelven todas las encuestas del jugador
    datos = this._model.obtenerWellnessTotal(idJugador, limite)
    encuestas = []
    for(let i=0;i<datos.length();i++){
      encuestas.push(rpe.new Wellness().rellenarEncuesta(datos["idJugador"], datos["fecha"], datos["fatiga"], datos["danoMuscular"], datos["calidadSueno"], datos["nutricionHidratacion"], datos["estadoEmocional"]))
    }
    return encuestas
  }
  //HU6: Rellenar encuesta wellness
  nuevoWellness(idJugador, fecha, fatiga, danoMuscular, calidadSueno, nutricionHidratacion, estadoEmocional){
    encuesta = new rpe.Rpe().rellenarEncuesta(idJugador, fecha, fatiga, danoMuscular, calidadSueno, nutricionHidratacion, estadoEmocional)
    if (encuesta){
      return model.addWellness(encuesta.as_dict())
    }else{
      return "datos erroneos"
    }
  }
}
