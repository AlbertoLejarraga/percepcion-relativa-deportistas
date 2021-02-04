var rpe = require ("./rpe.js")
assert = require("assert")
//test correctos
var rpeTest = new rpe.Rpe("12345678A", "2021-02-04", "diurno", 5)
assert(rpeTest, "Nuevo rpe")
assert.equal(rpeTest.idJugador, "12345678A", "prueba idJugador")
assert.equal(rpeTest.fecha, "2021-02-04", "prueba fecha")
console.log("Tests correctos")
//ahora se fuerza que haya un fallo en el test
rpeTest.fecha = null
console.log("El siguiente debe fallar")
assert.equal(rpeTest.as_string(), `{idJugador: 12345678A, fecha: 2021-02-0, turno: diurno, valor: 5}`)
console.log("No debe llegar hasta aquí, debe fallar el assert anterior")
