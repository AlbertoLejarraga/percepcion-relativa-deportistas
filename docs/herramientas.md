# Explicación de las herramientas a utilizar
Se pretende desarrollar una API REST, para lo cual se utilizarán distintas tecnologías que se explicarán a continuación.
Este fichero se irá modificando según vaya avanzando el proyecto, ya que será necesario utilizar otras tecnologías no contempladas en este momento.

## Hito 1

### JavaScript
Se utilizará como lenguaje de programación JavaScript. Nunca he utilizado este lenguaje para programar el backend de una aplicación, por lo que no puedo dar muchos argumentos propios, más allá de que su utilización en el frontend me parece sencilla, debido también al gran número de librerías online disponibles.
Además, destacaría también que es un lenguaje ampliamente utilizado para el desarrollo de api´s rest y con una comunidad grande.

### Node.js
Utilizaré este entorno de ejecución, ya que es de código abierto y es uno de los más utilizados para el desarrollo en JavaScript.
Para la instalación de las librerías comentadas antes se utilizará el gestor de paquetes npm

### MongoDB
Para el almacenamiento de los datos se utilizará MongoDB, ya que es una base de datos documental que permite una gran libertad en cuanto al esquema de los datos a almacenar y esto puede ser muy útil para el proyecto.

## Hito 2

