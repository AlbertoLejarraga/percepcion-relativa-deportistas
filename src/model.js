class Model{
  constructor(){
    this._conexion = ""
  }
  obtenerRPESesion(idJugador, fecha, turno){
    //se obtiene de la bbdd el valor para ese jugador, fecha y turno
    //de momento un aleatorio
    return Math.floor(Math.random() * 10) + 1
  }
  obtenerRPETotal(idJugador, limite){
    //se obtiene de la bbdd todas las encuestas del jugador, con un límite de registros
    //de momento aleatorio
    encuestas = []
    for(let i=0; i<limite;i++){
      fecha = str(2018 + Math.floor(Math.random() * 3)) + str(Math.floor(Math.random() * 12) + 1) + str(Math.floor(Math.random() * 30) + 1)
      turno = ((Math.random() < 0.5) ? "m":"t")
      valor = Math.floor(Math.random() * 10) + 1
      encuestas.push({idJugador:idJugador, fecha:fecha, turno:turno, valor:valor})
    }
    return encuestas
  }
  addRpe(dicc){
    //Función que añade una encuesta a la bbdd
    // de momento siempre correcto
    return true
  }
  obtenerWellnessDia(idJugador, fecha){
    //se obtiene de la bbdd los valroes para ese jugador y fecha
    //de momento valores aleatorios
    rand = []
    for (let i=0;i<5;i++) rand.push(Math.floor(Math.random() * 7) + 1)
    wellness = {fatiga: rand[0], dano_muscular: rand[1], calidad_sueno: rand[2], nutricion_hidratacion: rand[3], estado_emocional: rand[4]}

    return wellness
  }
  obtenerWellnessTotal(idJugador, limite){
    //se obtiene de la bbdd todas las encuestas del jugador, con un límite de registros
    //de momento aleatorio
    encuestas = []
    for(let i=0; i<limite;i++){
      fecha = str(2018 + Math.floor(Math.random() * 3)) + str(Math.floor(Math.random() * 12) + 1) + str(Math.floor(Math.random() * 30) + 1)
      rand = []
      for (let i=0;i<5;i++) rand.push(Math.floor(Math.random() * 7) + 1)
      encuestas.push({idJugador:idJugador, fecha:fecha, fatiga: rand[0], dano_muscular: rand[1], calidad_sueno: rand[2], nutricion_hidratacion: rand[3], estado_emocional: rand[4]})
    }
    return encuestas
  }
  addWellness(dicc){
    //Fnción que añade una encuesta a la bbdd
    // de momento siempre correcto
    return true
    
  }
}
