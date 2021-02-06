//Clase relacionada con las encuestas wellness
class Wellness {
	constructor (fecha, idJugador, fatiga, danoMuscular, calidadSueno, nutricionHidratacion, estadoEmocional){
		this._idJugador = idJugador
		this._fecha = fecha
		this._valorFatiga = fatiga
		this._valorDanoMuscular = danoMuscular
		this._valorSueno = calidadSueno
		this._valorNutricion = nutricionHidratacion
		this._valorEmocional = estadoEmocional

	}
	//getters
	get fecha(){return this._fecha}
	get idJugador(){return this._idJugador}
	get fatiga(){return this._valorFatiga}
	get danoMuscular(){return this._valorDanoMuscular}
	get calidadSueno(){return this._valorSueno}
	get nutricionHidratacion(){return this._valorNutricion}
	get estadoEmocional(){return this._valorEmocional}
	//setters
	set fecha(fecha){this._fecha = fecha}
	set idJugador(idJug){this._idJugador = idJugador}
	set fatiga(valor){this._valorFatiga = fatiga}
	set danoMuscular(valor){this._valorDanoMuscular = danoMuscular}
	set calidadSueno(valor){this._valorSueno = calidadSueno}
	set nutricionHidratacion(valor){this._valorNutricion = nutricionHidratacion}
	set estadoEmocional(valor){this._valorEmocional = estadoEmocional}

	as_string(){
		return `{idJugador: ${this.idJugador},
							fecha: ${this.fecha},
							fatiga: ${this._valorFatiga},
							daño_muscular: ${this._valorDanoMuscular},
							calidad_sueño: ${this._valorSueno},
							nutrición-hidratación: ${this._valorNutricion},
							estado_emocional: ${this._valorEmocional}}`
	}
	//HU6: Rellenar encuesta
	rellenarEncuesta(idJugador, fatiga, danoMuscular, calidadSueno, nutricionHidratacion, estadoEmocional){}
	//HU2: Obtener las encuestas de un jugador de la temporada
	obtenerEncuestasJugador(idJugador){}
	//HU1: Obtener las encuestas de todos los jugadores de un día concreto
	obtenerEncuestasDia(fecha){}
}
