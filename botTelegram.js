const env = require('dotenv').config();
const axios = require('axios')

var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

telegram.on("text", (message) => {
  if (message.text.toLowerCase().indexOf("/nuevorpe") === 0){
    //se obtiene los datos
    let idJugador = message.from.id.toString()
    let rpeSesion = parseInt(message.text.split(" ")[1])
    let fecha = new Date()
    let turno = message.text.split(" ")[2] || "m"
    if (idJugador && rpeSesion>0 && rpeSesion<=10 && (turno === "m" || turno === "t")){
      //si hay datos se hace la peticion rest
      let rpe = JSON.stringify({idJugador:idJugador, rpeSesion: rpeSesion, turno:turno})
      telegram.sendMessage(message.chat.id, rpe)

      axios.post("https://percepcion-relativa-deportistas.netlify.app/.netlify/functions/nuevoRpe",
        {'idJugador':idJugador, 'rpeSesion': rpeSesion, 'turno':turno}
      )
        .then(res => {
          telegram.sendMessage(message.chat.id, res.data)
        })
        .catch(error => {
          console.error(error)
        })
      telegram.sendMessage(message.chat.id, "ON fin")

    }else{
      telegram.sendMessage(message.chat.id, "Algún dato es erróneo, consulta /ayuda")
    }
  } else if (message.text.toLowerCase().indexOf("/rpesesion") === 0){
    //se obtiene los datos
    let fecha = message.text.split(" ")[1]
    let turno = message.text.split(" ")[2] || "m"
    let idJugador = message.text.split(" ")[3] || message.from.id.toString()
    //si hay datos se hace la peticion rest
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
  }else if (message.text.toLowerCase().indexOf("/ayuda") === 0){
    let ayuda = "/rpesesion <fecha en formato yyyy/mm/dd> <opcional turno(m-t), por defecto m> <idJugador, opcional, si no se aporta se coge el id de telegram>\n"
    ayuda += "/nuevorpe <rpe de la sesión> <turno (m-t), por defecto m>\n"
    ayuda += "Los valores opcionales deben ir en el orden indicado.\n"
    ayuda += "El /nuevorpe registra el id de jugador de telegram"
    telegram.sendMessage(message.chat.id, ayuda)
  }
});
