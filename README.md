[![Build Status](https://travis-ci.com/AlbertoLejarraga/percepcion-relativa-deportistas.svg?branch=master)](https://travis-ci.com/AlbertoLejarraga/percepcion-relativa-deportistas)
# percepcion-relativa-deportistas

## Descripción

### Aplicación para el análisis de los datos de percepción relativa (de esfuerzo y bienestar general, principalmente) de cada deportista

Desarrollo de un software para la recogida y análisis de datos subjetivos por parte de los distintos deportistas que lo utilicen, enfocado, por ahora, al fútbol.

Estos datos subjetivos deben poder ampliarse, adaptándose a las necesidades de cada equipo de preparación física que lo utilice. En principio, los dos tipos de datos que se recogerán (los futbolistas rellenarán una especie de formulario en la que indiquen su percepción subjetiva), son:

##### Wellness
* Cada mañana, el jugador indicará su percepción acerca de distintos aspectos como la calidad del sueño, la fatiga acumulada, el daño muscular, la hidratación, la nutrición, etc.
* [Información sobre wellness en futoblistas](https://barcainnovationhub.com/the-use-of-wellness-questionnaires-in-football/)
##### RPE (Rated Perceived Exertion)
* Tras cada sesión, el jugador debe indicar su percepción acerca del esfuerzo percibido en la sesión, según una escala de 0 a 10.
* [Información sobre RPE en futbolistas](https://barcainnovationhub.com/es/influencia-percepcion-del-esfuerzo-sobre-el-entrenamiento-y-la-competicion-en-el-futbol/)

## Documentación
- [Configuración de git](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs)
- [Explicación de las herramientas elegidas](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/herramientas.md)
- [Pasos seguidos en el proyecto](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/pasos.md)
- [Despliegue en DockerHub](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/despliegueDockerHub/README.md)
- [Justificación de elección de imagen Docker](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/eleccionImagenDockerTest/README.md)
- [Buenas prácticas al hacer el Dockerfile](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/buenasPracticasDocker.md)

## Historias de usuario
Aquí aparece el [listado](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues?q=is%3Aopen+is%3Aissue+label%3Auser-stories)
- [ ] [HU1: Obtener listado de encuestas wellness de un determinado día](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues/4)
- [ ] [HU2: Obtener datos de encuestas wellness de un jugador en toda la temporada](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues/5)
- [ ] [HU3: Obtener listado de encuestas RPE realizadas en una determinada sesión](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues/6)
- [ ] [HU4: Obtener los datos de las encuestas RPE de un jugador a lo largo de la temporada](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues/7)
- [ ] [HU5: Rellenar encuesta RPE](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues/8)
- [ ] [HU6: Rellenar encuesta wellness](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues/9)

## Issues
Los [issues cerrados](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues?q=is%3Aissue+is%3Aclosed) y los [milestones](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/milestones) se pueden consultar en estos enlaces.

## Código
- [Clase Rpe](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/src/rpe.js)
- [Clase Wellness](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/src/wellness.js)
- [Clase GestorEncuestas](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/src/gestorEncuestas.js)
- [Clase del modelo](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/src/model.js)
- [Resto de ficheros fuente](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/src)
- [Ficheros de test](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/tests)

## Documentación
En la [carpeta docs](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/) aparece toda la documentación explicativa del proyecto, así como de los distintos [pasos](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/pasos.md) realizados y las [herramientas](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/herramientas.md) utilizadas en su desarrollo.

## Autor
Alberto Lejárraga Rubio
