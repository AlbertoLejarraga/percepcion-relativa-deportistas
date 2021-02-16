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

Para hacerlo, se utiliza, en primer lugar Travis, lo cual se justifica, como el resto de herramientas utilizadas en el proyecto en [este fichero](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/herramientas.md). Las imágenes de su configuración, en cambio, no se han puesto en este repositorio ya que se hizo al realizar los ejercicios del tema correspondiente ([ejercicio 1](https://github.com/AlbertoLejarraga/Autoevaluacion-IV-2020/blob/main/Semana%206_7-CI/Ejercicio%201/README.md) y [ejercicio 2](https://github.com/AlbertoLejarraga/Autoevaluacion-IV-2020/blob/main/Semana%206_7-CI/Ejercicio%202/README.md)), donde se explican los pasos seguidos. La diferencia que hay es que, en estos ficheros, se muestra un .travis.yml de prueba, que ha sido ligeramente modificado para su utilización final, como puede verse [aquí](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/.travis.yml).

Tras configurar este sistema, se han estudiado otros, como se indica en el fichero de herramientas antes citado, quedándome finalmente con GitHub Actions. Su configuración aparece en [este otro fichero](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/.github/workflows/push.yml). Como se puede ver, se lanza el contenedor Podman creado en el hito anterior para ejecutar los tests.

Además, comentar que en todo lo relativo a tests se utiliza el gestor de tareas grunt, ya explicado en hitos anteriores, mediante el uso de la orden "npm test", que en el [package.json](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/package.json), indica que se debe llamar precisamente a grunt para que ejecute lo que se determina en el [gruntfile](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/Gruntfile.js).

Por último, se han hecho avances en el proyecto más allá de lo relativo al hito en concreto, se resumen a continuación:
  * Creación de la [clase GestorEncuestas](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/src/gestorEncuestas.js): se crea esta clase para que sea la que reciba las peticiones de todo lo relacionado con el proyecto (historias de usuario), de manera que actúa de intermediaria entre las clases Rpe y Wellness y la clase Model que gestionará la base de datos. Con lo que se ha avanzado, podrían cerrarse las historias de usuario que se establecen [aquí](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues?q=is%3Aopen+is%3Aissue+label%3Auser-stories), ya que se gestiona tanto la creación como la obtención de encuestas, pero no se hace (el close de las hu) por faltar aún la instalación y configuración de la base de datos.
  * Creación de la [clase Model](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/src/model.js): esta clase gestionará lo relacionado con la base de datos MongoDB, creándose los métodos necesarios que se utilizan en la clase anterior. Por ahora, estos métodos devuelven valores aleatorios con el mismo formato que los que tendrá que devolver cuando se conecte con la base de datos. Debido a esto, no se prueba esta clase, se harán los test oportunos cuando sea realmente la clase que gestione el modelo del proyecto.
  * Modificación de la [clase Rpe](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/src/rpe.js) y la [clase Wellness](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/src/wellness.js): se modifican ligeramente estas clases, sacando alguno de los métodos que aparecían en ellas referentes a las historias de usuario, pero que en realidad no debían estar ahí, sino en el "GestorEncuestas". Se crean también algunos métodos útiles como el "as_dict" (objeto en formato diccionario) y el "get [Symbol.toStringTag]" (tipo del objeto al interrogar por "instanceof", por ejemplo).
  * Realización de los [tests de estas clases](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/tests/principal.js): se añaden tests unitarios para las funciones de rpe y wellness, así como para cada una de las funciones que contiene la clase GestorEncuestas. Con respecto a estos, decir que no deberían llamarse unitarios al integrar métodos de la clase Model que no han sido probados aún, pero, en principio, se ha tratado de que los métodos la clase Model actual devuelvan lo mismo que devolverán al unir la bbdd.

## Hito 5: Funciones serverless
