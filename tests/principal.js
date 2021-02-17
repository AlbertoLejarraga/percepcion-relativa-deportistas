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
  describe('Añadir RPE', async function(){
    it('Devuelve una string de error al insertar una fecha o turno erróneos', async function(){
      r = await gestorTest.nuevoRPE("123456", new Date(), "h", 7)
      expect(r).to.be.equal('Fecha o turno incorrectos');
      r = await gestorTest.nuevoRPE("123456", "asdf", "m", 7)
      expect(r).to.be.equal('Fecha o turno incorrectos');
    });
    it('Devuelve un objeto booleano al insertar datos correctos', async function(){
      r = await gestorTest.nuevoRPE("123456", new Date(), "m", 7)
      expect(r).to.be.an("object");
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
var model = require('../src/model.js')
var modelTest = null
describe('Clase model', function(){
  describe('Conexión a la bbdd', function(){
    modelTest = new model.Model()
    it('No devuelve una excepción', async function(){
      expect(await modelTest.conectar()).to.be.equal(undefined);
    });
  });
  describe('Obtener rpe', function(){
    it('Devuelve false con turno incorrecto',  async function(){
      var datos = await modelTest.obtenerRPESesion("123456", new Date(), "j")
      expect(datos).to.not.be.true;
    });
    it('Devuelve false para un dato que no esté en la bd', async function(){
      var datos = await modelTest.obtenerRPESesion("5555", new Date(), "m")
      expect(datos).to.not.be.true;
    });
    it('Devuelve un diccionario para un dato que esté en la bd', async function(){
      var datos = await modelTest.obtenerRPESesion("123456", new Date("2021/02/16"), "m")
      expect(datos).to.be.an("object");
    });
  });
  describe('Añadir rpe de sesión', function(){
    it('Devuelve un diccionario al pasar un diccionario',  async function(){
      var add = await modelTest.addRpe({idJugador:"9999", fecha: new Date(), turno: "j"})
      expect(add).to.not.be.equal({idJugador:"9999", fecha: new Date(), turno: "j"});
    });
  });
});
//test funcion vercel
var supertest = require("supertest")("https://percepcion-relativa-deportistas.vercel.app/api/rpeSesion")
describe('Función rpeSesion Vercel', function(){
  describe('Se obtiene un rpe correcto para datos que están en la bd', function(){
    it('Devuelve un documento correcto', async function(){
      var response = await supertest.get(`?idJugador=123456&fecha=2021/02/17&turno=m`)
      expect(response.status).to.be.equal(200);
      expect(response.text).to.be.equal('{"idJugador":"123456","fecha":"17/2/2021 10:28:56","turno":"m","valor":6}')
    });
  });
  describe('Se obtiene una string si no existe un dato solicitado', function(){
    it('Devuelve una string correcta', async function(){
      var response = await supertest.get(`?idJugador=123456&fecha=2031/02/17&turno=m`)
      expect(response.status).to.be.equal(200);
      expect(response.text).to.be.equal('"No existe encuesta para ese jugador/día/turno"')
    });
  });
  describe('Se obtiene -1 si se solicita sin parámetros', function(){
    it('Devuelve una string correcta', async function(){
      var response = await supertest.get(``)
      expect(response.status).to.be.equal(200);
      expect(response.text).to.be.equal('-1')
    });
  });
});
//test funcion netlify
var supertest1 = require("supertest")("https://percepcion-relativa-deportistas.netlify.app/.netlify/functions/nuevoRpe")
describe('Función nuevoRPE', function(){
  describe('Se mandan datos correctos', function(){
    it('Devuelve un documento correcto', async function(){
      this.timeout(10000);
      var response = await supertest1.post("").send('{"idJugador":"idBorrarTest", "rpeSesion":4}')
      expect(response.status).to.be.equal(200);
      expect(response.text).to.be.a("string").to.include("idBorrarTest")
    });
  });
  describe('Se mandan datos incorrectos', function(){
    it('Se obtiene una string al mandar datos erroneos o incompletos', async function(){
      this.timeout(10000);
      var response = await supertest1.post("").send('{"erroneo":"idBorrarTest", "rpeSesion":4}')
      expect(response.status).to.be.equal(200);
      expect(response.text).to.be.a("string").to.include("idJugador")
    });
  });

});
