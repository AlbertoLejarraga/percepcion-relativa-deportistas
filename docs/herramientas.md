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
Como ya se explicó más arriba en este documento (para los primeros hitos) la base de datos que iba a utilizarse era MongoDB. Esta puede instalarse también en local, pero he decidido tomar la opción de su instalación en un clúster en la nube.

Esto es así porque debido a que se necesitaba acceder a la base de datos con funciones serverless desplegadas también en la nube, lo más sencillo era utilizar uno de estos clúster gratuitos de los que provee la plataforma. Su configuración inicial puede consultarse en [esta documentación](xxxxx).

La otra opción era realizar una instalación en local y acceder a ella utilizando software como MongoDB Compass o directamente desde la línea de órdenes, pero hubiera sido mucho más costoso de acceder desde el exterior, como por ejemplo, desde las funciones serverless.


### Telegram


### Axios
