class Rpe{
	constructor (){
		this._idJugador = ""
		this._fecha = new Date()
		this._turno = "" //m o t, mañana o tarde
		this._valor = -1
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
	rellenarEncuesta(idJugador, turno, valorRPE){
		if (turno !== "m" || turno !== "t" || valorRPE<1 || valorRPE>10 || idJugador === ""){
			return false
		}else{
			this.idJugador = idJugador
			this.fecha = new Date(Date.now());
			this.turno = turno
			this.valor = valorRPE
			return true
		}
	}
	//HU4: Obtener las encuestas de un jugador de la temporada
	obtenerEncuestasJugador(idJugador){}//implica conexión a bbdd
	//HU3: Obtener las encuestas de todos los jugadores de una sesión concreta
	obtenerEncuestasDia(fecha, turno){}//implica conexión a bbdd


}

module.exports = {
	Rpe
}
