# Explicación de los pasos seguidos en los distintos hitos del proyecto

## Hito 1: Estructura general del proyecto
Lo principal en este hito es la creación de alguna clase de las que se utilizará en el proyecto.

Para ello, ha sido necesario ya la elección de distintas herramientas con las que se trabajará, como se ha detallado [aquí](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/herramientas.md)

Además, se ha empezado a utilizar los issues. A lo largo del hito se han ido abriendo y cerrando varios, como consta [aquí](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues?q=is%3Aissue+is%3Aclosed)

También se ha declarado como issue las distintas historias de usuario previstas para el proyecto y detalladas [aquí](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues)

En cuanto a la creación de alguna clase, se han creado las clases Wellness y RPE, cuyos objetos contendrán lo relativo a las encuestas rellenadas por los futbolistas en cada momento del día, lo cual puede consultarse en [la sección de código del repositorio](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/src)

Para la entrega en la evaluación extraordinaria, siguiendo los comentarios de la evaluación del hito 1 durante la evaluación ordinaria, se han modificado estas clases incluyendo métodos relativos a las historias de usuario.

## Hito 2: Tests
En este hito se trata de automatizar las tareas para el despliegue de la aplicación. Tanto en lo relativo a las librerías necesarias para su instalación, utilizando un fichero [package.json](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/package.json), como para, y principalmente en este hito, la ejecución de tests al código.

Para esta automatización de tareas se ha decidido utilizar grant, mientras que para la ejecución de test se ha utilizado el framework Mocha, junto con Chai como librería de aserciones, tal como se detalla en el fichero de [herramientas](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/herramientas.md)

Para pasar todos los test, se han incluido las dependencias en el package.json y se han instalado con "npm install", para después poder utilizar las utilidades en el proyecto.

Se han completado, tras esto, las clases del proyecto, Rpe y Wellness, que están en los ficheros que aparecen en [este directorio](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/src). Entre los métodos desarrollados, están los relativos a las historias de usuario 5 y 6, aunque no se han marcado como "closed" por no estar disponibles aún, más allá de su uso en terminal.

Después de esto, se ha generado el [fichero Gruntfile.js](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/Gruntfile.js), donde se detallan los test unitarios que deben pasar las funciones a desarrollar.

Se han ejecutado los test sobre el código desarrollado (directamente con el comando "grunt" o con "npm test") y se han detectado distintos fallos, que se han corregido antes de subir todo al repositorio.

Todos estos pasos han ido cerrando issues del milestone "Hito 2", como puede observarse [aquí](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues?q=is%3Aissue+is%3Aclosed+milestone%3A%22Hito+2%22).

Por último, decir que en este último enlace se puede comprobar que no se ha seguido realmente el proceso de desarrollo TDD, tal como se ha explicado en este fichero, pues primero se ha hecho el código y después el fichero de test. Quizás en siguientes hitos debería invertir este proceso y empezar con los test antes de desarrollar el código en sí, para conocer de primera mano si me aporta algo en el desarollo de software o no.

## Hito 3: Contenedores
En este hito se "contenedoriza" la ejecución de los tests desarrollados en el hito anterior, es decir, se genera un contenedor que tenga todo lo necesario para ejecutar los tests sobre el código del repositorio.

Para ello, se utiliza la herramienta de gestión de contenedores Podman, tal como se explica, junto con el resto de herramientas del proyecto, en el [fichero de herramientas](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/herramientas.md). Para instalarlo, se siguen las instrucciones de [su página oficial](https://podman.io/getting-started/installation).

Tras esto, se han ido probando distintas imágenes para la ejecución de los tests, por lo que era necesario que - bien porque la imagen contuviera, o bien porque se instalara mediante el Dockerfile - estuviera presente NodeJS. Todo lo relativo a esta elección de la imagen definitiva puede encontrarse [aquí](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/eleccionImagenDockerTest/README.md).

Una vez modelada la imagen del contenedor que ejecute los tests sobre el repositorio con un Dockerfile, se ha desplegado el proyecto en dos servicios de imágenes de contenedores, DockerHub y Quay.io. La configuración del primero de ellos se detalla en [esta documentación](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/despliegueDockerHub/README.md), mientras que sobre Quay.io, se explica en el fichero de herramientas antes enlazado que, en principio, no lo voy a seguir utilizando, por parecerme una mejor opción DockerHub, pese a estar funcionando para descargar la imagen de igual forma.

Por último, se detallan también las buenas prácticas seguidas según la documentación oficial de docker para la realización de Dockerfile's en [este documento](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/buenasPracticasDocker.md)

## Hito 4: Integración continua
En este hito se trata de añadir integración continua al proyecto, de manera que cada vez que se hagan modificaciones en la rama "master", se lleven a cabo los tests del código.

Para hacerlo, se utiliza, en primer lugar travis, lo cual se justifica, como el resto de herramientas utilizadas en el proyecto en [este fichero](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/herramientas.md).


En cuanto al proyecto, se utiliza para pasar los test al código cada vez que se hace push al repositorio, pudiéndose comprobar su configuración en los ejercicios [1](https://github.com/AlbertoLejarraga/Autoevaluacion-IV-2020/blob/main/Semana%206_7-CI/Ejercicio%201/README.md) y [2](https://github.com/AlbertoLejarraga/Autoevaluacion-IV-2020/blob/main/Semana%206_7-CI/Ejercicio%202/README.md) de las semanas 6 y 7. En estos ficheros se muestra un fichero .travis.yml de prueba, que ha sido ligeramente modificado para su utilización final, como puede verse [aquí](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/.travis.yml).
Por último, comentar que en todo lo relativo a tests se utiliza el gestor de tareas grunt, ya explicado más arriba, mediante el uso de la orden "npm test" en el [package.json](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/package.json), quien llama precisamente a grunt para que ejecute lo que se determina en el [gruntfile](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/Gruntfile.js).
Este fichero no se ha modificado con respecto al hito anterior, y lo que se ha configurado es la Action en sí en su [fichero de configuración](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/.github/workflows/push.yml).
