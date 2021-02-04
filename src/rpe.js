class Rpe{
	constructor (idJugador, fecha, turno, valorRPE){
		this._idJugador = idJugador
		this._fecha = fecha
		this._turno = turno
		this._valor = valorRPE
	}
	//getters
	get idJugador (){return this._idJugador}
	get fecha (){return this._fecha}
	get turno (){return this._turno}
	get valor (){return this._valor}
	//setters
	set idJugador (idJug){
		this._idJugador = idJug
	}
	set fecha (fecha){
		this._fecha = fecha
	}
	set turno (turno){
		this._turno = turno
	}
	set valor (valor){
		this._valor = valorRPE
	}
	as_string(){
		return `{idJugador: ${this.idJugador}, fecha: ${this.fecha}, turno: ${this.turno}, valor: ${this.valor}}`
	}
	//HU5: Rellenar encuesta
	rellenarEncuesta(idJugador, turno, valorRPE){}
	//HU4: Obtener las encuestas de un jugador de la temporada
	obtenerEncuestasJugador(idJugador){}
	//HU3: Obtener las encuestas de todos los jugadores de una sesión concreta
	obtenerEncuestasDia(fecha, turno){}


}

module.exports = {
	Rpe
}
