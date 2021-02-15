var expect = require('chai').expect;
var rpe = require('../src/rpe.js')
var wellness = require('../src/wellness.js')
var gestorEncuestas = require('../src/gestorEncuestas.js')
var model = require('../src/model.js')

var rpeTest = new rpe.Rpe()

describe('RPE', function(){
  describe('Creación de objeto', function(){
    it('Genera un objeto', function(){
      expect(rpeTest).to.be.a('Rpe');
    });
  });
  describe('Rellenar encuesta', function(){
    it('Devuelve false al rellenarla sin valores', function(){
      r = rpeTest.rellenarEncuesta("", "", "", "")
      expect(r).to.be.false;
    });
    it('Devuelve false al poner turno distinto de "m" o  "t"', function(){
      r = rpeTest.rellenarEncuesta("123456", new Date(), "valorErroneo", 5)
      expect(r).to.be.false;
    });
    it('Devuelve false al poner un valor menor de 1', function(){
      r = rpeTest.rellenarEncuesta("123456", new Date(), "m", 0)
      expect(r).to.be.false;
    });
    it('Devuelve false al poner un valor mayor de 10', function(){
      r = rpeTest.rellenarEncuesta("123456", new Date(), "m", 11)
      expect(r).to.be.false;
    });
    it('Devuelve un objecto correcto al pasar valores correctos', function(){
      r = rpeTest.rellenarEncuesta("123456", new Date(), "m", 5)
      expect(r).to.be.true;
      expect(rpeTest).to.be.a('Rpe');
      expect(rpeTest.idJugador).to.equal("123456");
      expect(rpeTest.turno).to.equal("m");
      expect(rpeTest.valor).to.equal(5);
    });
  });
  describe('Pasar a dicciorio', function(){
    it('Devuelve un diccionario correcto', function(){
      fecha = new Date()
      r = rpeTest.rellenarEncuesta("123456", fecha, "m", 5)
      dicc = rpeTest.as_dict();
      expect(dicc["idJugador"]).to.equal("123456")
      expect(dicc["fecha"]).to.equal(fecha.toLocaleTimeString('es-ES', {year: 'numeric', month: 'numeric', day: 'numeric' }))
      expect(dicc["turno"]).to.equal("m")
      expect(dicc["valor"]).to.equal(5)
    });
  });
  describe('Pasar a string', function(){
    it('Devuelve una string correcta', function(){
      fecha = new Date()
      r = rpeTest.rellenarEncuesta("123456", fecha, "m", 5)
      dicc = rpeTest.as_string();
      expect(dicc).to.be.a('string');
    });
  });


});

var wellTest = new wellness.Wellness()

describe('Wellness', function(){
  describe('Creación de objeto', function(){
    it('Genera un objeto', function(){
      expect(wellTest).to.be.a('Wellness');
    });
  });
  describe('Rellenar encuesta', function(){
    it('Devuelve false al rellenarla sin valores', function(){
      r = wellTest.rellenarEncuesta("", "",  "", "")
      expect(r).to.be.false;
    });
    it('Devuelve false al poner un valor menor de 1 en alguno de los campos', function(){
      r = wellTest.rellenarEncuesta("123456", new Date(), 0, 1, 2, 3, 4)
      expect(r).to.be.false;
      r = wellTest.rellenarEncuesta("123456", new Date(), 4, 1, -9, 3, 4)
      expect(r).to.be.false;
      r = wellTest.rellenarEncuesta("123456", new Date(), 5, 1, 2, -1, 4)
      expect(r).to.be.false;
    });
    it('Devuelve false al poner un valor mayor de 7 en alguno de los campos', function(){
      r = wellTest.rellenarEncuesta("123456", new Date(), 5, 11, 2, 3, 4)
      expect(r).to.be.false;
      r = wellTest.rellenarEncuesta("123456", new Date(), 4, 1, 5, 15, 4)
      expect(r).to.be.false;
      r = wellTest.rellenarEncuesta("123456", new Date(), 5, 1, 16, 5, 4)
      expect(r).to.be.false;
    });
    it('Devuelve un objecto correcto al pasar valores correctos', function(){
      r = wellTest.rellenarEncuesta("123456", new Date(), 5, 6, 2, 3, 4)
      expect(r).to.be.true;
      expect(wellTest).to.be.a('Wellness');
      expect(wellTest.idJugador).to.equal("123456");
      expect(wellTest.fatiga).to.equal(5);
      expect(wellTest.danoMuscular).to.equal(6);
      expect(wellTest.calidadSueno).to.equal(2);
      expect(wellTest.nutricionHidratacion).to.equal(3);
      expect(wellTest.estadoEmocional).to.equal(4);

    })
  });
  describe('Pasar a dicciorio', function(){
    it('Devuelve un diccionario correcto', function(){
      fecha = new Date()
      r = wellTest.rellenarEncuesta("123456", fecha, 5, 6, 2, 3, 4)
      dicc = wellTest.as_dict();
      expect(dicc["idJugador"]).to.equal("123456")
      expect(dicc["fecha"]).to.equal(fecha.toLocaleTimeString('es-ES', {year: 'numeric', month: 'numeric', day: 'numeric' }))
      expect(dicc["fatiga"]).to.equal(5)
      expect(dicc["dano_muscular"]).to.equal(6)
      expect(dicc["calidad_sueno"]).to.equal(2)
      expect(dicc["nutricion_hidratacion"]).to.equal(3)
      expect(dicc["estado_emocional"]).to.equal(4)
    });
  });
  describe('Pasar a string', function(){
    it('Devuelve una string correcta', function(){
      fecha = new Date()
      r = wellTest.rellenarEncuesta("123456", fecha, 5, 6, 2, 3, 4)
      dicc = wellTest.as_string();
      expect(dicc).to.be.an('string');
    });
  });
});

