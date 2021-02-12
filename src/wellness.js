//Clase relacionada con las encuestas wellness
class Wellness {
	constructor (fecha, idJugador, fatiga, danoMuscular, calidadSueno, nutricionHidratacion, estadoEmocional){
		this._idJugador = ""
		this._fecha = new Date()
		this._valorFatiga = -1
		this._valorDanoMuscular = -1
		this._valorSueno = -1
		this._valorNutricion = -1
		this._valorEmocional = -1

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
	set idJugador(idJug){this._idJugador = idJug}
	set fatiga(valor){this._valorFatiga = valor}
	set danoMuscular(valor){this._valorDanoMuscular = valor}
	set calidadSueno(valor){this._valorSueno = valor}
	set nutricionHidratacion(valor){this._valorNutricion = valor}
	set estadoEmocional(valor){this._valorEmocional = valor}

	as_string(){
		return `{idJugador: ${this.idJugador},
							fecha: ${this.fecha.toLocaleTimeString('es-ES', {year: 'numeric', month: 'numeric', day: 'numeric' })},
							fatiga: ${this._valorFatiga},
							daño_muscular: ${this._valorDanoMuscular},
							calidad_sueño: ${this._valorSueno},
							nutrición-hidratación: ${this._valorNutricion},
							estado_emocional: ${this._valorEmocional}}`
	}
	as_dict(){
		return {idJugador: this.idJugador, fecha: this.fecha.toLocaleTimeString('es-ES', {year: 'numeric', month: 'numeric', day: 'numeric' }), fatiga: this.fatiga, dano_muscular: this.danoMuscular, calidad_sueno: this.calidadSueno, nutricion_hidratacion: this.nutricionHidratacion, estado_emocional: this.estadoEmocional}
	}
	//HU6: Rellenar encuesta
	rellenarEncuesta(idJugador, fecha, fatiga, danoMuscular, calidadSueno, nutricionHidratacion, estadoEmocional){
		if (idJugador === "" ||
									! fecha instanceof Date || isNaN(fecha) ||
									(fatiga < 1 || fatiga > 7) ||
									(danoMuscular < 1 || danoMuscular > 7) ||
									(calidadSueno < 1 || calidadSueno > 7) ||
									(nutricionHidratacion < 1 || nutricionHidratacion > 7) ||
									(estadoEmocional < 1 || estadoEmocional > 7)){
			return false
		}else{
			this.idJugador = idJugador
			this.fecha = fecha;
			this.fatiga = fatiga
			this.danoMuscular = danoMuscular
			this.calidadSueno = calidadSueno
			this.nutricionHidratacion = nutricionHidratacion
			this.estadoEmocional = estadoEmocional
			return true
		}
	}
	get [Symbol.toStringTag]() {
    return 'Wellness';
  }
}
module.exports = {
	Wellness
}