### Grunt
Se decide usar grunt como automatizador de tareas, siendo la de testing la primera tarea a automatizar. Esta decisión se toma tras compararlo con otras opciones como gulp, broccoli o brunch (en sitios como [este](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/gulp-vs-grunt-que-diferencia-a-estos-task-runners/) o [este](https://npmcompare.com/compare/broccoli,brunch,grunt,gulp)). Principalmente se utiliza por tener un gran número de plugins que pueden ser útiles durante el desarrollo del proyecto, más que ninguno de los otros gestores (el primero a utilizar será el plugin de Mocha, framework de testing para js). Además, siguiendo con esto, la comunidad parece también mayor en este sistema.
En cuanto a las otras opciones, gulp parece que está aumentando su uso por lo leído en los enlaces anteriores, y tiene su principal virtud frente a grunt en la velocidad de ejecución, al ejecutar directamente en memoria los procesos. Debido al desarrollo de un microservicio como este, sin un gran número de ficheros o líneas de código a ejecutar, esta velocidad de ejecución no se tiene especialmente en cuenta en la comparación.

### Mocha y Chai
Para realizar los tests se utilizará el framework Mocha que se ha citado arriba. Para las aserciones se utilizará la librería Chai, ya que aporta mas opciones que la libreria assert de Node.js. De hecho, se utiliza para el hito el "assertion style" expect, ya que hace un código más legible en cuanto a los tests a realizar.  Para su uso he tomado [este ejemplo](https://gist.github.com/trenchmortar/74b25d0911a33890cffab19b7b695e43) como referencia, así como la documentación del [plugin grunt-mocha-test](https://www.npmjs.com/package/grunt-mocha-test) utilizado.

## Hito 3

### Podman
Podman es un gestor de contenedores, similar a Docker en cuanto a su labor, pero muy distinto en cuanto a cómo enfoca esta gestión de contenedores.
El primer punto a favor que destaca al compararlo con Docker, es que no utiliza un daemon que esté constantemente corriendo en la máquina, sino que cada contenedor que se levanta utilizará uno de estos procesos. Entre los beneficios de esta forma de funcionamiento aparece un menor tamaño en memoria de los procesos o que un fallo en uno de los procesos relativos a un contenedor no afecta al resto, como podría pasar en docker en caso de que el proceso principal de Docker fallara.

Por otro lado, también destaca que se pueden ejecutar los contenedores desde cualquier usuario, siempre que se le haya proporcionado permisos para ello.

Además de todo esto, la compatibilidad de comandos entre los dos sistemas es prácticamente total, por lo que migrar de un sistema a otro no tiene mayor complicación. De hecho, para la construcción de imágenes, pese a que su principal sistema es buildah, puede utilizarse el sistema de Dockerfile sin problema. En el proyecto se ha utilizado esto último para generar las imágenes, Dockerfile.
Por último, destacaría también - el primer motivo por el que decidí probar este sistema en vez de docker - que, pese a que ahora mismo no es relevante para el proyecto, puedo serlo para un futuro, y es que Kubernetes ha declarado Docker como deprecado en una de sus últimas versiones (realmente no es problema, puesto que las imágenes de docker pueden seguir utilizándose), lo que podría indicar que la aceptación y el uso de Podman podría crecer. Hay una conversación interesante sobre esto [aquí](https://www.youtube.com/watch?v=h6ZbAivhu18)

### Alpine Linux
Alpine es una distribución de linux que basa su éxito en que es muy ligera, ya que contiene lo indispensable para funcionar, teniendo que instalar manualmente todo lo necesario que no forma parte de la distribución.

Esto lo hace ideal para la ejecución de los tests del proyecto, ya que lo que se necesita es, sobre todo, un entorno que ejecute los test lo más rápido posible. Como se puede ver en la [comparación de las distintas imágenes](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/eleccionImagenDockerTest/README.md), alpine es la mejor imagen para este propósito.

### DockerHub - Quay.io
DockerHub es un servicio de Docker en el que se puede almacenar en forma de repositorio las imágenes creadas. En este caso, se ha utilizado para conectar este repositorio de github con el de DockerHub, de forma que cada vez que se haga push al primero, se actualice también el segundo. Este proceso se ha explicado [aquí](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/despliegueDockerHub/README.md).
En cuanto a las alternativas, he estado probando Quay.io, ya que es una herramienta de la empresa RedHat, y, por tanto, se cita en la página web oficial de Podman, el gestor de contenedores utilizado. Mi repositorio está [linkado de igual manera](https://quay.io/repository/albertolejarraga/percepcion-relativa-deportistas) (se actualiza cada vez que se hace push) a como está con DockerHub, por lo que podría descargarse la imagen de aquí en vez de DockerHub y el funcionamiento sería el mismo.

Sobre las diferencias entre ambos he encontrado que parece que al hacer push al repositorio de github, la imagen está disponible algo más rápido en Quay.io que en DockerHub, aunque la diferencia entre ambos es solo de segundos. Por otra parte, el entorno de DockerHub me parece que tiene una interfaz más sencilla (más allá de que me parece más actualizada la de Docker, por ejemplo, no aparece el Dockerfile tan directamente como en DockerHub), y que facilita los procesos (por ejemplo, DockerHub actualiza el README al hacer push a github, mientras que pese a haber investigado, no creo que haya forma de hacerlo en Quay.io, al menos yo no la he encontrado).

Por todo esto, el repositorio que mantendré será el de DockerHub, aunque el de Quay.io se deja configurado para que se actualice también en cada push.

## Hito 4

### Travis
Este es uno de los sistemas de ci que utilizo para testear el proyecto. Por lo que he podido leer, fue el primer sistema de ci de código abierto, lo cual le hizo conseguir una gran popularidad que hace que su comunidad siga siendo muy amplia, con los beneficios que esto aporta en cuanto a reutilización de código ya hecho o resolución de problemas.

La principal necesidad que cubre Travis en el proyecto es que, utilizando las facilidades que aporta en cuanto a la prueba del código en distintas versiones del software, se ha determinado que se pruebe el código desde las versiones 10 a la 15 de Node.js. Esto permite conocer perfectamente para qué versiones de node funcionará la aplicación, además de que, si en algún momento se instalan nuevas dependencias que en el momento actual no se tienen en cuenta y que no son compatibles con alguna de las versiones, se conocerá esta incompatibilidad sin necesidad de probar una a una todas ellas.

Por último, Travis aporta también la posibilidad de ejecutar en paralelo los tests para las distintas versiones, lo cual agiliza mucho esta ejecución, ahorrando bastante tiempo.

### GitHub Actions
GitHub Actions es el otro sistema que he utilizado en cuanto a la integración continua del proyecto. He decidido utilizar este sistema porque quería, principalmente, poder testear el proyecto desde un contenedor de Podman generado a partir del Dockerfile que aparece en la raíz del proyecto y que se desarrolló para el hito anterior. Esto, me aporta la posibilidad de, en un futuro, poder añadir nuevas funcionalidades que, quizás, con otros servicios, serían más complicadas de añadir, y que, al ser una imagen propia, tenga todo el control sobre lo que se ejecute.

Además de este como sistema de ci adicional, he estado estudiando también otros que podía haber utilizado, y principalmente, JFrog (en especial los "artifacts") y CircleCI, aunque los he desechado porque para el propósito que tenía de utilizar mi propio contenedor Podman, utilizar las GitHub Actions era la forma más sencilla, aunque las otras opciones podían llegar a ser igual de funcionales con algo más de trabajo.

Además, he estado probando también la posibilidad de, con las Actions open source que ya están subidas, ejecutar el código directamente en Node.js, y hacerlo, al igual que con travis, en distintas versiones, aunque me ha parecido innecesario al hacer ya esto en la citada plataforma. Por último, comentar también que se utiliza Ubuntu como sistema en el que ejecutar la Action, pero que se podría ejecutar también en Windows Server y/o macOS si fuera necesario, aunque yo no lo he considerado así al ejecutarse el código, en realidad, en el interior de un contenedor Podman basado en Alpine, y por tanto, ser independiente, en principio, del sistema operativo del host.

## Hito 5

### MongoDB Atlas
Como ya se explicó más arriba en este documento (para los primeros hitos), la base de datos que iba a utilizarse era MongoDB. Esta puede instalarse también en local, pero he decidido tomar la opción de su instalación en un clúster en la nube.

Esto es así porque debido a que se necesitaba acceder a la base de datos con funciones serverless desplegadas también en la nube, lo más sencillo era utilizar uno de estos clúster gratuitos de los que provee la plataforma. Su configuración inicial puede consultarse en [esta documentación](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/configuracionMongo/README.md).

La otra opción era realizar una instalación en local y acceder a ella utilizando software como MongoDB Compass o directamente desde la línea de órdenes, pero hubiera sido mucho más costoso de acceder desde el exterior, como por ejemplo, desde las funciones serverless.

### Dotenv
Este módulo de npm permite cargar las variables de entorno de un fichero .env directamente en el "process.env". En este caso, se ha utilizado para alguno de los desarrollos en local, ya que hace transparente el uso de este variables de entorno, ya sea en los casos en los que esté presente un .env o en aquellos en los que directamente se coja la variable de las variables de entorno que proveen los distintos sistemas (Github, Travis, Vercel, Netlify, etc.). Hasta el momento de escribir esta documentación, se ha utilizado tanto para obtener la uri de conexión a la base de datos como para obtener el token del bot de Telegram.

### Vercel
Vercel es una de las opciones que podía tenerse en cuenta para el despliegue de funciones serverless, ya que proveía de un servicio gratuito para el despliegue de este tipo de aplicaciones. Había otros servicios posibles pero se han ido descartando por distintos motivos. Algunos no son técnicos, como la necesidad de registrar una tarjeta de crédito en AWSLambda o en Azure Functions incluso en su versión gratuita. También se ha probado Cloud Functions for Firebase, que se ha descartado porque alguna de las funciones que se veían necesarias no eran gratuitas, además de sobrecargar el repositorio con muchos ficheros solo necesarios para el despliegue en local para el desarrollo, cosa que no hacen los demás proveedores.

Por todo esto, entre otras cosas, se ha decidido utilizar tanto Vercel como Netlify para el despliegue de dos aplicaciones serverless. Las desarrolladas con Vercel se encuentran en [esta carpeta](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/api), siendo la función de este hito (y la utilizada por el bot de Telegram) la de "rpeSesion", que permite obtener el rpe determinado por un jugador en una fecha concreta ([HU3](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues/6)).

Esta función es accesible desde [aquí](https://percepcion-relativa-deportistas.vercel.app/api/rpeSesion?idJugador=123456&fecha=2021/02/16), con los parámetros pasados en la url.

Por último, comentar que se ha conectado el repositorio de GitHub con esta plataforma para continuar con el método de integración continua iniciado en hitos anteriores, como puede comprobarse en uno de los [ejercicios del tema](https://github.com/AlbertoLejarraga/Autoevaluacion-IV-2020/blob/main/Semana%208_9-Serverless/Ejercicio%203/README.md)

### Netlify
Este es otro servicio que permite el despliegue de manera gratuita, en un principio, de funciones serverless, pero me remito al apartado anterior para su selección como tecnología a utilizar.

En cuanto al proyecto, se han desarrollado las funciones que se encuentran [aquí](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/netlify/functions), entre las que están una función de prueba, una función réplica de la generada en Vercel sobre la obtención del rpe de una sesión y que se ha utilizado para ir aprendiendo como funcionaba técnicamente esta solución y, por último, la de nuevoRpe, que permite establecer un nuevo valor de rpe para una sesión ([HU5](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/issues/8)).

Estas funciones son accesibles desde estos enlaces:
  - [rpeSesion](https://percepcion-relativa-deportistas.netlify.app/.netlify/functions/rpeSesion?idJugador=123456&fecha=2021/02/16) con parámetros idJugador y fecha
  - [nuevoRpe](https://percepcion-relativa-deportistas.netlify.app/.netlify/functions/nuevoRpe) con parámetros de inserción pasados por POST.

En cuanto a estos dos servicios, se han testeado las correspondientes a las historias de usuario (la de rpeSesion de Netlify no, al considerarse solo de prueba).

Por último, al igual que en Vercel se ha conectado al repositorio de GitHub para el despliegue automático de las aplicaciones, como muestra [esta imagen](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/img/netlify_ci.png)

### Telegram
El servicio de mensajería Telegram permite desplegar bots que realicen ciertas funciones. En este caso, se ha utilizado como un sistema que permita acceder a las funciones serverless desarrolladas con las dos tecnologías anteriores. Para ello se han seguido una serie de pasos que pueden encontrarse en [esta documentación](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/blob/master/docs/botTelegram/README.md).

Debo decir que el bot se ejecuta en local y que no se ha desplegado en la nube, para lo cual habría que configurarlo en modo webhook (el servidor del bot recibiría una request cada vez que se mande un mensaje) en vez de en modo polling (cada "x" tiempo el servidor pregunta si ha habido un nuevo mensaje), además de que estuviera alojado en un servidor visible en internet. Esta opción de polling en vez de webhook se comenta más bien por términos de eficiencia y de reducción de costes, ya que el servidor se activaría solo cuando recibe una llamada y no con polling que debe estar constantemente "preguntando".

### Axios
Esta librería se utiliza para realizar llamadas a las funciones serverless desde el bot de Telegram. Permite de manera bastante más sencilla y con menos lineas que la librería nativa de node, realizar llamadas a sitios web. En este caso, se utiliza con los métodos GET y POST de html para contactar con las funciones comentadas en los apartados de Netlify y Vercel de este mismo documento.

### Supertest
Se añade esta librería a las utilizadas para realizar tests al código. Permite ejecutar llamadas asíncronas a sitios web, de manera similar a la anterior librería pero enfocada precisamente a tests, pues Mocha no permite utilizar Axios (o al menos yo no he encontrado la forma).
