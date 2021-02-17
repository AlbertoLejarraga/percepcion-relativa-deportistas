//Fichero para la api del hito 6
var express = require('express');
var app = express();

const gestorEncuestas = require("./gestorEncuestas.js")
app.set('port', (process.env.PORT || 5000));

//se corresponde con hu3
app.get(['/rpe/:idJugador/:fecha', '/rpe/:idJugador/:fecha/:turno'], async function(req, res) {
  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  if (req.params.turno){
    return res.send(await gestor.obtenerRPESesion(req.params.idJugador, req.params.fecha, req.params.turno).as_dict())
  }else{
    return res.send(await gestor.obtenerRPESesion(req.params.idJugador, req.params.fecha, req.params.turno).as_dict())
  }
});
// se corresponde con hu5
app.post('/rpe/:idJugador/:fecha/:turno/:rpeSesion', async function(req, res) {
  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  return res.send(await gestor.nuevoRPE(req.params.idJugador, req.params.fecha, req.params.turno, req.params.rpeSesion).as_dict())
});
// se corresponde con hu4
app.get(['/rpeTemporada/:idJugador','/rpeTemporada/:idJugador/:limite'], async function(req, res) {
  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  var rpes = null
  if (req.params.limite){
    rpes = await gestor.obtenerRPETemp(req.params.idJugador, req.params.limite)
  }else{
    rpes = await gestor.obtenerRPETemp(req.params.idJugador)
  }
  let resul = []
  for (let i=0;i<rpes.length;i++){
    resul.push(rpes[i].as_dict())
  }
  return res.send(resul)
});
// se corresponde con hu7
app.delete('/rpe/:_id', async function(req, res) {
  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  return res.send(await gestor.borrarRpe(rea.params._id))
});


//se corresponde con hu1
app.get('/wellness/:idJugador/:fecha', async function(req, res) {
  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  return res.send(await gestor.obtenerWellnessDia(req.params.idJugador, req.params.fecha).as_dict())
});
// se corresponde con hu6
app.post('/wellness/:idJugador/:fecha/:fatiga/:danoMuscular/:calidadSueno/:nutricionHidratacion/:estadoEmocional', async function(req, res) {
  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  return res.send(await gestor.nuevoWellness(req.params.idJugador, req.params.fecha, req.params.fatiga,
                                              req.params.danoMuscular, req.params.calidadSueno,
                                              req.params.nutricionHidratacion, req.params.estadoEmocional).as_dict())
});
// se corresponde con hu2
app.get(['/wellnessTemporada/:idJugador','/wellnessTemporada/:idJugador/:limite'], async function(req, res) {
  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  var w = null
  if (req.params.limite){
    w = await gestor.obtenerWellnesTemp(req.params.idJugador, req.params.limite)
  }else{
    w = await gestor.obtenerWellnesTemp(req.params.idJugador)
  }
  let resul = []
  for (let i=0;i<rpes.length;i++){
    resul.push(rpes[i].as_dict())
  }
  return res.send(resul)
});
// se corresponde con hu8
app.delete('/wellness/:_id', async function(req, res) {
  var gestor = new gestorEncuestas.GestorEncuestas()
  await gestor.init()
  return res.send(await gestor.borrarWellness(rea.params._id))
});

app.listen(app.get("port"), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});
