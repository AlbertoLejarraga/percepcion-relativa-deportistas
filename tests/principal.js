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


describe('Wellness', function(){
  describe('Creación de objeto', function(){
    it('Genera un objeto', function(){
      expect(wellTest).to.be.an('object');
    });
  });
  describe('Rellenar encuesta', function(){
    it('Devuelve false al rellenarla sin valores', function(){
      r = wellTest.rellenarEncuesta("", "", "")
      expect(r).to.be.false;
    });
    it('Devuelve false al poner un valor menor de 1 en alguno de los campos', function(){
      r = wellTest.rellenarEncuesta("123456", 0, 1, 2, 3, 4)
      expect(r).to.be.false;
      r = wellTest.rellenarEncuesta("123456", 4, 1, -9, 3, 4)
      expect(r).to.be.false;
      r = wellTest.rellenarEncuesta("123456", 5, 1, 2, -1, 4)
      expect(r).to.be.false;
    });
    it('Devuelve false al poner un valor mayor de 7 en alguno de los campos', function(){
      r = wellTest.rellenarEncuesta("123456", 5, 11, 2, 3, 4)
      expect(r).to.be.false;
      r = wellTest.rellenarEncuesta("123456", 4, 1, 5, 15, 4)
      expect(r).to.be.false;
      r = wellTest.rellenarEncuesta("123456", 5, 1, 16, 5, 4)
      expect(r).to.be.false;
    });
    it('Devuelve un objecto correcto al pasar valores correctos', function(){
      r = wellTest.rellenarEncuesta("123456", 5, 6, 2, 3, 4)
      expect(r).to.be.true;
      expect(wellTest).to.be.an('object');
      expect(wellTest.idJugador).to.equal("123456");
      expect(wellTest.fatiga).to.equal(5);
      expect(wellTest.danoMuscular).to.equal(6);
      expect(wellTest.calidadSueno).to.equal(2);
      expect(wellTest.nutricionHidratacion).to.equal(3);
      expect(wellTest.estadoEmocional).to.equal(4);

    })
  });
});
