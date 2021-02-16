const url = require('url')
const mongoClient = require('mongodb').MongoClient
const env = require('dotenv').config();
class Model{
  constructor(){
    this._db = null
  }

  async conectar(){
    let uri = process.env.MONGODB_URI
    let client = await mongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true  })
    this._db = await client.db(url.parse(uri).pathname.substr(1))

  }
  //HU3: rpe de un día
  async obtenerRPESesion(idJugador, fecha, turno){
    //se obtiene de la bbdd el valor para ese jugador, fecha y turno
    //de momento un aleatorio
    //https://stackoverflow.com/questions/48717323/nodejs-mongodb-querying-iso-date/63298056#63298056
    let rpe = await this._db.collection("rpe")
    let valor = await rpe.aggregate(
      [
        {
          '$addFields': {
            'formattedDate': {
              '$dateToString': {
                'format': '%Y-%m-%d',
                'date': '$fecha'
              }
            }
          }
        }, {
          '$match': {
            'formattedDate': {
              '$eq': fecha.toISOString().split("T")[0]
            },
            'turno': turno,
            'idJugador': idJugador
          }
        }, {
          '$project': {
            'valor': 1,
            'fecha':1,
            '_id': 0
          }
        }, {
          '$limit': 1
        }
      ]
  )
  if (await valor.hasNext()){
    let v = await valor.next()
    return {"valor": v["valor"], "fecha": v["fecha"]}
  }else{
    return false
  }

}
  obtenerRPETotal(idJugador, limite){
    //se obtiene de la bbdd todas las encuestas del jugador, con un límite de registros
    //de momento aleatorio
    let encuestas = []
    for(let i=0; i<limite;i++){
      let fecha = (2018 + Math.floor(Math.random() * 3)).toString() + "/" +(Math.floor(Math.random() * 12) + 1).toString() + "/" + (Math.floor(Math.random() * 28) + 1).toString()
      let turno = ((Math.random() < 0.5) ? "m":"t")
      let valor = Math.floor(Math.random() * 10) + 1
      encuestas.push({idJugador:idJugador, fecha:new Date(fecha), turno:turno, valor:valor})
    }
    return encuestas
  }
  //HU5: Rellenar encuesta rpe

  async addRpe(dicc){
    //Función que añade una encuesta a la bbdd
    let rpe = await this._db.collection("rpe")
    let resul = await rpe.insertOne(dicc)
    if (await resul.insertedCount === 1){
      return dicc
    }else{
      return "No se ha insertado el documento"
    }

  }
  obtenerWellnessDia(idJugador, fecha){
    //se obtiene de la bbdd los valroes para ese jugador y fecha
    //de momento valores aleatorios
    let rand = []
    for (let i=0;i<5;i++) rand.push(Math.floor(Math.random() * 7) + 1)
    let wellness = {fatiga: rand[0], dano_muscular: rand[1], calidad_sueno: rand[2], nutricion_hidratacion: rand[3], estado_emocional: rand[4]}

    return wellness
  }
  obtenerWellnessTotal(idJugador, limite){
    //se obtiene de la bbdd todas las encuestas del jugador, con un límite de registros
    //de momento aleatorio
    let encuestas = []
    for(let i=0; i<limite;i++){
      let fecha = (2018 + Math.floor(Math.random() * 3)).toString() + "/" + (Math.floor(Math.random() * 12) + 1).toString() + "/" + (Math.floor(Math.random() * 30) + 1).toString()
      let rand = []
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
module.exports = {
	Model
}
