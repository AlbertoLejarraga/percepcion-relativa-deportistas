const env = require('dotenv').config();
const axios = require('axios')

var TelegramBot = require('node-telegram-bot-api'),
    telegram = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

telegram.on("text", (message) => {
  //para nuevo rpe
  if (message.text.toLowerCase().indexOf("/nuevorpe") === 0){
    //se obtiene los datos
    let idJugador = message.from.id.toString()
    let rpeSesion = parseInt(message.text.split(" ")[1])
    let fecha = new Date()
    let turno = message.text.split(" ")[2] || "m"
    //si se cumplen restricciones de datos
    if (idJugador && rpeSesion>0 && rpeSesion<=10 && (turno === "m" || turno === "t")){
      //se genera la petición post a la serverless de netlify
      axios.post("https://percepcion-relativa-deportistas.netlify.app/.netlify/functions/nuevoRpe",
        {idJugador: idJugador, rpeSesion: rpeSesion, turno: turno}
      )
        .then(res => {//se devuelve la respuesta
          console.log(res)
          telegram.sendMessage(message.chat.id, res.data)
        })
        .catch(error => {
          console.error(error)
        })
    }else{
      telegram.sendMessage(message.chat.id, "Algún dato es erróneo, consulta /ayuda")
    }
  } else if (message.text.toLowerCase().indexOf("/rpesesion") === 0){//para consulta de rpe de una sesión
    //se obtiene los datos
    let fecha = message.text.split(" ")[1]
    let turno = message.text.split(" ")[2] || "m"
    let idJugador = message.text.split(" ")[3] || message.from.id.toString()
    //si hay datos se hace la peticion get
    var params = `idJugador=${idJugador}&fecha=${fecha}&turno=${turno}`
    axios({
      method: 'get',
      url: "https://percepcion-relativa-deportistas.vercel.app/api/rpeSesion?" + params
    })
      .then(res => {
        telegram.sendMessage(message.chat.id, JSON.stringify(res.data))
      })
      .catch(error => {
        console.error(error)
      })
  }else{//en cualquier otro caso se devuelve la ayuda
    let ayuda = "/rpesesion <fecha en formato yyyy/mm/dd> <opcional turno(m-t), por defecto m> <idJugador, opcional, si no se aporta se coge el id de telegram>\n"
    ayuda += "/nuevorpe <rpe de la sesión> <turno (m-t), por defecto m>\n"
    ayuda += "Los valores opcionales deben ir en el orden indicado.\n"
    ayuda += "El /nuevorpe registra el id de jugador de telegram"
    telegram.sendMessage(message.chat.id, ayuda)
  }
});
