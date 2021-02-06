var expect = require('chai').expect;
var rpe = require('../src/rpe.js')
var wellness = require('../src/wellness.js')

var rpeTest = new rpe.Rpe()
var wellTest = new wellness.Wellness()

describe('RPE', function(){
  describe('Creación de objeto', function(){
    it('Genera un objeto', function(){
      expect(rpeTest).to.be.an('object');
    });
  });
  describe('Rellenar encuesta', function(){
    it('Devuelve false al rellenarla sin valores', function(){
      r = rpeTest.rellenarEncuesta("", "", "")
      expect(r).to.be.false;
    });
    it('Devuelve false al poner turno distinto de "m" o  "t"', function(){
      r = rpeTest.rellenarEncuesta("123456", "valorErroneo", 5)
      expect(r).to.be.false;
    });
    it('Devuelve false al poner un valor menor de 1', function(){
      r = rpeTest.rellenarEncuesta("123456", "m", 0)
      expect(r).to.be.false;
    });
    it('Devuelve false al poner un valor mayor de 10', function(){
      r = rpeTest.rellenarEncuesta("123456", "m", 11)
      expect(r).to.be.false;
    });
    it('Devuelve un objecto correcto al pasar valores correctos', function(){
      r = rpeTest.rellenarEncuesta("123456", "m", 5)
      expect(r).to.be.true;
      expect(rpeTest).to.be.an('object');
      expect(rpeTest.idJugador).to.equal("123456");
      expect(rpeTest.turno).to.equal("m");
      expect(rpeTest.valor).to.equal(5);
    })
  });
});
