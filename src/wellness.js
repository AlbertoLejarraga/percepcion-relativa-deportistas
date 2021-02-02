//Clase relacionada con las encuestas wellness
class Wellness {
	constructor (fecha, idJugador, fatiga, danoMuscular, calidadSueno, nutricionHidratacion, estadoEmocional){
	}
	//getters
	get fecha(){}
	get idJugador(){}
	get fatiga(){}
	get danoMuscular(){}
	get calidadSueno(){}
	get nutricionHidratacion(){}
	get estadoEmocional(){}
	//setters
	set fecha(){}
	set idJugador(){}
	set fatiga(){}
	set danoMuscular(){}
	set calidadSueno(){}
	set nutricionHidratacion(){}
	set estadoEmocional(){}

	//HU6: Rellenar encuesta
	rellenarEncuesta(idJugador, fatiga, danoMuscular, calidadSueno, nutricionHidratacion, estadoEmocional){}
	//HU2: Obtener las encuestas de un jugador de la temporada
	obtenerEncuestasJugador(idJugador){}
	//HU1: Obtener las encuestas de todos los jugadores de un día concreto
	obtenerEncuestasDia(fecha){}
}
