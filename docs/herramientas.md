# Explicación de las herramientas a utilizar
Se pretende desarrollar una API REST, para lo cual se utilizarán distintas tecnologías que se explicarán a continuación.
Este fichero se irá modificando según vaya avanzando el proyecto, ya que será necesario utilizar otras tecnologías no contempladas en este momento.

### JavaScript
Se utilizará como lenguaje de programación JavaScript. Nunca he utilizado este lenguaje para programar el backend de una aplicación, por lo que no puedo dar muchos argumentos propios, más allá de que su utilización en el frontend me parece sencilla, debido también al gran número de librerías online disponibles.
Además, destacaría también que es un lenguaje ampliamente utilizado para el desarrollo de api´s rest y con una comunidad grande.

### Node.js
Utilizaré este entorno de ejecución, ya que es de código abierto y es uno de los más utilizados para el desarrollo en JavaScript.
Para la instalación de las librerías comentadas antes se utilizará el gestor de paquetes npm

### MongoDB
Para el almacenamiento de los datos se utilizará MongoDB, ya que es una base de datos documental que permite una gran libertad en cuanto al esquema de los datos a almacenar y esto puede ser muy útil para el proyecto.

### Grunt
Se decide usar grunt como automatizador de tareas, siendo la de testing la primera tarea a automatizar. Esta decisión se toma tras compararlo con otras opciones como gulp, broccoli o brunch (en sitios como [este](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/gulp-vs-grunt-que-diferencia-a-estos-task-runners/) o [este](https://npmcompare.com/compare/broccoli,brunch,grunt,gulp)). Principalmente se utiliza por tener un gran número de plugins que pueden ser útiles durante el desarrollo del proyecto, más que ninguno de los otros gestores (el primero a utilizar será el plugin de Mocha, framework de testing para js). Además, siguiendo con esto, la comunidad parece también mayor en este sistema.
En cuanto a las otras opciones, gulp parece que está aumentando su uso por lo leído en los enlaces anteriores, y tiene su principal virtud frente a grunt en la velocidad de ejecución, al ejecutar directamente en memoria los procesos. Debido al desarrollo de un microservicio como este, sin un gran número de ficheros o líneas de código a ejecutar, esta velocidad de ejecución no se tiene especialmente en cuenta en la comparación.

### Mocha y Chai
Para realizar los tests se utilizará el framework Mocha que se ha citado arriba. Para las aserciones se utilizará la librería Chai, ya que aporta mas opciones que la libreria assert de Node.js. De hecho, se utiliza para el hito el "assertion style" expect, ya que hace un código más legible en cuanto a los tests a realizar.  Para su uso he tomado [este ejemplo](https://gist.github.com/trenchmortar/74b25d0911a33890cffab19b7b695e43) como referencia, así como la documentación del [plugin grunt-mocha-test](https://www.npmjs.com/package/grunt-mocha-test) utilizado.

### Podman
Podman es un gestor de contenedores, similar a Docker en cuanto a su labor, pero muy distinto en cuanto a cómo enfoca esta gestión de contenedores.
El primer punto a favor que destaca al compararlo con Docker, es que no utiliza un daemon que esté constantemente corriendo en la máquina, sino que cada contenedor que se levanta utilizará uno de estos procesos. Entre los beneficios de esta forma de funcionamiento aparece un menor tamaño en memoria de los procesos o que un fallo en uno de los procesos relativos a un contenedor no afecta al resto, como podría pasar en docker en caso de que el proceso principal de Docker fallara.
Por otro lado, también destaca que se pueden ejecutar los contenedores desde cualquier usuario, siempre que se le haya proporcionado permisos para ello.
Además de todo esto, la compatibilidad de comandos entre los dos sistemas es prácticamente total, por lo que migrar de un sistema a otro no tiene mayor complicación. De hecho, para la construcción de imágenes, pese a que su principal sistema es buildah, puede utilizarse el sistema de Dockerfile sin problema. En el proyecto se ha utilizado esto último para generar las imágenes, Dockerfile.
Por último, destacaría también - el primer motivo por el que decidí probar este sistema en vez de docker - que, pese a que ahora mismo no es relevante para el proyecto, puedo serlo para un futuro, y es que Kubernetes a declarado Docker como deprecado en una de sus últimas versiones (realmente no es problema, puesto que las imágenes de docker pueden seguir utilizándose), lo que podría indicar que la aceptación y el uso de podman podría crecer. Hay una conversación interesante sobre esto [aquí](https://www.youtube.com/watch?v=h6ZbAivhu18)

### Alpine Linux
Alpine es una distribución de linux que basa su éxito en que es muy ligera, ya que contiene lo indispensable para funcionar, teniendo que instalar manualmente todo lo necesario que no forma parte de la distribución.
Esto lo hace ideal para la ejecución de los tests del proyecto, ya que lo que se necesita es, sobre todo, un entorno que ejecute los test lo más rápido posible. Como se puede ver en la [comparación de las distintas imágenes](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/eleccionImagenDockerTest/README.md), alpine es la mejor imagen para este propósito.

### DockerHub
DockerHub es un servicio de Docker en el que se puede almacenar en forma de repositorio las imágenes creadas. En este caso, se ha utilizado para conectar este repositorio de github con el de DockerHub, de forma que cada vez que se haga push al primero, se actualice también el otro. Este proceso se ha explicado [aquí](https://github.com/AlbertoLejarraga/percepcion-relativa-deportistas/tree/master/docs/despliegueDockerHub/README.md).
En cuanto a las alternativas, he estado probando quay.io, ya que es una herramienta de la empresa RedHat, y, por tanto, se cita en la página web oficial de podman, el gestor de contenedores usado. Mi repositorio está [linkado de igual manera](https://quay.io/repository/albertolejarraga/percepcion-relativa-deportistas) a como está con DockerHub, pero he decidido poner como principal a DockerHub (y será el que siga usando), ya que me parece que su usabilidad es mayor, su uso está más extendido y la interfaz me parece más sencilla.
