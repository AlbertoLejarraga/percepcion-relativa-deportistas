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
		this._valor = valor
	}
	as_string(){
		return `{idJugador: ${this.idJugador}, fecha: ${this.fecha}, turno: ${this.turno}, valor: ${this.valor}}`
	}
	as_dict(){
		return {idJugador: this.idJugador, fecha: this.fecha, turno: this.turno, valor: this.valor}
	}
	//HU5: Rellenar encuesta
	rellenarEncuesta(idJugador, fecha, turno, valorRPE){
		if ((turno !== "m" && turno !== "t") || (valorRPE < 1 || valorRPE > 10) || idJugador === "" || ! fecha instanceof Date || isNaN(fecha)){
			return false
		}else{
			this.idJugador = idJugador
			this.fecha = fecha;
			this.turno = turno
			this.valor = valorRPE
			return true
		}
	}
}

module.exports = {
	Rpe
}