var gestorTest = new gestorEncuestas.GestorEncuestas()


describe('Gestor de encuestas', function(){
  describe('Creación de objeto', function(){
    it('Genera un objeto', function(){
      expect(gestorTest).to.be.a('GestorEncuestas');
    });
  });
  describe('Obtener RPE de sesión', function(){
    it('Devuelve una string de error al insertar una fecha errónea', async function(){
      await gestorTest.init()
      r = await gestorTest.obtenerRPESesion("123456", "asdf", "m");
      expect(r).to.be.equal('Fecha o turno incorrectos');
    });
    it('Devuelve una string de error al insertar un turno erróneo', async function(){
      r = await gestorTest.obtenerRPESesion("123456", new Date(), "h")
      expect(r).to.be.equal('Fecha o turno incorrectos');
    });
    it('Devuelve un objeto de tipo rpe al insertar datos correctos', async function(){
      r = await gestorTest.obtenerRPESesion("123456", new Date("2021-02-15"), "m")
      expect(r).to.be.a("Rpe").but.not.an('object');
    });
    //Faltaría  un check al recibir de la bbdd un vacío, pero no esta todavía la bd
  });
  describe('Obtener RPE de temporada', function(){
    it('Se obtiene un array de Rpe`s', function(){
      r = gestorTest.obtenerRPETemp("123456")
      expect(r).to.be.an('array');
      expect(r[0]).to.be.a("Rpe").but.not.an('object');;
    });
    it('Se obtiene un array de la longitud correcta', function(){
      r = gestorTest.obtenerRPETemp("123456", 5)
      expect(r).to.have.lengthOf.at.most(5);
    });
  });
  describe('Añadir RPE', function(){
    it('Devuelve una string de error al insertar una fecha o turno erróneos', function(){
      r = gestorTest.nuevoRPE("123456", new Date(), "h", 7)
      expect(r).to.be.equal('Fecha o turno incorrectos');
      r = gestorTest.nuevoRPE("123456", "asdf", "m", 7)
      expect(r).to.be.equal('Fecha o turno incorrectos');
    });
    it('Devuelve un objeto booleano al insertar datos correctos', function(){
      r = gestorTest.nuevoRPE("123456", new Date(), "m", 7)
      expect(r).to.be.a("boolean");
    });
  });
  describe('Obtener Wellness de día concreto', function(){
    it('Devuelve una string de error al insertar una fecha errónea', function(){
      r = gestorTest.obtenerWellnessDia("123456", "asdf")
      expect(r).to.be.equal('Fecha incorrecta');
    });
    it('Devuelve un objeto de tipo Wellness al insertar datos correctos', function(){
      r = gestorTest.obtenerWellnessDia("123456", new Date(), "t")
      expect(r).to.be.a("Wellness").but.not.an('object');
    });
    //Faltaría  un check al recibir de la bbdd un vacío, pero no esta todavía la bd
  });
  describe('Obtener Wellness de temporada', function(){
    it('Se obtiene un array de Wellness`s', function(){
      r = gestorTest.obtenerWellnessTemp("123456")
      expect(r).to.be.an('array');
      expect(r[0]).to.be.a("Wellness").but.not.an('object');;
    });
    it('Se obtiene un array de la longitud correcta', function(){
      r = gestorTest.obtenerWellnessTemp("123456", 5)
      expect(r).to.have.lengthOf.at.most(5);
    });
  });
  describe('Añadir Wellness', function(){
    it('Devuelve una string de error al insertar un dato erróneo', function(){
      r = gestorTest.nuevoWellness("123456", new Date(), 7, 5, "", 2, 2)
      expect(r).to.be.equal('Dato incorrecto');//un valor
      r = gestorTest.nuevoWellness("123456", "asdf", "m", 7)
      expect(r).to.be.equal('Dato incorrecto');//la fecha
    });
    it('Devuelve un booleano al insertar datos correctos', function(){
      r = gestorTest.nuevoWellness("123456", new Date(), 7, 5, 4, 2, 2)
      expect(r).to.be.a("boolean");
    });
  });
});
